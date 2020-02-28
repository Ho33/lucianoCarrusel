package harnina.ajaxController;

import com.google.gson.Gson;
import harnina.model.procedure.CallerUser;
import harnina.entity.User;
import harnina.errror.ErrorValidate;
import harnina.verify.StateVerify;
import harnina.util.InverProperty;
import harnina.validate.ValidateUserFacade;
import harnina.verify.VerifyUser;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpSession;




@WebServlet("/managerSignUp")
public class ManagerSignUp extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    String client, nif, mensaje;


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws   ServletException, IOException {
        session = request.getSession();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        client = request.getParameter("json");

        Gson gson = new Gson();
        User user = gson.fromJson(client, User.class);

        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = ValidateUserFacade.getErrorsAll(user);

        if(errorsAll.isEmpty()){
            HashMap<String, StateVerify> stateVerify = new HashMap<>();
            VerifyUser verifyUser = null;
            try {
                 stateVerify = new VerifyUser(user).verify();

            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            if(stateVerify.isEmpty()){
                System.out.println("Verificación OK");
                try {
                    if((new CallerUser()).addUser(user)){
                        System.out.println("new user OK");
                        session.setAttribute("intento", 0);
                        response.getWriter().write("ok new user");
                    }else {
                        System.out.println("new user ERROR");
                        response.getWriter().write("ERROR new user");
                    }

                } catch (SQLException e) {
                    e.printStackTrace();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }


                // guardar en la BBDD
            }else {
                System.out.println("Problemas con la Verificación");
                JSONArray arrayJson = new JSONArray();
                for(Map.Entry<String,StateVerify> entry: stateVerify.entrySet() ){
                    JSONObject oneJson = new JSONObject();
                    oneJson.put("messageError",entry.getValue().getMsgEn());
                    oneJson.put("controlName",InverProperty.getPropertyUser(user,entry.getKey()));
                    arrayJson.add(oneJson);
                }
                response.getWriter().write(arrayJson.toJSONString());
            }
        } else {
            System.out.println("Tenemos Errores:");
            JSONArray arrayJson = new JSONArray();

            for (Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsAll.entrySet()) {
                ArrayList<ErrorValidate> myerror = entry.getValue();
                myerror.forEach((n) ->{
                    JSONObject oneJson = new JSONObject();
                    oneJson.put("messageError", n.getMsgEs());
                    oneJson.put("controlName", InverProperty.getPropertyUser(user,entry.getKey()));
                    arrayJson.add(oneJson);
                });
            }
            response.getWriter().write(arrayJson.toJSONString());
        }
    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }
}
