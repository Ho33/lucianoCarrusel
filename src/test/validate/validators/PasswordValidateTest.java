package test.validate.validators;

import harnina.validate.validators.PasswordValidate;
import harnina.validate.validators.UserValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PasswordValidateTest {
    @Test
    public void validar() {
        PasswordValidate passwordValidate = new PasswordValidate();
        assertEquals(53, passwordValidate.validate("luc1234").getId());
        assertEquals(53, passwordValidate.validate("l3_e1234").getId());
        assertEquals(53, passwordValidate.validate("Lu31234").getId());
        assertEquals(53, passwordValidate.validate("kuc_12345").getId());
        assertEquals(53, passwordValidate.validate("1uc_12345").getId());
        assertEquals(53, passwordValidate.validate("Luc_1234").getId());
        assertEquals(0, passwordValidate.validate("Luc_12345").getId());
    }
}