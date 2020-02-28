STORE.namespace("STORE.sendUnlockedAjax");

STORE.sendUnlockedAjax = function () {

    var ajax = STORE.Ajax;
    var llamada;

    llamada = new ajax.CargadorContenidos("/unlockedLogin", function () {
        var json = JSON.parse(llamada.req.responseText);
        if (json.unlocked) {
            sessionStorage.setItem('chrono', 0);
            STORE.error.set_message(json.message);
            STORE.error.on();
            STORE.submit.on();
            STORE.unlocked.off();
            $("user").disabled = false;
            $("password").disabled = false;
        }
    });
};