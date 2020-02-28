package harnina.entity;

public class Mobile {
    private String idModel;
    private String modelName;
    private String modelDescription;
    private String modelFeatures;
    private String price;
    private String stockCurrent;
    private String stockMinimum;
    private String imageModel;
    private String imageRear;
    private String imageSide;
    private String idBrand;
    private String SO;
    private String versionSO;
    private String iva;
    private String discountBonus;

    public Mobile(String idModel, String modelName, String modelDescription, String modelFeatures, String price, String stockCurrent, String stockMinimum, String imageModel, String imageRear, String imageSide, String idBrand, String SO, String versionSO, String iva, String discountBonus) {
        this.idModel = idModel;
        this.modelName = modelName;
        this.modelDescription = modelDescription;
        this.modelFeatures = modelFeatures;
        this.price = price;
        this.stockCurrent = stockCurrent;
        this.stockMinimum = stockMinimum;
        this.imageModel = imageModel;
        this.imageRear = imageRear;
        this.imageSide = imageSide;
        this.idBrand = idBrand;
        this.SO = SO;
        this.versionSO = versionSO;
        this.iva = iva;
        this.discountBonus = discountBonus;
    }

    public String getIdModel() {
        return idModel;
    }

    public void setIdModel(String idModel) {
        this.idModel = idModel;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public String getModelDescription() {
        return modelDescription;
    }

    public void setModelDescription(String modelDescription) {
        this.modelDescription = modelDescription;
    }

    public String getModelFeatures() {
        return modelFeatures;
    }

    public void setModelFeatures(String modelFeatures) {
        this.modelFeatures = modelFeatures;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getStockCurrent() {
        return stockCurrent;
    }

    public void setStockCurrent(String stockCurrent) {
        this.stockCurrent = stockCurrent;
    }

    public String getStockMinimum() {
        return stockMinimum;
    }

    public void setStockMinimum(String stockMinimum) {
        this.stockMinimum = stockMinimum;
    }

    public String getImageModel() {
        return imageModel;
    }

    public void setImageModel(String imageModel) {
        this.imageModel = imageModel;
    }

    public String getImageRear() {
        return imageRear;
    }

    public void setImageRear(String imageRear) {
        this.imageRear = imageRear;
    }

    public String getImageSide() {
        return imageSide;
    }

    public void setImageSide(String imageSide) {
        this.imageSide = imageSide;
    }

    public String getIdBrand() {
        return idBrand;
    }

    public void setIdBrand(String idBrand) {
        this.idBrand = idBrand;
    }

    public String getSO() {
        return SO;
    }

    public void setSO(String SO) {
        this.SO = SO;
    }

    public String getVersionSO() {
        return versionSO;
    }

    public void setVersionSO(String versionSO) {
        this.versionSO = versionSO;
    }

    public String getIva() {
        return iva;
    }

    public void setIva(String iva) {
        this.iva = iva;
    }

    public String getDiscountBonus() {
        return discountBonus;
    }

    public void setDiscountBonus(String discountBonus) {
        this.discountBonus = discountBonus;
    }
}
