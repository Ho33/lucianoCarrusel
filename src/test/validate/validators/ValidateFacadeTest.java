package test.validate.validators;

import harnina.entity.User;
import harnina.validate.ValidateValueComposite;
import harnina.errror.ErrorValidate;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

import java.util.HashMap;
import java.util.Map;

public class ValidateFacadeTest {
    @Test
    public void validar(){
        ValidateValueComposite validateFacade = new ValidateValueComposite();
        HashMap<String,ErrorValidate> errors= new HashMap<>();
        User user = new User("76235326Z","luciano","Romero Moreno", "Calle Coria","06810","2019-12-04","0034924323314","0034685200565","luciano@bme.es","l123456","Luc_12345");
        errors = validateFacade.validate(user);

        for (Map.Entry<String, ErrorValidate> line: errors.entrySet()){
            String nameValue = line.getKey();
            ErrorValidate nameError = line.getValue();
            if(nameValue == "76235326Z"){
                assertEquals("NIF 8 digitos + una letra",nameError.getMsgEs());
            }
            if(nameValue == "762316Z"){
                assertEquals("NIF longitud incorrecta",nameError.getMsgEs());
            }

        }
    }
}
