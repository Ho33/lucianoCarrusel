STORE.namespace("STORE.viewAuthentication");
STORE.viewAuthentication = function(e){

    sessionStorage.setItem("mainMenuOpcionClient",e.currentTarget.id);

    var miMarco = {text : "Authentication Client"};
    var marco = STORE.mainFrame(miMarco);
    var dataControlFactory = new STORE.DataControlFactory();
    marco.appendChild(dataControlFactory.password());


    marco.appendChild(STORE.errorBox());
    marco.appendChild(STORE.submitBox());
    marco.appendChild(STORE.unlockedBox());

    marco.appendChild(dataControlFactory.user());

    STORE.error = STORE.ErrorManagement();
    STORE.submit = STORE.SubmitManagement();
    STORE.unlocked = STORE.UnlockedManagement();
    STORE.unlocked.listen();
    STORE.unlocked.off();
    $("div_user").style.visibility = "hidden";
    $("user").value = sessionStorage.getItem("user");
    STORE.StrategyDisplayFormAll("STORE.sendAuthenticationAjax");
};