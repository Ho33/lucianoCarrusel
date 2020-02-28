package test.validate.validators;

import harnina.validate.validators.LandlineSpainValidate;
import harnina.validate.validators.LandlineValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LandlineValidateTest {
    @Test
    public void validar(){
        LandlineValidate landlineValidate = new LandlineValidate();
        assertEquals(0,landlineValidate.validate("0034824323314").getId());
        assertEquals(0,landlineValidate.validate("33924323314").getId());
        assertEquals(0,landlineValidate.validate("19243233148").getId());
        assertEquals(0,landlineValidate.validate("+34924323314").getId());
    }
}
