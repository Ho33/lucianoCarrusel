STORE.namespace("STORE.mobileWindow");

STORE.mobileWindow = function (models) {
    var mobiles = models;
    var documento = document.getElementById("mobileWindow");
    var crearContenedores = function (cantidadContenedores) {
        var contenido = '<div id="contenedor" class="contenedor"></div>';
        for (var i = 0; i < cantidadContenedores; i++) {
            documento.innerHTML += contenido;
        }
    };
    var contenedores = document.getElementsByClassName("contenedor");
    var insertarElementos = function () {
        for (var i = 0; i < contenedores.length; i++) {
            contenedores[i].innerHTML += '<div class="descripcionMobile">' + mobiles[i].modelDescription + '</div>';
        }
        ;
    }
    var insertarNombre = function () {
        for (var i = 0; i < contenedores.length; i++) {
            contenedores[i].innerHTML += '<label class="nombre">' + mobiles[i].modelName + '</label>';
        }
        ;
    }
    var cambiarClase = function (e) {
        if (e.target.parentElement.className == "negro") {
            e.target.parentElement.className = "contenedor";
        } else if (e.target.parentElement.className == "contenedor") {
            e.target.parentElement.className = "negro";
        }
    }

    var asignarEventos = function () {
        btn = document.getElementsByClassName("btnMostrar");
        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', cambiarClase);
        }
    };
    var meterImagenes = function () {
        for (var i = 0; i < contenedores.length; i++) {
            contenedores[i].innerHTML += '<img src="../../img/imageModel/' + mobiles[i].imageModel + '"><div class="btnMostrar">Mostrar</div>';
        }
    };
    var iniciar = function (mobil) {
        mobiles = mobil;
        documento.innerHTML = "";
        crearContenedores(mobil.length);
        insertarNombre();
        meterImagenes();
        insertarElementos();
    };

    /*documento.animate([
      // keyframes
        {
            transform: 'translateX(0px)'
        },
        {
            transform: 'translateX(-800px)'
        }
    ], {
        // timing options
        duration: 5000,
        iterations: Infinity
    });
    */
    iniciar(mobiles);
    asignarEventos();
};
