STORE.namespace("STORE.reponsiWindow");

STORE.reponsiWindow = function(){
    
    if (window.innerWidth < 600) {
        $("dadoHarnina").style.display = "none";
        $("mainMenu").setAttribute('class',"contenedorColumna");
        STORE.labelOffOn("none");
        document.body.style.fontSize = "0.8em";
    }    
    if (window.innerWidth > 600 && window.innerWidth < 900) {
        $("dadoHarnina").style.display = "block";
        $("mainMenu").className = "contenedorFila50"; 
        STORE.labelOffOn("");
        document.body.style.fontSize = "1.2em";
    }
    if (window.innerWidth > 900) {
        $("dadoHarnina").style.display = "block";
        $("mainMenu").setAttribute('class',"contenedorFila50");
        STORE.labelOffOn("");
        document.body.style.fontSize = "1.6em";
    }
}

STORE.labelOffOn = function(state){
    for (var i=0; i <  STORE.nodeListInput.length; i++){
        $("label_" + STORE.nodeListInput[i].id).style.display = state} 
}