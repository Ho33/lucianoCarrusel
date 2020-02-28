STORE.namespace("STORE.sendUpdatePersonalDataAjax");

STORE.sendUpdatePersonalDataAjax = function () {
    var ajax = STORE.Ajax;
    var llamada;
    var envio = {
        nif: $("dni").value,
        lastName: $("lastname").value,
        firstName: $("firstname").value,
        adress: $("adress").value,
        cp: $("cp").value,
        birthday: $("birthday").value,
        email: $("email").value,
        landline: ($("select_landline").value  + $("landline").value),
        mobile: ($("select_mobile").value  + $("mobile").value)
    };
    var json = JSON.stringify(envio);
    llamada = new ajax.CargadorContenidos("/managerUpdateDataUser", function () {
        if (llamada.req.responseText.indexOf("ok")!== -1) {
                alert("Validado,verificado y Update en BBDD");
            $("centerPanelPage").innerHTML = "";
            var page = new STORE.FactoryMainContainer();
            page.getCenterPanelPagePagination();
        } else {
            var errorsList = JSON.parse(llamada.req.responseText);
            for (var i=0; i <  STORE.nodeListInput.length; i++){
                $("labelError_" + STORE.nodeListInput[i].id).innerText = "Aviso Servidor: "
            }
            errorsList.forEach(function (error) {
                $(error.controlName).setAttribute('style', 'background-color:' + STORE.error.get_errorColor() + ' !important');
                $("labelError_" + error.controlName).style.display = "block";
                $("labelError_" + error.controlName).innerHTML +=  error.messageError + " <br>";
                STORE.submit.off();
            });
        }
    }, json);

};
