STORE.namespace("STORE.sendUpdateLoginAjax");

STORE.sendUpdateLoginAjax = function () {

    var ajax = STORE.Ajax;
    var llamada;
    if ($("password").value == $("passwordConfirm").value) {
        var envio = {
            user: $("user").value,
            password: $("password").value
        };
        if (sessionStorage.getItem('bonus') == 1) {
            STORE.submit.off();
        }
        var json = JSON.stringify(envio);
        llamada = new ajax.CargadorContenidos("/managerUpdateLogin", function () {
            if (llamada.req.responseText.indexOf("ok") !== -1) {
                alert("Validado,verificado y Update Login en BBDD");
                sessionStorage.setItem("user", $("user").value);
                $("centerPanelPage").innerHTML = "";
                var page = new STORE.FactoryMainContainer();
                page.getCenterPanelPagePagination();

            } else {
                var errorsList = JSON.parse(llamada.req.responseText);
                for (var i = 0; i < STORE.nodeListInput.length; i++) {
                    $("labelError_" + STORE.nodeListInput[i].id).innerText = "Aviso Servidor: "
                }
                errorsList.forEach(function (error) {
                    $(error.controlName).setAttribute('style', 'background-color:' + STORE.error.get_errorColor() + ' !important');
                    $("labelError_" + error.controlName).style.display = "block";
                    $("labelError_" + error.controlName).innerHTML += error.messageError + " <br>";
                    STORE.submit.off();
                });
            }
        }, json);
    }else {
        STORE.error.on();
        STORE.submit.off();
        STORE.error.set_message("No coincide la clave");
    }

};
