
STORE.namespace('STORE.SubmitManagement');

STORE.SubmitManagement = function(){

    'use strict';

    var submit = $("submitBox");

    return {
        message : function(content){
            submit.innerHTML = content;
        },

        off  : function(){

            submit.style.display="none";
        },

        on  : function(){

            var i = 0;

            while (i < STORE.nodeListInput.length) {

                if (STORE.nodeListInput[i].style.backgroundColor === STORE.error.get_errorColor()) {

                    i = STORE.nodeListInput.length;

                }
                i++;
            }

            if (i > STORE.nodeListInput.length) {

                submit.style.display = "none";

            } else {

                submit.style.display = "";

            }

        }

    };

};