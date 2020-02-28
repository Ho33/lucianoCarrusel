STORE.namespace("STORE.viewUpdateDataUser");
STORE.viewUpdateDataUser = function(dataUser) {

    var miMarco = {text: "Update Data User"};
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
    marco.appendChild(STORE.errorBox());
    marco.appendChild(STORE.submitBox());

    STORE.error = STORE.ErrorManagement();
    STORE.submit = STORE.SubmitManagement();
    STORE.submit.message("Update data person");

    STORE.Prefijos("landline","mobile");

    $("dni").value = dataUser.nif;
    $("firstname").value = dataUser.firstName;
    $("lastname").value = dataUser.lastName;
    $("cp").value = dataUser.postalCode;
    $("adress").value = dataUser.adress;
    $("birthday").value = dataUser.birthday;
    $("landline").value = getNumberPhone(dataUser.landline);
    $("mobile").value = getNumberPhone(dataUser.movil);
    $("email").value = dataUser.email;

    STORE.StrategyDisplayFormAll("STORE.sendUpdatePersonalDataAjax");

}

var getNumberPhone = function(number){

  if (number.substr(1,2) == "34") return number.substr(3);
  if (number.substr(1,1) == "1") return number.substr(2);
}