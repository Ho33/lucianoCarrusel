package harnina.ajaxController;

import com.google.gson.Gson;
import harnina.model.procedure.CallerUser;
import harnina.entity.Login;
import harnina.errror.ErrorValidate;
import harnina.validate.ValidateLoginFacade;
import harnina.verify.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.lang.reflect.Type;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

@WebServlet("/managerUpdateLogin")
public class ManagerUpdateLogin extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    String loginText;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        session = request.getSession();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        loginText = request.getParameter("json");
        Gson gson = new Gson();
        Login userLogin = gson.fromJson(loginText, (Type) Login.class);
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = ValidateLoginFacade.getErrorsAll(userLogin);
        if(errorsAll.isEmpty()) {
            System.out.println("Validation OK");
            HashMap<String, StateVerify> stateVerify = new HashMap<>();

            try {
                stateVerify = ((new Verification()).VerificationLoginExist((String) session.getAttribute("myUser"), userLogin));

            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            if (stateVerify.isEmpty()) {
                System.out.println("Verificación OK");
                try {
                    CallerUser callerUser = new CallerUser();

                    if(callerUser.updateLogin((String) session.getAttribute("myUser"), userLogin)){


                        System.out.println("olUser" + session.getAttribute("myUser"));
                        System.out.println("newmyUser" + userLogin.getUser());
                        System.out.println("newPassword" + userLogin.getPassword());

                        session.setAttribute("myUser", userLogin.getUser());
                        session.setAttribute("intento", 0);

                        response.getWriter().write("ok Update Login OK");
                    }else {
                        response.getWriter().write("Error Update Login");
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }


            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }
}
