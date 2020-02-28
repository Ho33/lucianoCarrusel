STORE.namespace("STORE.viewUpdateLogin");
STORE.viewUpdateLogin = function(dataLogin) {
    var miMarco = {text: "Update Login"};
    var marco = STORE.mainFrame(miMarco);
    var dataControlFactory = new STORE.DataControlFactory();
    marco.appendChild(dataControlFactory.user());
    marco.appendChild(dataControlFactory.password());
    marco.appendChild(dataControlFactory.passwordConfirm());

    marco.appendChild(STORE.errorBox());
    marco.appendChild(STORE.submitBox());

    STORE.error = STORE.ErrorManagement();
    STORE.submit = STORE.SubmitManagement();
    STORE.submit.message("Update Login");

    $("user").value = dataLogin.myUser;
    $("password").value = dataLogin.myPassword;

    STORE.StrategyDisplayFormAll("STORE.sendUpdateLoginAjax");

}
