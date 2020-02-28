package harnina.validate.validators;

import harnina.errror.ErrorValidate;
import harnina.validate.ValidableValue;

public class CodigoPostalValidate extends RegularExpressionValidation implements ValidableValue {
    public static final String VALIDATE_NAME = "codigoPostalValidate";
    private final String PATRON = "^(?:0[1-9]|[1-4]\\d|5[0-2])\\d{3}$";

    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }

    @Override
    public ErrorValidate validate(String string) {
        if(super.validate(string, PATRON)) return ErrorValidate.ERROR_NULL;
        else return ErrorValidate.ERROR_VALIDATE_PATTERN;
    }
}