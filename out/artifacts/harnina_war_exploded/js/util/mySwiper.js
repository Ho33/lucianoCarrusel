STORE.namespace("swipper");
STORE.swippeSelected=false;
STORE.swipper={

  swiper : function (){
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true
      },

      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
