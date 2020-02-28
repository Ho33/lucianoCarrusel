STORE.namespace("STORE.FactoryTag");

STORE.FactoryTag = function () {

    
    //var params = {};
    var h = function (params) {
        var h = document.createElement(params.h);
        h.innerText = params.text || "";
        return h;
    };
    var API = {};
    API.a = function (params) {
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(params.text));
        a.title = params.title || "";
        a.href = params.href;
        return a;
    };
    API.div = function (params) {
        var div = document.createElement("div");
        div.id = params.id ;
        div.className = params.class || "";
        div.innerHTML = params.text || "";
        return div; 
    };    
    API.h1 = function (params) {
        params.h = "h1";
        return h(params);
    };
    API.h2 = function (params) {
        params.h = "h2";
        return h(params);
    };
    API.h3 = function (params) {
        params.h = "h3";
        return h(params);
    };
    API.h4 = function (params) {
        params.h = "h4";
        return h(params);
    };
    API.h5 = function (params) {
        params.h = "h5";
        return h(params);
    };
    API.h6 = function (params) {
        params.h = "h6";
        return h(params);
    };
    API.header = function (params) {
        var header = document.createElement("header");
        header.id = params.id || "";
        header.className = params.class || "";
        return header;
    };
    API.img = function(params){
        var img = document.createElement("IMG");
        img.id = params.id || "";
        img.className = params.class || "";
        img.src = params.src || "";
        return img;
    };
    API.input = function (params) {
        var input = document.createElement("INPUT");
        input.id = params.id;
        input.setAttribute("data-validate", params.validate);
        input.className = params.class || "";
        input.type = params.type || "";
        input.size = params.size || "";
        input.setAttribute("minlength", params.minLength);
        input.maxLength = params.maxLength || "";
        input.required = params.required || "";
        input.placeholder = params.placeholder || "";
        input.title = params.title || "";

        return input;
    };
    API.label = function(params){    
        var label = document.createElement("label");
        label.id = params.id;
        label.className = params.class || "";
        label.for = params.for || "";
        label.innerHTML = params.title || "";
        return label;    
};
    API.select = function(params){
        var select = document.createElement("select");
        select.id = "select_" + params.id || "";
        select.className = params.class || "";
        return select;
    };


    return API;
}
