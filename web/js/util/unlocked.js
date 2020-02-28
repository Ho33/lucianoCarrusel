STORE.namespace('STORE.UnlockedManagement');
STORE.UnlockedManagement = function(){
    'use strict';
    var unlocked = $("unlockedBox");
    return {
        on  : function(){
            unlocked.style.display = "";
        },
        off  : function(){
            unlocked.style.display = "none";
        },
        listen : function(){
            unlocked.addEventListener("click",STORE.sendUnlockedAjax);
        }
    };
};
