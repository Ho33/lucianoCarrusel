package test.validate.validators;

import harnina.validate.validators.AddressValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AddressValidateTest {
    @Test
    public void validar(){
        AddressValidate addressValidate = new AddressValidate();
        assertEquals(34,addressValidate.validate("Ramón & Cajal").getId());
        assertEquals(34,addressValidate.validate("Ramón - Cajal").getId());
        assertEquals(0,addressValidate.validate("Ramón y Cajal").getId());
        assertEquals(0,addressValidate.validate("Ramón y Cajal 55").getId());
        assertEquals(0,addressValidate.validate("Avd. Mediterráneo Km 8,5").getId());
    }
}
