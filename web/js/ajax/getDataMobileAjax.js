STORE.namespace("STORE.getDataMobile");
STORE.plantillaShowCase = function () {
    return null;
}
STORE.mobiles = null;
STORE.bloque = 0;
var ultimaPagina = 1;
var mobilesPerPage = 5;
var paginaPorBloque = 2;
STORE.plantillaShowCase = STORE.mobileWindow;
STORE.getDataMobile = function () {
    STORE.almacenOpciones = [];
    var ajax = STORE.Ajax;
    var envio = {
        inicio: STORE.bloque +1|| 1,
        step: mobilesPerPage * paginaPorBloque
    };
    var json = JSON.stringify(envio);
    var caller = new ajax.CargadorContenidos("/managerMobile", function () {
        var datos = JSON.parse(caller.req.responseText);
        STORE.mobiles = datos.datos;
        var temporal = [];
        STORE.createOptionSlider();
        STORE.mobiles.forEach(function (key) {
            temporal.push(JSON.parse(key));
        });
        STORE.mobiles = temporal;
        STORE.getModels();

        console.log("chasd : ", datos.tamano);
        var numberOfpages = Math.ceil(datos.tamano / mobilesPerPage);
        STORE.pagination.Init(document.getElementById('pagination'), {
            size: numberOfpages,
            page: ultimaPagina,
            step: mobilesPerPage,
            functionClick: STORE.getModels
        })
    }, json);
};
STORE.getModels = function () {
    var paginaActiva = STORE.getActivePageCarrousel();

    var modelSelection = STORE.getModelSelection(paginaActiva, STORE.pagination.step);
    var bloquesito = Math.floor((paginaActiva-1) / (paginaPorBloque));
    if (STORE.bloque !== bloquesito) {
        STORE.bloque = bloquesito;
        ultimaPagina = paginaActiva;
        STORE.getDataMobile();
    }
    STORE.plantillaShowCase(modelSelection);
};
STORE.getModelSelection = function (page, numberOfModels) {
    posicionInicial = (((page-1) % (paginaPorBloque)) * numberOfModels);
    console.log("pagina por bloque: " + paginaPorBloque);
    console.log("pagina: " + page);
    console.log("numero de modelos: " + numberOfModels);
    console.log("Posicion inicial: " + posicionInicial);
    console.log("Moviles: " + STORE.mobiles);
    console.log("Moviles Longitud: " + STORE.mobiles.length);
    result = [];
    for (var i = posicionInicial; i < posicionInicial + mobilesPerPage && i < STORE.mobiles.length; i++) {
        result.push(STORE.mobiles[i]);
    }
    return result;
};
STORE.createShowCase = function (id) {
    var documento = $('showCase');
    var params = {
        id: id.id,
        class: id.class
    };
    documento.appendChild(STORE.FactoryTag().div(params));
};

STORE.mapaFunciones = new Map();
var mapaContenedor = new Map();
STORE.almacenOpciones = [];
var addOption = function (object) {
    STORE.almacenOpciones.push(object);
}
STORE.manageOptions = function (evt) {
    $('showCase').innerHTML = "";
    id = evt.target.id;
    var objeto = STORE.mapaFunciones.get(id);
    if (objeto.contain.length !== 0) {
        console.log(objeto.contain);
        STORE.createShowCase(objeto.contain);
    }
    STORE.plantillaShowCase = objeto.funcion;
    STORE.getModels();
    STORE.pagination.functionClick = objeto.functionSpy;
};
STORE.createOptionSlider = function () {

    addOption({
        id: "Luciano",
        class: 'OptionSlider',
        title: "Luciano"
    });
    addOption({
        id: "swiper-container",
        class: 'OptionSlider',
        title: "Examen"
    });
    addOption({
        id: "Issam",
        class: 'OptionSlider',
        title: "Issam"
    });

    STORE.addCarrusel(STORE.Carrusel.createCarrusel, {id: "giran", class: ""}, "Luciano");
    STORE.addCarrusel(STORE.mobileWindow, {id: "mobileWindow", class: ""}, "Issam");
    STORE.addCarrusel(STORE.carruselExamen.Init, {id: "", class: "swiper-container"}, "swiper-container");
    var factory = STORE.FactoryTag();
    $('sliderOptions').innerHTML = "";
    for (var i = 0; i < STORE.almacenOpciones.length; i++) {
        $('sliderOptions').appendChild(factory.label(STORE.almacenOpciones[i]));
    }
    var coleccion = $('sliderOptions').children;
    for (var i = 0; i < coleccion.length; i++) {
        coleccion[i].addEventListener('click', STORE.manageOptions);
    }
};
STORE.addCarrusel = function (funcion, contenedor, id) {
    var objecto = {
        funcion: funcion,
        contain: {
            id: contenedor.id,
            class: contenedor.class
        },
        functionSpy: STORE.getModels || function () {
            return null
        }
    };
    STORE.mapaFunciones.set(id, objecto);
};
STORE.getElemtsCarrusel = function () {
    console.log(STORE.getModelSelection(STORE.getActivePageCarrousel(), STORE.pagination.step));
};
STORE.getModelsExam = function () {
    var modelSelection = STORE.getModelSelection(STORE.getActivePageCarrousel(), STORE.pagination.step);
    STORE.carruselExamen.Init(modelSelection);
}
