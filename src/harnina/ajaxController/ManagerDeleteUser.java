package harnina.ajaxController;

import harnina.model.procedure.CallerUser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/deleteUser")
public class ManagerDeleteUser extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        session = request.getSession();

        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        try {
            CallerUser callerUser = new CallerUser();
            if (callerUser.deleteUser((String) session.getAttribute("myUser"))){
                session.setAttribute("activePage", null);
                response.getWriter().write("ok: Delete OK");
            }else {
                response.getWriter().write("Error Delete User");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}