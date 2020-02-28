STORE.namespace("STORE.mainFrame");

STORE.mainFrame = function (params) {
    var factoryTag = new STORE.FactoryTag();
    var div = {
        id: "",
        class: "contenido01",
        text: ""
    };

    var marcoa = factoryTag.div(div);
    div.class = "menu s3 caja02";
    var marcoc = factoryTag.div(div);
    var tituloMarco = factoryTag.h4(params);
    marcoc.appendChild(tituloMarco);

    marcoa.appendChild(marcoc);
    $("centerPanelPage").innerHTML = "";
    $("centerPanelPage").appendChild(marcoa);
    return marcoc;

}
