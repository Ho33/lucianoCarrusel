
(function(){

    STORE.clientFactory();

    new STORE.DOMObjectLook("updateDataUser");
    new STORE.DOMObjectLook("updateDataLogin");
    new STORE.DOMObjectLook("updateImageUser");
    new STORE.DOMObjectLook("deleteUser");
    new STORE.DOMObjectLook("logoutUser");

    $("updateDataUser").addEventListener("click", STORE.viewAuthentication);
    $("updateDataLogin").addEventListener("click", STORE.viewAuthentication);
    $("updateImageUser").addEventListener("click", STORE.viewAuthentication);
    $("deleteUser").addEventListener("click", STORE.viewAuthentication);
    $("logoutUser").addEventListener("click", STORE.logoutUser);

    window.addEventListener("resize",STORE.reponsiWindow);

})();







