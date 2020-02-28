var dados = ['dado informatica','dado harnina','dado juntaextremadura'];
var imagenes = ['img/escudo02.png','img/harni01.png','img/Escudo_de_Extremadura.png'];
var clases = ['cara frontal','cara trasera','cara derecha','cara izquierda','cara arriba','cara abajo'];

var creaImagen = function(imag,a, b, i){
    var imagen = document.createElement("img");
    imagen.setAttribute('src', imag);
    imagen.className = 'Imagen';
    imagen.id = ("cara"+ a + "-" + b + "-" + i);
    return imagen;
}

var creaCara = function(dado, a, b, imagen){
    for (var i = 0; i < clases.length; i++){
        var cara = document.createElement('div');
        cara.className = clases[i];
        cara.appendChild(creaImagen(imagen,a,b,i));
        dado[b].appendChild(cara);
    }
}

for (var i = 0; i < dados.length; i++) {
    var dado = document.getElementsByClassName(dados[i]);
    for (var j = 0; j < dado.length; j++){
        creaCara(dado,i, j, imagenes[i]);
    }
}

var changeImage = function() {
    var dados = ['dado informatica', 'dado harnina', 'dado juntaextremadura'];
    var caras = ['cara frontal', 'cara trasera', 'cara derecha', 'cara izquierda', 'cara arriba', 'cara abajo'];

    /*var dadoType = 1;
     var dadoTypeLength = 2;
     var dadoPage = 0;
     var dadoPageLength = 1;
 *//*
    for (var i = dadoType; i < dadoTypeLength; i++) {
        var dado = document.getElementsByClassName(dados[i]);
        for (var j = dadoPage; j < dadoPageLength; j++) {
            var myId = "";
            for (var k = 0; k < caras.length; k++) {
                myId = ("cara" + i + "-" + j + "-" + k);
                if ($(myId) != "undefined") {
                    $(myId).src = "img/fotoClient/" + sessionStorage.getItem("idClient") + ".png";
                }
            }
        }
    }
};*/

    for (var i = 0; i < dados.length; i++) {
        var dado = document.getElementsByClassName(dados[i]);
        for (var j = 0; j < dado.length; j++) {
            var myId = "";
            for (var k = 0; k < caras.length; k++) {
                myId = ("cara"+ i + "-" + j + "-" + k);
                if ($(myId) != "undefined") {
                    $(myId).src = "img/fotoClient/" + sessionStorage.getItem("idClient") + ".png";
                }
            }
        }
    }
};

if(sessionStorage.getItem("idClient") > 0){
    changeImage();
}


