STORE.namespace("carruselExamen");
STORE.carruselExamen={
    Init:function (models) {
        document.getElementsByClassName('swiper-container')[0].innerHTML="";
        document.getElementsByClassName('swiper-container')[0].appendChild(STORE.carruselExamen.createModels(models));
        document.getElementsByClassName('swiper-container')[0].innerHTML+='<div class="swiper-pagination"></div> <div class="swiper-scrollbar"></div>';
           STORE.swipper.swiper();
    },
    createModels:function (models) {
        var node=document.createElement("div");
        node.className="swiper-wrapper";
        for (var i=0;i<models.length;i++){
            var hijo=document.createElement("div");
            hijo.className="swiper-slide";
            var hijoDos=document.createElement("div");
            hijoDos.className="picture";
            hijoDos.innerHTML+='<img src="../../img/imageModel/'+models[i].imageModel+'">';
            hijo.appendChild(hijoDos);
            var hijoTres=document.createElement("div");
            hijoTres.className="detail";
            hijoTres.innerHTML+='<span>'+models[i].modelName+'</span>';
            hijo.appendChild(hijoTres);
            node.appendChild(hijo);
        }
        return node;
    }
}
