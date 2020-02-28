package harnina.ajaxController;

import com.google.gson.Gson;
import harnina.model.procedure.CallerUser;
import harnina.entity.UserData;
import harnina.errror.ErrorValidate;
import harnina.validate.ValidateUserFacade;
import harnina.verify.StateVerify;
import harnina.verify.VerifyUserData;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

@WebServlet("/managerUpdateDataUser")
public class ManagerUpdateDataUser extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    String userData;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        session = request.getSession();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        userData = request.getParameter("json");
        Gson gson = new Gson();
        UserData user = gson.fromJson(userData, UserData.class);
        HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
        errorsAll = ValidateUserFacade.getErrorsAll(user);
        if(errorsAll.isEmpty()) {
            System.out.println("Validation OK");
            HashMap<String, StateVerify> stateVerify = new HashMap<>();
            try {
                stateVerify = (new VerifyUserData()).verify((String) session.getAttribute("myUser"),user);

            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            if (stateVerify.isEmpty()) {
                System.out.println("Verificación OK");
                try {
                    CallerUser callerUser = new CallerUser();
                    if(callerUser.updateDataUser(user,(String) session.getAttribute("myUser"))){
                        response.getWriter().write("ok Update  OK");
                    }else {
                        response.getWriter().write("Error Update");
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }


            }
        }
    }
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }
}

