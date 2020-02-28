package harnina.util;

public enum ControlData {

    CONTROLDATA_NIF(1, "dni"),
    CONTROLDATA_FIRSTNAME(2, "firstname"),
    CONTROLDATA_LASTNAME(3, "lastname"),
    CONTROLDATA_ADRESS(4, "adress"),
    CONTROLDATA_CP(5, "cp"),
    CONTROLDATA_EMAIL(6, "email"),
    CONTROLDATA_BIRTHDAY(7, "birthday"),
    CONTROLDATA_LANDLINE(8, "landline"),
    CONTROLDATA_MOBILE(9, "mobile"),
    CONTROLDATA_USER(10, "user"),
    CONTROLDATA_PASSWORD(11, "password");

    private final int id;
    private final String msg;

    ControlData(int id, String msg) {
        this.id = id;
        this.msg = msg;
    }

    public int getId() {
        return id;
    }

    public String getMsg() {
        return msg;
    }
}
