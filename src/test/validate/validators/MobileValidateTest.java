package test.validate.validators;


import harnina.validate.validators.MobileValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MobileValidateTest {
    @Test
    public void validar(){
        MobileValidate mobileValidate  = new MobileValidate();
        assertEquals(0,mobileValidate.validate("0034685200321").getId());
        assertEquals(0,mobileValidate.validate("33685200321").getId());
        assertEquals(0,mobileValidate.validate("16852003213").getId());
        assertEquals(0,mobileValidate.validate("+34685200321").getId());
    }
}
