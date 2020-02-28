package test.validate.validators;

import harnina.validate.validators.MobileValidate;
import harnina.validate.validators.UserValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserValidateTest{
        @Test
    public void validar() {
            UserValidate userValidate = new UserValidate();
            assertEquals(0, userValidate.validate("luc1234").getId());
            assertEquals(52, userValidate.validate("l3e1234").getId());
            assertEquals(52, userValidate.validate("lu31234").getId());
            assertEquals(0, userValidate.validate("l123456").getId());
        }
}