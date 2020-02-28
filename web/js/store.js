var $ = function(id){
    return document.getElementById(id);
}
var STORE = STORE || {};
STORE.namespace = function(namespace){
    var parts = namespace.split('.');
    var parent = STORE;
    var i;
    if (parts[0] === "STORE") {
        parts = parts.slice(1);
    }
    else return false;
    for (i = 0; i < parts.length; i += 1) {

        if (typeof parent[parts[i]] === "undefined") {

            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
function funcDelegate(obj, methodName) {
    return function (e) {
        e = e || window.event;
        return obj[methodName](this, e);
    };
}

STORE.namespace('STORE.DOMObjectLook');

STORE.DOMObjectLook = function(id){
    this._element = $(id);
    if (this._element) {
        this._element.onmouseover = funcDelegate( this, "customOnMouseOver");
        this._element.onmouseout = funcDelegate( this, "customOnMouseOut");
    }
}

STORE.DOMObjectLook.prototype.customOnMouseOver = function (obj, event) {
    obj.style.cursor = "help";
    obj.style.color = "olive";
    obj.style.fontSize = "2em";
    obj.style.background = "#EAEDEE";
    obj.style.borderRadius = "25px 25px 25px 25px";
    obj.className = "boton s9";
};

STORE.DOMObjectLook.prototype.customOnMouseOut = function (obj, event) {
    obj.style.cursor = "pointer";
    obj.style.color = "#88B3BB";
    obj.style.fontSize = "1em";
    obj.style.borderRadius = "0px 0px 0px 0px";
    obj.style.background = "";
    obj.className = "boton s12";
};


STORE.namespace('STORE.Ajax');
(function(g){
    'use strict';

    STORE.Ajax = {
        READY_STATE_UNINITIALIZED : 0,
        READY_STATE_LOADING : 1,
        READY_STATE_LOADED : 2,
        READY_STATE_INTERACTIVE : 3,
        READY_STATE_COMPLETE : 4
    };
// Constructor
    STORE.Ajax.CargadorContenidos = function (url, funcion, json, funcionError) {
        this.url = url;
        this.req = null; // el objeto asincrono (XMLHTTP)
        this.json =  json || "";
        this.onload = funcion;
        this.onerror = (funcionError) ? funcionError : this.defaultError;
        this.cargaContenidoXML(url);
    };

    STORE.Ajax.CargadorContenidos.prototype =  {
        cargaContenidoXML: function(url) {
            if(window.XMLHttpRequest) {
                this.req = new XMLHttpRequest();
            }
            else if(window.ActiveXObject) {
                this.req = new ActiveXObject("Microsoft.XMLHTTP");
            }

            if(this.req) {
                try {
                    var loader = this; //that = loader
                    this.req.onreadystatechange = function() {
                        loader.onReadyState.call(loader);
                    };
                    this.req.open('POST', url, true);
                    this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
                    this.req.send( "json="+this.json);
                } catch(err) {
                    this.onerror.call(this);
                }
            }
        },

        onReadyState: function() {
            var req = this.req;
            var ready = req.readyState;
            if(ready == STORE.Ajax.READY_STATE_COMPLETE) {
                var httpStatus = req.status;
                if(httpStatus == 200 || httpStatus == 0) {
                    this.onload.call(this);
                }
                else {
                    this.onerror.call(this);
                }
            }
        },

        defaultError: function() {
            alert("Se ha producido un error al obtener los datos"
                + "\n\nreadyState:" + this.req.readyState
                + "\nstatus: " + this.req.status
                + "\nheaders: " + this.req.getAllResponseHeaders());
        }
    };
})(window);


