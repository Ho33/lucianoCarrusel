package harnina.validate.validators;

import harnina.errror.ErrorValidate;
import harnina.validate.ValidableValue;

public class LettersWithSpaceValidate extends RegularExpressionValidation implements ValidableValue {
    public static final String VALIDATE_NAME = "lettersWithSpaceValidate";
    private final String PATRON = "^[a-zA-ZñÑáéíóúÁÉÍÓÚªº\\s]*$";

    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }

    @Override
    public ErrorValidate validate(String string) {
        if(super.validate(string, PATRON)) return ErrorValidate.ERROR_NULL;
        else return ErrorValidate.ERROR_LETTER_SPACE;
    }
}
