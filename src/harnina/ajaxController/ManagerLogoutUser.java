package harnina.ajaxController;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/logoutUser")
public class ManagerLogoutUser extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        session = request.getSession();

        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        session.setAttribute("activePage", null);


        response.getWriter().write("ok: Logout OK");
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}