package harnina.util;

import harnina.model.procedure.CallerUser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/unlockUser")
public class UnlockUser extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        String lockKey = request.getParameter("clave");
        String email = request.getParameter("email");
        String mensaje = "";

        if(lockKey == null){
            mensaje = "Errror con CLAVE BLOQueo vacia";
        }
        else {
            try {
                if ((new CallerUser()).unlockUser(email, lockKey)) {
                    session.setAttribute("intento",0);
                    mensaje = "Usuario desbloqueado: intento: " + (int) session.getAttribute("intento");
                } else {
                    mensaje = "Error con unlock_user";

                }
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        response.getWriter().write("warning: " + mensaje);

    }
}
