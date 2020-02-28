package harnina.validate;

import harnina.errror.ErrorValidate;

public interface ValidableValue extends Validable{
    ErrorValidate validate(String string);
}
