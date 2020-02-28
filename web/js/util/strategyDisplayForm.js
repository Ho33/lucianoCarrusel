STORE.namespace("STORE.StrategyDisplayForm");


(function (g) {
    'use strict';
    STORE.stratregyType ="";
    STORE.StrategyDisplayForm.constructor = function(ajaxServer){

        this.tag = "[data-validate]";
        this.ajaxServer = ajaxServer;
        STORE.nodeListInput = document.querySelectorAll(this.tag);
        STORE.reponsiWindow();
        this.turnOffButton();
        this.listenSubmit(this.ajaxServer);
        this.turnoffLabelError();
        this.assignValidatorFunction();

    };

    STORE.StrategyDisplayForm.constructor.prototype = {
        turnOffButton: function () {
            STORE.error.off();
            STORE.submit.off();
        },
        listenSubmit: function (ajaxServer) {
            $("submitBox").addEventListener("click",eval(ajaxServer));
        },
        assignValidatorFunction: function () {
        for (var i = 0; i < STORE.nodeListInput.length; i++) {
                STORE.nodeListInput[i].addEventListener("input", eval(STORE.nodeListInput[i].dataset.validate), false);
                if (STORE.nodeListInput[i].value == '' && STORE.nodeListInput[i].required) {
                    STORE.nodeListInput[i].style.backgroundColor = STORE.error.get_errorColor();
                }

            }
        },
        changeStrategyAll: function(){
            STORE.stratregyType ="all";
        },
        changeStrategyOneByOne: function(){
            STORE.stratregyType ="oneByOne";
        },
        turnoffLabelError: function(){
            for (var i=0; i <  STORE.nodeListInput.length; i++){
                $("labelError_" + STORE.nodeListInput[i].id).style.display = "none"
                $("labelError_" + STORE.nodeListInput[i].id).style.background = STORE.color.errorColor;
            }
        }
    }
})(window);

STORE.namespace("STORE.StrategyDisplayFormOneByOne");
(function (g) {
    'use strict';
    STORE.StrategyDisplayFormOneByOne = function(sendFunction){
        var strategyOneByOne = new STORE.StrategyDisplayForm.constructor(sendFunction);
        $("div_" + STORE.nodeListInput[0].id).style.display = "";
        STORE.nodeListPointer = 1;
        for (var i = 1; i < STORE.nodeListInput.length; i++) {
            $("div_" + STORE.nodeListInput[i].id).style.display = "none";
        }
        strategyOneByOne.changeStrategyOneByOne();

    }
})(window);
STORE.namespace("STORE.StrategyDisplayFormAll");
(function (g) {
    'use strict';
    STORE.StrategyDisplayFormAll = function(sendFunction){
        var strategyAll = new STORE.StrategyDisplayForm.constructor(sendFunction);
        for (var i = 0; i < STORE.nodeListInput.length; i++) {
            $("div_" + STORE.nodeListInput[i].id).style.display = "block";
        }
        strategyAll.changeStrategyAll();
    }
})(window);