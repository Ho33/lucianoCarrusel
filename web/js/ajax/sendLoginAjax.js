STORE.namespace("STORE.sendLoginAjax");

STORE.sendLoginAjax = function () {
    var ajax = STORE.Ajax;
    var llamada;
    var envio = {
        user: $("user").value,
        password: $("password").value
    };
    if (sessionStorage.getItem('bonus')== 1){
        STORE.submit.off();
    }

    var json = JSON.stringify(envio);
    llamada = new ajax.CargadorContenidos("/managerLogin", function () {
        var json = JSON.parse(llamada.req.responseText);
        if (json.bonus){
            STORE.error.set_message(json.message);
            sessionStorage.setItem('bonus', json.bonus);
             STORE.error.on();
             STORE.submit.on();
             STORE.unlocked.off();
        }else  if (json.durationLock){
            STORE.error.on();
            STORE.submit.off();
            STORE.unlocked.off();
            STORE.error.set_message(json.message);
            $("user").disabled = true;
            $("password").disabled = true;
            var seconds = 0;
            var timeLocked;
           if(sessionStorage.getItem('chrono')>0) {
               timeLocked = sessionStorage.getItem('chrono');
           }
           else{
               timeLocked = json.durationLock;
           }
            var intervalId = null;
            var locked = function(){
                if (seconds >= timeLocked) {
                    STORE.error.set_message("Pulsa botón para el desbloqueo momentáneo");
                    STORE.unlocked.on();
                    clearInterval(intervalId);
                }
                else {
                    seconds = seconds + 1;
                    sessionStorage.setItem('chrono',(timeLocked - seconds));
                    STORE.error.set_message("Estas Bloqueado. Te quedan " + (timeLocked - seconds) + " seconds");
                }
            };
            intervalId = setInterval(locked, 1000);
            } else if (json.ok){

               sessionStorage.setItem("user", $("user").value);
               sessionStorage.setItem("idClient", json.idClient);
               location.reload();
                } else if (json.locked){

                        STORE.error.on();
                        STORE.submit.off();
                        STORE.unlocked.on();
                        $("user").disabled = true;
                        $("password").disabled = true;
                        STORE.error.set_message("Mira tu correo, sigue el enlace y pulsa el botón Unlocked");
                    } else {if(Array.isArray(json)){
                              for (var i = 0; i < STORE.nodeListInput.length; i++) {
                                    $("labelError_" + STORE.nodeListInput[i].id).innerText = "Aviso Servidor: "
                                }
                                json.forEach(function (error) {
                                    $(error.controlName).setAttribute('style', 'background-color:' + STORE.error.get_errorColor() + ' !important');
                                    $("labelError_" + error.controlName).style.display = "block";
                                    $("labelError_" + error.controlName).innerHTML += error.messageError + " <br>";
                                    STORE.submit.off();
                                }
                              );
                            }
                       }
    }, json);
};





