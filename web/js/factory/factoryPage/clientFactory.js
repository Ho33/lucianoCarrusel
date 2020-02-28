STORE.namespace("STORE.clientFactory");

STORE.clientFactory = function(){
    var page = new STORE.FactoryMainContainer();
    page.getHeaderPageClient();
    page.getLogoPage();
    page.getMenuPageClient();
    page.getCenterPanelPagePagination();
    STORE.getDataMobile();
};

