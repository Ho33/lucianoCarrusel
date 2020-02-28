STORE.namespace('STORE.ManagerCarousel');

STORE.ManagerCarousel = function () {


    //Getting models
    //Save into Session Storage
    //Print
    //Show pagination

    var ajax = STORE.Ajax;
    var json = JSON.stringify(envio);
    var caller = new ajax.CargadorContenidos("/managerMobile", function () {
        var numberOfPages = caller.req.responseText;
        console.log(parseInt(numberOfPages));
        STORE.Pagination.Init(document.getElementById('pagination'), {
            size: parseInt(numberOfPages),
            page: 1,
            step: 3,
            functionClick: STORE.activePageCarrusel()
        })
    }, json);
};
