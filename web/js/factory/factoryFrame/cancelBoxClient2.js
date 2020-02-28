STORE.namespace("STORE.cancelBoxClient2");


STORE.cancelBoxClient2 = function(){
    var cancelBox = document.createElement("div");
    cancelBox.id = "cancelBoxClient";
    cancelBox.className = "boton s11";
    cancelBox.innerText = "Cancel";
    cancelBox.addEventListener("click", STORE.cancelClient);
    return cancelBox;
};

STORE.cancelClient = function(){
    $("centerPanelPage").innerHTML = "Escaparate carrusel";
};
