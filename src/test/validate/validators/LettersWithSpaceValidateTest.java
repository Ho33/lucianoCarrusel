package test.validate.validators;

import harnina.validate.validators.LettersWithSpaceValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LettersWithSpaceValidateTest {
    @Test
    public void validar(){

        LettersWithSpaceValidate lettersWithSpaceValidate = new LettersWithSpaceValidate();
        assertEquals(30,lettersWithSpaceValidate.validate("Luciano22").getId());
        assertEquals(30,lettersWithSpaceValidate.validate("Lucian@").getId());
        assertEquals(0,lettersWithSpaceValidate.validate("Luciano").getId());
        assertEquals(0,lettersWithSpaceValidate.validate("Luciano Romero").getId());
        assertEquals(0,lettersWithSpaceValidate.validate("José").getId());
        assertEquals(0,lettersWithSpaceValidate.validate("José Mª").getId());
    }
}
