package test.validate.validators;

import harnina.validate.validators.NieValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class NieTest {
    @Test
    public void validar(){
        NieValidate nieValidate = new NieValidate();
        assertEquals(15,nieValidate.validate("Z6235326Z").getId());
        assertEquals(16,nieValidate.validate("Z096225Z").getId());
        assertEquals(17,nieValidate.validate("A0961225Z").getId());
        assertEquals(0,nieValidate.validate("Z0961225Z").getId());

    }
}
