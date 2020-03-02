STORE.namespace('STORE.Carrusel');

STORE.Carrusel = {
    
    pageItem : 3,
    angulo : 0,
    
    createCarrusel : function(model){
        $('giran').innerHTML="";
    console.log("joputaaaaaaaaaaaaa");
        console.log(model);
STORE.Carrusel.pageItem=model.length;
      STORE.Carrusel.angulo = 360 / STORE.Carrusel.pageItem;
      console.log(model.length);
     for (var i = 0; i < model.length ; i++) { // STORE.Carrito.carruselActivo
           var nodoPanelMobil = document.createElement("div");
           nodoPanelMobil.className = "nodoPanelMobil"; 
    
          var nodoElementoCarruselDelantero = document.createElement("div");
          var nodoElementoCarruselTrasero = document.createElement("div");
          var nodoElementoCarruselLateralDerecho = document.createElement("div");
          var nodoElementoCarruselLateralIzquierdo = document.createElement("div");
    
            nodoElementoCarruselDelantero.className = "nodoElementoCarruselDelantero";
            nodoElementoCarruselTrasero.className = "nodoElementoCarruselTrasero";
            nodoElementoCarruselLateralDerecho.className = "nodoElementoCarruselLateralDerecho";
            nodoElementoCarruselLateralIzquierdo.className = "nodoElementoCarruselLateralIzquierdo";
    
            nodoPanelMobil.appendChild(nodoElementoCarruselDelantero);
            nodoPanelMobil.appendChild(nodoElementoCarruselTrasero);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralDerecho);
            nodoPanelMobil.appendChild(nodoElementoCarruselLateralIzquierdo);
 
    nodoPanelMobil.style.transform = "rotateY(-" + STORE.Carrusel.angulo * i + "deg) translateX(140px) rotatey(0deg)";

            var nodoImagenDelantera = document.createElement("img");
            var nodoImagenTrasera = document.createElement("img");
            var nodoImagenDerecha = document.createElement("img");
            var nodoImagenIzquierda = document.createElement("img");
                nodoImagenDelantera.className = "nodoImagenDelantera";
                nodoImagenTrasera.className = "nodoImagenTrasera";
                nodoImagenDerecha.className = "nodoImagenDerecha";
                nodoImagenIzquierda.className = "nodoImagenIzquierda";

   //var modelo = JSON.parse(localStorage.getItem(localStorage.getItem("producto:" + (STORE.Carrito.inicioModelo + i))));
            
    
    var rutaImagenDelantera = "../../img/imageModel/"+model[i].imageModel; // + modelo.imagenDelantera;
                var rutaImagenTrasera = "../../img/imageModel/"+model[i].imageRear;
                //+ modelo.imagenTrasera;
                var rutaImagenIzquierda = "../../img/imageModel/"+model[i].imageSide;
            //+ modelo.imagenLado;
                var rutaImagenDerecha = "../../img/imageModel/"+model[i].imageSide;
                //+ modelo.imagenLado;
                nodoImagenDelantera.src = rutaImagenDelantera;
                nodoImagenTrasera.src = rutaImagenTrasera;
                nodoImagenIzquierda.src = rutaImagenIzquierda;
                nodoImagenDerecha.src = rutaImagenDerecha;
    
    console.info(rutaImagenDelantera);
                console.info(nodoImagenTrasera);
                console.info(nodoImagenIzquierda);
                console.info(nodoImagenDerecha);

                nodoElementoCarruselDelantero.appendChild(nodoImagenDelantera);
                nodoElementoCarruselTrasero.appendChild(nodoImagenTrasera);
                nodoElementoCarruselLateralIzquierdo.appendChild(nodoImagenIzquierda);
                nodoElementoCarruselLateralDerecho.appendChild(nodoImagenDerecha);
    
    
        var nodoPanelBase = document.createElement("div");
                nodoPanelBase.className = "nodoPanelBase";

                var nodoBaseElementoCarruselArriba = document.createElement("div");
                nodoBaseElementoCarruselArriba.className = "nodoBaseElementoCarruselArriba s4";

                var nodoBaseElementoCarruselAbajo = document.createElement("div");
                nodoBaseElementoCarruselAbajo.className = "nodoBaseElementoCarruselAbajo s4";

                var nodoBaseElementoCarruselFrontal = document.createElement("div");
                nodoBaseElementoCarruselFrontal.className = "nodoBaseElementoCarruselFrontal s4";

                var nodoBaseElementoCarruselTrasero = document.createElement("div");
                nodoBaseElementoCarruselTrasero.className = "nodoBaseElementoCarruselTrasero s4";

                var nodoBaseElementoCarruselLateralIquierdo = document.createElement("div");
                nodoBaseElementoCarruselLateralIquierdo.className = "nodoBaseElementoCarruselLateralIquierdo s4";

                var nodoBaseElementoCarruselLateralDerecho = document.createElement("div");
                nodoBaseElementoCarruselLateralDerecho.className = "nodoBaseElementoCarruselLateralDerecho s4";

                nodoPanelBase.appendChild(nodoBaseElementoCarruselArriba);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselAbajo);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselFrontal);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselTrasero);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralIquierdo);
                nodoPanelBase.appendChild(nodoBaseElementoCarruselLateralDerecho);

                nodoBaseElementoCarruselLateralDerecho.innerText = model[i].modelName; //modelo.nombreModelo;
                nodoBaseElementoCarruselLateralIquierdo.innerText = model[i].modelName;//modelo.nombreModelo;
                nodoBaseElementoCarruselFrontal.innerText = model[i].modelName; //modelo.nombreModelo;
                nodoBaseElementoCarruselTrasero.innerText = model[i].modelName; //modelo.nombreModelo;

                nodoPanelMobil.appendChild(nodoPanelBase);

/*
                var idModelo = document.createElement("p");
                idModelo.setAttribute("id", "idmodelo" + modelo.IdModelo);
                idModelo.innerHTML = modelo.IdModelo;
                idModelo.style.display = 'none';
                nodoPanelMobil.appendChild(idModelo);
                nodoPanelMobil.addEventListener("click", function (event) {
                    STORE.Carrito.formVerProducto($("idmodelo" + modelo.IdModelo).innerHTML);
                });
*/
            var idModelo = document.createElement("p");
                idModelo.setAttribute("id", "idmodelo",1);
                                      //+ modelo.IdModelo);
                idModelo.innerHTML = 1; //  modelo.IdModelo;
                idModelo.style.display = 'none';
                nodoPanelMobil.appendChild(idModelo);
                nodoPanelMobil.addEventListener("click", function (event) {
                    alert("Mostrar producto");
                   // STORE.Carrito.formVerProducto($("idmodelo" + modelo.IdModelo).innerHTML);
                });            
            
                $('giran').appendChild(nodoPanelMobil);

        }

    } 
    
};
