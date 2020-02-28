package harnina.util;

import harnina.entity.Login;
import harnina.entity.User;

public class InverProperty {
    static public String getPropertyUser(User user, String value) {
        if (user.getNif().equals(value))
            return ControlData.CONTROLDATA_NIF.getMsg();
        if (user.getFirstName().equals(value))
            return ControlData.CONTROLDATA_FIRSTNAME.getMsg();
        if (user.getLastName().equals(value))
            return ControlData.CONTROLDATA_LASTNAME.getMsg();
        if (user.getAdress().equals(value))
            return ControlData.CONTROLDATA_ADRESS.getMsg();
        if (user.getEmail().equals(value))
            return ControlData.CONTROLDATA_EMAIL.getMsg();
        if (user.getCp().equals(value))
            return ControlData.CONTROLDATA_CP.getMsg();
        if (user.getBirthday().equals(value))
            return ControlData.CONTROLDATA_BIRTHDAY.getMsg();
        if (user.getLandline().equals(value))
            return ControlData.CONTROLDATA_LANDLINE.getMsg();
        if (user.getMobile().equals(value))
            return ControlData.CONTROLDATA_MOBILE.getMsg();
        if (user.getUser().equals(value))
            return ControlData.CONTROLDATA_USER.getMsg();
        if (user.getPassword().equals(value))
            return ControlData.CONTROLDATA_PASSWORD.getMsg();
        return "";
    }
    static public String getPropertyUser(Login login, String value) {

        if (login.getUser().equals(value))
            return ControlData.CONTROLDATA_USER.getMsg();
        if (login.getPassword().equals(value))
            return ControlData.CONTROLDATA_PASSWORD.getMsg();
        return "";
    }
}
