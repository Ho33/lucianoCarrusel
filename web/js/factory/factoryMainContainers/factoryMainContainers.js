STORE.namespace("STORE.FactoryMainContainer");

STORE.FactoryMainContainer = function () {

    var API = {};
    var factoryTag = new STORE.FactoryTag();
    API.getHeaderPage = function(){
        var params = {
            id : "",
            class : "cabecera"
        };
        var header = factoryTag.header(params);
        params.class = "subtitulo";
        params.href = "html/catalogo.html";
        params.text = "DAM: I.E.S. Arroyo Harnina";
        header.appendChild(factoryTag.a(params));
        params.class = "titulo";
        params.text = "STORE 19-20";
        header.appendChild(factoryTag.h5(params));
       $("headerPage").appendChild(header);
    };
    API.getLogoPage = function(){
        var params = {
            id : "",
            class : "contenido01",
            text : ""
        };
        var divexterno = factoryTag.div(params);
        params.id="dadoInformatica";
        params.class = "medio dadoCatalogo";
        var divDadoInformatica = factoryTag.div(params);
        params.id = "";
        params.class = "dado d1 informatica";
        divDadoInformatica.appendChild(factoryTag.div(params));

        divexterno.appendChild(divDadoInformatica);
        params.id="dadoHarnina";
        params.class = "medio dadoCatalogo";
        var divDadoHarnina = factoryTag.div(params);
        params.id = "";
        params.class = "dado d1 harnina";
        divDadoHarnina.appendChild(factoryTag.div(params));
        divexterno.appendChild(divDadoHarnina);

        $("logoPage").appendChild(divexterno);
    };
    API.getMenuPage = function(){
        var params = {
            id : "",
            class : "contenido01",
            text : ""
        };
        var divexterno = factoryTag.div(params);
            params.id="mainMenu";
            params.class = "contenedorColumna";
            var divMainMenu = factoryTag.div(params);
                 params.id="offers";
                 params.class = "boton s12";
                 params.text = "Ofertas";
                 divMainMenu.appendChild(factoryTag.div(params));
                 params.id="login";
                 params.text = "Iniciar session";
                 divMainMenu.appendChild(factoryTag.div(params));
                 params.id="signUp";
                 params.text = "Registrarse";
                 divMainMenu.appendChild(factoryTag.div(params));
        divexterno.appendChild(divMainMenu);
         $("menuPage").appendChild(divexterno);
        new STORE.DOMObjectLook("signUp");
        new STORE.DOMObjectLook("login");
        new STORE.DOMObjectLook("offers");
    };
    API.getCenterPanelPage = function(){
         var params = {
            id : "",
            class : "contenedor01",
            text : ""
        };
        var divExterno = factoryTag.div(params);
        params.class = "contenido01";
        var divMedio = factoryTag.div(params);
        params.class = "caja02";
        var divInterno = factoryTag.div(params);
        params.class = "img_responsive";
        params.src = "img/gatos.png";
        divInterno.appendChild(factoryTag.img(params));
        divMedio.appendChild(divInterno);
        divExterno.appendChild(divMedio);
        $("centerPanelPage").appendChild(divExterno);

    };
    API.getCenterPanelPagePagination = function() {
        var params = {
            id: "",
            class: "contenedor01",
            text: "",
        };
        var divExterno = factoryTag.div(params);
        params.class = "contenido01";
        var divMedio = factoryTag.div(params);
        params.class = "caja02";
        params.id = "pagination";
        var divInterno = factoryTag.div(params);
        divMedio.appendChild(divInterno);
        divExterno.appendChild(divMedio);
        $("centerPanelPage").appendChild(divExterno);
        var params = {
            id: "sliderOptions",
            class: "",
            text: "",
        };
        var divExterno = factoryTag.div(params);
        $("centerPanelPage").appendChild(divExterno);
        var params = {
            id: "showCase",
            class: "contenedor01",
            text: ""
        };
        var divExterno = factoryTag.div(params);
        params.class = "caja02";
        params.id = "mobileWindow";
        var divMedio = factoryTag.div(params);
        divExterno.appendChild(divMedio);
        console.log("div externo:");
        console.log(divExterno);
        $("centerPanelPage").appendChild(divExterno);
        console.log($("centerPanelPage"));

    };



        API.getHeaderPageClient = function(){
        var params = {
            id : "",
            class : "cabecera"
        };
        var header = factoryTag.header(params);
        params.class = "subtitulo";
        params.href = "html/catalogo.html";
        params.text = "DAM: I.E.S. Arroyo Harnina";
        header.appendChild(factoryTag.a(params));
        params.class = "titulo";
        params.text = "STORE 19-20 USER: " + sessionStorage.getItem("user");
        header.appendChild(factoryTag.h5(params));
        $("headerPage").appendChild(header);
    };
    API.getMenuPageClient = function(){
        var params = {
            id : "",
            class : "contenido01",
            text : ""
        };
        var divexterno = factoryTag.div(params);
        params.id="mainMenu";
        params.class = "contenedorFila";
        var divMainMenu = factoryTag.div(params);
        params.id="updateDataUser";
        params.class = "boton s12";
        params.text = "Modificar datos Personales";
        divMainMenu.appendChild(factoryTag.div(params));
        params.id="updateDataLogin";
        params.text = "Modificar clave";
        divMainMenu.appendChild(factoryTag.div(params));
        params.id="updateImageUser";
        params.text = "Modificar Imagen";
        divMainMenu.appendChild(factoryTag.div(params));
        params.id="deleteUser";
        params.text = "Eliminar usuario";
        divMainMenu.appendChild(factoryTag.div(params));
        params.id="logoutUser";
        params.text = "Salir";
        divMainMenu.appendChild(factoryTag.div(params));
        divexterno.appendChild(divMainMenu);
        $("menuPage").appendChild(divexterno);

    };

return API;

}
