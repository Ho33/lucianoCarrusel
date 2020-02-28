(function(){
     
    STORE.indexFactory();

    new STORE.DOMObjectLook("signUp");
    new STORE.DOMObjectLook("login");
    new STORE.DOMObjectLook("offers");

    $("signUp").addEventListener("click", STORE.viewSignUp);

    $("login").addEventListener("click", STORE.viewLogin);

    window.addEventListener("resize",STORE.reponsiWindow);

})();