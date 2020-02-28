package test.validate.validators;

import harnina.validate.validators.NifValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class NifTest {
    @Test
    public void validar(){
        NifValidate nifValidate = new NifValidate();
        assertEquals(11,nifValidate.validate("76235326Z").getId());
        assertEquals(10,nifValidate.validate("762316Z").getId());
        assertEquals(0,nifValidate.validate("76235216Z").getId());
        assertEquals(0,nifValidate.validate("01816122L").getId());
    }
}
