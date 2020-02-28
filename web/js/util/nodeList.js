STORE.namespace('STORE.nodeListInput');
(function (g) {
    'use strict';
    STORE.nodeList = {
        nextVisible: function (nodo) {
            for (var i = 0; i < STORE.nodeListPointer; i++) {

                if (STORE.nodeListInput[i] === nodo) {
                    if ((i + 1) < STORE.nodeListInput.length) {
                        if (eval("div_" + STORE.nodeListInput[i + 1].id).style.display == "none") {
                            eval("div_" + STORE.nodeListInput[i + 1].id).style.display = '';
                            STORE.nodeList.addNodeVisible();
                        }

                    }


                }
            }
        },
        addNodeVisible: function () {
            STORE.nodeListPointer++;
        }
    }

})(window)
