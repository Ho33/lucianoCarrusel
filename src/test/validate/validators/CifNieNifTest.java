package test.validate.validators;

import harnina.validate.validators.CifNieNifValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CifNieNifTest  {
    @Test
    public void validar(){
        CifNieNifValidate cifNieNifValidate = new CifNieNifValidate();
        assertEquals(25,cifNieNifValidate.validate("F32s249G").getId());
        assertEquals(25,cifNieNifValidate.validate("762AA326Z").getId());
        assertEquals(25,cifNieNifValidate.validate("F3281249H").getId());
        assertEquals(0,cifNieNifValidate.validate("F3281249G").getId());
        assertEquals(0,cifNieNifValidate.validate("76235216Z").getId());
        assertEquals(0,cifNieNifValidate.validate("Y1765783H").getId());
        assertEquals(0,cifNieNifValidate.validate("W7526469G").getId());
        assertEquals(0,cifNieNifValidate.validate("05057066X").getId());
    }
}
