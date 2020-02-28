package harnina.validate;

public class ErrorValidate implements ValidableValue {

    private static final String VALIDATE_NAME = "ERROR EN EL PROCESO VALIDAR";

    @Override
    public String getValidateName() {
        return VALIDATE_NAME;
    }

    @Override
    public harnina.errror.ErrorValidate validate(String string) {
        return harnina.errror.ErrorValidate.ERROR_VALIDATE;
    }
}
