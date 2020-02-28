package test.validate.validators;

import harnina.validate.validators.BirthdayValidate;
import harnina.validate.validators.EmailValidate;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BirthdayValidateTest {
    @Test
public void validar(){

    BirthdayValidate birthdayValidate = new BirthdayValidate();
    assertEquals(4,birthdayValidate.validate("12345").getId());
    assertEquals(4,birthdayValidate.validate("2019/12/04").getId());
    assertEquals(4,birthdayValidate.validate("04-12-2019").getId());
    assertEquals(0,birthdayValidate.validate("2019-12-04").getId());
    assertEquals(4,birthdayValidate.validate("19-12-04").getId());
    }
}
