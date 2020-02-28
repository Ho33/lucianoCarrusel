package harnina.entity;


public class BuilderMobile {
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

    public BuilderMobile idModel(String idModel) {
        this.idModel = idModel;
        return this;
    }

    public BuilderMobile modelName(String modelName) {
        this.modelName = modelName;
        return this;
    }

    public BuilderMobile modelDescription(String modelDescription) {
        this.modelDescription = modelDescription;
        return this;
    }

    public BuilderMobile modelFeatures(String modelFeatures) {
        this.modelFeatures = modelFeatures;
        return this;
    }

    public BuilderMobile price(String price) {
        this.price = price;
        return this;
    }

    public BuilderMobile stockCurrent(String stockCurrent) {
        this.stockCurrent = stockCurrent;
        return this;
    }

    public BuilderMobile stockMinimum(String stockMinimum) {
        this.stockMinimum = stockMinimum;
        return this;
    }

    public BuilderMobile imageModel(String imageModel) {
        this.imageModel = imageModel;
        return this;
    }

    public BuilderMobile imageRear(String imageRear) {
        this.imageRear = imageRear;
        return this;
    }

    public BuilderMobile imageSide(String imageSide) {
        this.imageSide = imageSide;
        return this;
    }

    public BuilderMobile idBrand(String idBrand) {
        this.modelFeatures = idBrand;
        return this;
    }

    public BuilderMobile SO(String SO) {
        this.SO = SO;
        return this;
    }

    public BuilderMobile versionSO(String versionSO) {
        this.versionSO = versionSO;
        return this;
    }

    public BuilderMobile iva(String iva) {
        this.iva = iva;
        return this;
    }

    public BuilderMobile discountBonus(String discountBonus) {
        this.discountBonus = discountBonus;
        return this;
    }

    public Mobile build() {
        return new Mobile(this.idModel, this.modelName, this.modelDescription, this.modelFeatures,
                this.price, this.stockCurrent, this.stockMinimum,
                this.imageModel, this.imageRear, this.imageSide, this.idBrand,
                this.SO, this.versionSO, this.iva, this.discountBonus);
    }

}

