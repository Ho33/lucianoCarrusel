package harnina.validate;

import com.google.gson.Gson;
import harnina.entity.Login;
import harnina.entity.User;
import harnina.errror.ErrorValidate;

import java.util.ArrayList;
import java.util.HashMap;

public class Validation {
    Gson gson;
    public Validation(){
        this.gson = new Gson();
    }

    public HashMap<String, ArrayList<ErrorValidate>> validationUser(String data){
        User user = this.gson.fromJson(data, User.class);
        return ValidateUserFacade.getErrorsAll(user);

    }
    public HashMap<String, ArrayList<ErrorValidate>> validationLogin(String data){

        Login login = this.gson.fromJson(data, Login.class);
        return ValidateLoginFacade.getErrorsAll(login);

    }
}
