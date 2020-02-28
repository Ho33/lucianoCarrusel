STORE.namespace('STORE.ErrorManagement');
 STORE.ErrorManagement = function(){
    'use strict';
    var error = $("errorBox");
    return {
        on  : function(){
            error.style.display = "";
        },
        off  : function(){
            error.style.display = "none";
        },
        set_message : function(message){
            error.innerHTML = message;
        },
        
        get_errorColor : function(){

            return STORE.color.errorColor;
        }
    };

};
