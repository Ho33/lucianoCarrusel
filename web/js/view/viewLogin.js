STORE.namespace("STORE.viewLogin");
STORE.viewLogin = function(){

    var miMarco = {text : "Login Client"};
    var marco = STORE.mainFrame(miMarco);
    var dataControlFactory = new STORE.DataControlFactory();
    marco.appendChild(dataControlFactory.user());
    marco.appendChild(dataControlFactory.password());
    marco.appendChild(STORE.errorBox());
    marco.appendChild(STORE.submitBox());
    marco.appendChild(STORE.unlockedBox());

    STORE.error = STORE.ErrorManagement();
    STORE.submit = STORE.SubmitManagement();
    STORE.unlocked = STORE.UnlockedManagement();
    STORE.unlocked.listen();
    STORE.unlocked.off();

    STORE.StrategyDisplayFormAll("STORE.sendLoginAjax");
};