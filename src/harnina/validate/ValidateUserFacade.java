package harnina.validate;

import harnina.entity.User;
import harnina.entity.UserData;
import harnina.errror.ErrorValidate;
import harnina.util.AddErrorArrayError;

import java.util.ArrayList;
import java.util.HashMap;

public class ValidateUserFacade {


    public static HashMap<String, ArrayList<ErrorValidate>> getErrorsAll(User user){
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateValueComposite().validate(user),errorsAll).getErrorsAll();
        errorsAll = new AddErrorArrayError(new ValidateSizeComposite().validate(user),errorsAll).getErrorsAll();
       return errorsAll;
    }
    public static HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(User user){
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateValueComposite().validate(user),errorsAll).getErrorsAll();
        return errorsAll;
    }
    public static HashMap<String, ArrayList<ErrorValidate>> getErrorsSize(User user){
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateSizeComposite().validate(user),errorsAll).getErrorsAll();
        return errorsAll;
    }
    public static HashMap<String, ArrayList<ErrorValidate>> getErrorsAll(UserData user){
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = new AddErrorArrayError(new ValidateValueComposite().validate(user),errorsAll).getErrorsAll();
        errorsAll = new AddErrorArrayError(new ValidateSizeComposite().validate(user),errorsAll).getErrorsAll();
        return errorsAll;
    }

}
