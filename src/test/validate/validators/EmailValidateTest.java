package test.validate.validators;

import harnina.validate.validators.EmailValidate;
import harnina.validate.validators.LettersWithSpaceValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EmailValidateTest {
    @Test
    public void validar(){

        EmailValidate emailValidate = new EmailValidate();
        assertEquals(4,emailValidate.validate("luciano@@bme.es").getId());
        assertEquals(0,emailValidate.validate("lu.cia.no@bme.es").getId());
        assertEquals(0,emailValidate.validate("luciano@bme.es").getId());
    }
}
