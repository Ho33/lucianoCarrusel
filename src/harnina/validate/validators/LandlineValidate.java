package harnina.validate.validators;

import harnina.errror.ErrorValidate;
import harnina.validate.ValidableValue;

import java.util.ArrayList;

public class LandlineValidate implements ValidableValue {
    public static final String VALIDATE_NAME = "landlineValidate";
    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }

    @Override
    public ErrorValidate validate(String landline) {
        ArrayList<ErrorValidate> errors = new ArrayList<>();
        errors.add(new LandlineSpainValidate().validate(landline));
        errors.add(new LandlineFranceValidate().validate(landline));
        errors.add(new LandlineUSAValidate().validate(landline));

        for(ErrorValidate error : errors){
            if(error == ErrorValidate.ERROR_NULL){
                return ErrorValidate.ERROR_NULL;
            }
        }
        return ErrorValidate.ERROR_PHONE_LANDLINE;
    }
}

