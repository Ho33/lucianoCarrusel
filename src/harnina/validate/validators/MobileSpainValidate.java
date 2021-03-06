package harnina.validate.validators;

import harnina.errror.ErrorValidate;
import harnina.validate.ValidableValue;

public class MobileSpainValidate extends RegularExpressionValidation implements ValidableValue {
    public static final String VALIDATE_NAME = "mobileSpainValidate";
    private final String PATRON = "^(\\+34|0034|34)?[6|7][0-9]{8}$";  //"^(\\+34|0034|34)?[6789]\\d{8}$" "^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$" ;

    @Override
    public ErrorValidate validate(String string) {

        if (super.validate(string.trim(), PATRON)) return ErrorValidate.ERROR_NULL;
        else return ErrorValidate.ERROR_PHONE_MOBILE;
    }

    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }
}