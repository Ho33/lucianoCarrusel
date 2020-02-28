package harnina.validate;

import harnina.errror.ErrorValidate;

public interface ValidableLength extends Validable {

        ErrorValidate validate(String string, int min, int max);

}
