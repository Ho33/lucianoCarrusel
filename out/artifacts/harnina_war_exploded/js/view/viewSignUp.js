STORE.namespace("STORE.viewSignUp");
STORE.viewSignUp = function(){
       
    var miMarco = {text : "New Client"};
    var marco = STORE.mainFrame(miMarco);

    var dataControlFactory = new STORE.DataControlFactory();

       marco.appendChild(dataControlFactory.dni());
       marco.appendChild(dataControlFactory.firstname());
       marco.appendChild(dataControlFactory.lastname());
       marco.appendChild(dataControlFactory.address());
       marco.appendChild(dataControlFactory.cp());
       marco.appendChild(dataControlFactory.birthday());
       marco.appendChild(dataControlFactory.landline());
       marco.appendChild(dataControlFactory.mobile());
       marco.appendChild(dataControlFactory.email());
       marco.appendChild(dataControlFactory.user());
       marco.appendChild(dataControlFactory.password());

       marco.appendChild(STORE.errorBox());
       marco.appendChild(STORE.submitBox());

       STORE.error = STORE.ErrorManagement();
       STORE.submit = STORE.SubmitManagement();

       STORE.Prefijos("landline","mobile");

       STORE.StrategyDisplayFormAll("STORE.sendPersonalDataAjax");
};
