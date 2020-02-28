STORE.namespace("STORE.viewConfirm");
STORE.viewConfirm = function(){

    var miMarco = {text : "Confirm s/n"};
    var marco = STORE.mainFrame(miMarco);
    var miMarco = {text : "Confirm"};
    var marco = STORE.mainFrame(miMarco);
    marco.appendChild(STORE.acceptBox());
    marco.appendChild(STORE.cancelBox());
};