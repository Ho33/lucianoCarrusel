STORE.namespace("STORE.acceptBoxClient");


STORE.acceptBoxClient = function(){

    var acceptBox = document.createElement("div");
    acceptBox.id = "acceptBoxClient";
    acceptBox.className = "boton s11";
    acceptBox.innerText = "Accept";
    acceptBox.addEventListener("click", STORE.acceptClient);
    return acceptBox;
}
STORE.acceptClient = function(){
   var ajax = STORE.Ajax;
   if (sessionStorage.getItem("confirmCall") == "deleteUser" ){
      var  llamada = new ajax.CargadorContenidos("/deleteUser", function () {
           if (llamada.req.responseText.indexOf("ok") !== -1) {
               sessionStorage.setItem("user", "");
               location.reload();
           }
       });
   }
    if (sessionStorage.getItem("confirmCall") == "logoutUser" ){
        var  llamada = new ajax.CargadorContenidos("/logoutUser", function () {
            if (llamada.req.responseText.indexOf("ok") !== -1) {
                sessionStorage.setItem("user", "");
                location.reload();
            }
        });
    }
}