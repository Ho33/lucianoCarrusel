STORE.namespace('STORE.logoutUser');
STORE.logoutUser = function(){
    sessionStorage.setItem("confirmCall", "logoutUser");
    STORE.viewConfirm();
};