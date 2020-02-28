package test.validate.validators;

import harnina.validate.validators.CodigoPostalValidate;
import harnina.validate.validators.EmailValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CodigoPostalValidateTest {
    @Test
    public void validar(){

        CodigoPostalValidate codigoPostalValidate = new CodigoPostalValidate();
        assertEquals(4,codigoPostalValidate.validate("099999999").getId());
        assertEquals(4,codigoPostalValidate.validate("068100").getId());
        assertEquals(4,codigoPostalValidate.validate("88888").getId());
        assertEquals(0,codigoPostalValidate.validate("06810").getId());
    }
}
