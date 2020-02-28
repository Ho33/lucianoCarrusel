STORE.namespace("STORE.cancelBoxClient");


STORE.cancelBox = function(){
    var cancelBox = document.createElement("div");
    cancelBox.id = "cancelBoxClient";
    cancelBox.className = "boton s11";
    cancelBox.innerText = "Cancel";
    cancelBox.addEventListener("click", STORE.cancelTask);
    return cancelBox;
};

STORE.cancelTask = function(){
    $("centerPanelPage").innerHTML = "";
    var page = new STORE.FactoryMainContainer();
    page.getCenterPanelPagePagination();
};
