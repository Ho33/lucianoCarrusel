STORE.namespace('STORE.Prefijos');
STORE.namespace('STORE.prefix_input');
STORE.Prefijos = function (myLandline, myMobile) {
    'use strict';
    var phonePrefix = null;
    var countryPattern = {
        NUMERO_FRANCE_FIJO: /^[1-9](\d{2}){4}$/, //^[1-9](\d{2}){4}$
        NUMERO_FRANCE_MOVIL: /^[6|7][0-9]{8}$/,
        NUMERO_SPAIN_FIJO: /^[9][0-9]{8}$/,
        NUMERO_SPAIN_MOVIL: /^[6|7][0-9]{8}$/,
        NUMERO_US_FIJO: /^[0-9]{10}$/,
        NUMERO_US_MOVIL: /^[0-9]{10}$/
    };
    var PREFIJOS = [
        {
            "default": true,
            "prefijo": "ES",
            "value": "+34",
            "maximo": 9,
            "flag": "es.png",
            "expresionRegularMovil": countryPattern.NUMERO_SPAIN_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_SPAIN_FIJO
        },
        {
            "prefijo": "FR",
            "value": "+33",
            "maximo": 9,
            "flag": "fr.png",
            "expresionRegularMovil": countryPattern.NUMERO_FRANCE_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_FRANCE_FIJO
        },
        {
            "prefijo": "US",
            "value": "+1",
            "maximo": 10,
            "flag": "us.png",
            "expresionRegularMovil": countryPattern.NUMERO_US_MOVIL,
            "expresionRegularFijo": countryPattern.NUMERO_US_FIJO
        },
    ];
    var changeFlag = function (flag, tipo) {
        $("label_" + tipo).src = "../img/flags/" + flag;        
    }
    var changePrefix = function (tipo) {
        var nodoActivo = myLandline;
        if (tipo === myMobile) {nodoActivo = myMobile;}
        $(nodoActivo).placeholder = "new phone";
        $(nodoActivo).style.background = STORE.color.errorColor;
        var selectedValue = $("select_" + nodoActivo).options[$("select_" + nodoActivo).selectedIndex].value;
        for (var index in PREFIJOS) {
            if (PREFIJOS[index].value === selectedValue) {
                if(tipo === myMobile){
                    STORE.prefix_input.regExpMovil = PREFIJOS[index].expresionRegularMovil;
                    STORE.prefix_input.minimo_mobile = PREFIJOS[index].minimo;
                    STORE.prefix_input.maximo_mobile = PREFIJOS[index].maximo;
                }
                else {
                    STORE.prefix_input.regExpFijo = PREFIJOS[index].expresionRegularFijo;
                    STORE.prefix_input.minimo_landline = PREFIJOS[index].minimo;
                    STORE.prefix_input.maximo_landline = PREFIJOS[index].maximo;
                } 
                changeFlag(PREFIJOS[index].flag, nodoActivo);       document.getElementById(nodoActivo).setAttribute("maxlength", PREFIJOS[index].maximo);
            }
        }
    };
    var createSelectPrefix = function (tipo) {
        phonePrefix = $("select_" + tipo);
        for (var index in PREFIJOS) {
            phonePrefix.options[phonePrefix.options.length] = new Option(PREFIJOS[index].prefijo, PREFIJOS[index].value, undefined, PREFIJOS[index].default);
            if (PREFIJOS[index].default) {
                if (tipo === myLandline) {
                    STORE.prefix_input.regExpFijo = PREFIJOS[index].expresionRegularFijo;
                } else {
                    STORE.prefix_input.regExpMovil = PREFIJOS[index].expresionRegularMovil;
                }
                $(tipo).setAttribute("maxlength", PREFIJOS[index].maximo);
                var labelId = "label_" + tipo;
                var label = $(labelId);
                var flagBox = STORE.littleImgBox();
                label.parentNode.replaceChild(flagBox, label);
                flagBox.id = "label_" + tipo;
                changeFlag(PREFIJOS[index].flag,tipo);
            }
        }
        phonePrefix.addEventListener("change", function () {
            changePrefix(tipo);
        });
    };
    if (myLandline) {createSelectPrefix(myLandline);}
    if (myMobile) {createSelectPrefix(myMobile);}
};
