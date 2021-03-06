package harnina.validate.validators;

import harnina.errror.ErrorValidate;
import harnina.validate.ValidableValue;


import java.util.ArrayList;

public class CifNieNifValidate implements ValidableValue {
    public static final String VALIDATE_NAME = "cifNieNifValidate";
    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }

    @Override
    public ErrorValidate validate(String document) {
        ArrayList<ErrorValidate> errors = new ArrayList<>();
        errors.add(new NifValidate().validate(document));
        errors.add(new NieValidate().validate(document));
        errors.add(new CifValidate().validate(document));

        for(ErrorValidate error : errors){
            if(error == ErrorValidate.ERROR_NULL){
                return ErrorValidate.ERROR_NULL;
            }
        }
        return ErrorValidate.ERROR_DOCUMENT_BAD;
    }
}
