package test.validate.validators;

import harnina.validate.validators.CifValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CifTest {
    @Test
    public void validar(){
        CifValidate cifValidate = new CifValidate();
        assertEquals(20,cifValidate.validate("F32s249G").getId());
        assertEquals(20,cifValidate.validate("762AA326Z").getId());
        assertEquals(21,cifValidate.validate("F3281249H").getId());
        assertEquals(0,cifValidate.validate("F3281249G").getId());
    }
}
