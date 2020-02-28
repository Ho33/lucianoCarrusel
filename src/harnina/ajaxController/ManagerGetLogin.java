package harnina.ajaxController;

import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


@WebServlet("/managerGetLogin")
public class ManagerGetLogin extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        session = request.getSession();

        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        JSONObject loginUser = new JSONObject();
        loginUser.put("myUser",session.getAttribute("myUser"));
        loginUser.put("myPassword",session.getAttribute("myPassword"));
        response.getWriter().write(loginUser.toJSONString());

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}