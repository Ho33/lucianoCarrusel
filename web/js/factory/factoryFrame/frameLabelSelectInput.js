

STORE.namespace("STORE.frameLabelSelectInput");


STORE.frameLabelSelectInput = function(params){    
    
    var factoryTag = new STORE.FactoryTag();
    var x = params.id;
    params.id = "div_" + params.id;
    params.class = "contenedorFila";
    params.text = "";
    var div = factoryTag.div(params); 
        params.id = x;
        var miLabel = {
               id : "label_" + params.id,
            class : "labelInput",            
              for : params.id || "",
            title : STORE.generalPurposeFunctions.capital(params.id) + ": "
        }
        var label = factoryTag.label(miLabel); 
    
    var miSelect = {
        id : params.id
    }
    var select = factoryTag.select(miSelect); 
    
    
        var miInput = {
              id : params.id,
        validate : params.validate || "",
           class : "etiqueta19 s8" || "",
            type : params.type || "text",
            size : params.size || "", 
       minLength : params.minLength || "",
       maxLength : params.maxLength || "",
        required : params.required || "",
     placeholder : params.placeholder || "",
           title : params.title
        }
        var input = factoryTag.input(miInput);

    var miLabelError = {
        id : "labelError_" + params.id,
        class : "labelInput",
        for : params.id,
        title : "Aviso: "
    }
    var labelError = factoryTag.label(miLabelError);

    div.appendChild(label);
    div.appendChild(select);
    div.appendChild(input);
    div.appendChild(labelError);
    return div;
};