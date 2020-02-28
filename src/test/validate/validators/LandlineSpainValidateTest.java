package test.validate.validators;

import harnina.validate.validators.AddressValidate;
import harnina.validate.validators.LandlineSpainValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LandlineSpainValidateTest {
    @Test
    public void validar(){
        LandlineSpainValidate landlineSpainValidate = new LandlineSpainValidate();
        assertEquals(0,landlineSpainValidate.validate("0034824323314").getId());
        assertEquals(0,landlineSpainValidate.validate("34924323314").getId());
        assertEquals(0,landlineSpainValidate.validate("0034924323314").getId());
        assertEquals(0,landlineSpainValidate.validate("+34924323314").getId());
    }
}
