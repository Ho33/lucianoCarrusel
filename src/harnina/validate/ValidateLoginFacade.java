package harnina.validate;

import harnina.entity.Login;
import harnina.entity.User;
import harnina.errror.ErrorValidate;
import harnina.util.AddErrorArrayError;

import java.util.ArrayList;
import java.util.HashMap;

public class ValidateLoginFacade {
    public static HashMap<String, ArrayList<harnina.errror.ErrorValidate>> getErrorsAll(Login login){
        HashMap<String, ArrayList<harnina.errror.ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateValueComposite().validate(login),errorsAll).getErrorsAll();
        errorsAll = new AddErrorArrayError(new ValidateSizeComposite().validate(login),errorsAll).getErrorsAll();
        return errorsAll;
    }
    public static HashMap<String, ArrayList<harnina.errror.ErrorValidate>> getErrorsValue(Login login){
        HashMap<String, ArrayList<harnina.errror.ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateValueComposite().validate(login),errorsAll).getErrorsAll();
        return errorsAll;
    }
    public static HashMap<String, ArrayList<harnina.errror.ErrorValidate>> getErrorsSize(User user){
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateSizeComposite().validate(user),errorsAll).getErrorsAll();
        return errorsAll;
    }
}
