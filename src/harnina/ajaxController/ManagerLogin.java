package harnina.ajaxController;

import com.google.gson.Gson;
import harnina.model.procedure.CallerUser;
import harnina.entity.Login;
import harnina.errror.ErrorValidate;
import harnina.util.BlockingTime;
import harnina.util.InverProperty;
import harnina.util.ManagementIntent;
import harnina.util.SendEmail;
import harnina.validate.Validation;
import harnina.verify.StateVerify;
import harnina.verify.Verification;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.*;

@WebServlet("/managerLogin")
public class ManagerLogin extends HttpServlet {

    private static final long serialVersionUID = 1L;
    HttpSession session;
    ManagementIntent managementIntent;
    String client;
    int intent;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        session = request.getSession();
        managementIntent = new ManagementIntent(session);
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        if(!this.isBlocked(response)){
            client = request.getParameter("json");
            HashMap<String, ArrayList<harnina.errror.ErrorValidate>> errorsAll = (new Validation()).validationLogin(client);
            if (errorsAll.isEmpty()) {
                HashMap<String, StateVerify> stateVerify = null;
                managementIntent.addIntent();
                if( managementIntent.espentIntent()) {
                    this.actionBlocking(response);
                } else{
                    try {
                        stateVerify = (new Verification()).VerificationLogin(client);
                        this.checkVerify(response, stateVerify);
                    } catch (SQLException e) {
                        e.printStackTrace();
                    } catch (ClassNotFoundException e) {
                        e.printStackTrace();
                    }
                }
            } else {
                this.actionError(response, errorsAll);
            }
        }
        else{
            this.actionBlocked(response);
        }
    }

    private void checkVerify(HttpServletResponse response, HashMap<String, StateVerify> stateVerify) throws IOException, SQLException, ClassNotFoundException {
        String successful = this.getSuccessful(stateVerify);
        Gson gson = new Gson();
        if (successful == "nothing") {
            System.out.println("No acertó nada: ni user ni password");
            if (managementIntent.haveIntent()) {
                this.actionBonus(response, "warning: bad user & password " + managementIntent.textIntent());
            } else {
                System.out.println("Agotaste los intentos");
                this.actionBlocking(response);
            }
        } else if (successful == "user") {
            if (managementIntent.lastIntent()) {
                Login login = gson.fromJson(client, Login.class);
                this.actionLocked(response,login.getUser());

            } else {
                this.actionBonus(response,"warning: bad password " + managementIntent.textIntent());
            }
        } else if (successful == "password") {
            if (managementIntent.haveIntent()) {
                this.actionBonus(response,"warning: bad user " + managementIntent.textIntent());
            } else {
               this.actionBlocking(response);
            }
        } else if (successful == "login") {
            CallerUser callerUser = new CallerUser();
            Login login = gson.fromJson(client, Login.class);
            if(callerUser.checkLogin(login.getUser(),login.getPassword())){
                this.actionLogin(response, login.getUser(), login.getPassword());
            }
            else {
                this.actionBlocking(response);
            }
        }
    }

    private void actionBlocked(HttpServletResponse response) throws IOException {

        JSONObject oneJson = new JSONObject();
        oneJson.put("message", "blocking: Estás bloqueado");
        oneJson.put("durationLock", true );
        response.getWriter().write(oneJson.toJSONString());
    }

    private void actionBlocking(HttpServletResponse response) throws IOException {

        session.setAttribute("instantLock", LocalDateTime.now());
        int duration = (int) session.getAttribute("durationLock");
        JSONObject oneJson = new JSONObject();
        oneJson.put("message", "blocking: Estás bloqueado " + duration + " sg.");
        oneJson.put("durationLock", duration );

        session.setAttribute("durationLock",duration + 5);

        response.getWriter().write(oneJson.toJSONString());

    }

    private void actionBonus(HttpServletResponse response, String message) throws IOException {
        System.out.println(message);
        JSONObject oneJson = new JSONObject();
        oneJson.put("message", message);
        oneJson.put("bonus", managementIntent.debtIntent() );
        response.getWriter().write(oneJson.toJSONString());
    }

    private void actionError(HttpServletResponse response, HashMap<String, ArrayList<ErrorValidate>> errorsAll) throws IOException {
        JSONArray arrayJson = new JSONArray();
        Gson gson = new Gson();
        Login login = gson.fromJson(client, Login.class);
        for (Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsAll.entrySet()) {
            ArrayList<ErrorValidate> myerror = entry.getValue();
            myerror.forEach((n) -> {
                JSONObject oneJson = new JSONObject();
                oneJson.put("messageError", n.getMsgEs());
                oneJson.put("controlName", InverProperty.getPropertyUser(login, entry.getKey()));
                arrayJson.add(oneJson);
            });
        }
        response.getWriter().write(arrayJson.toJSONString());
    }

    private void actionLocked(HttpServletResponse response, String user) throws IOException, SQLException, ClassNotFoundException {
        JSONObject oneJson = new JSONObject();
        oneJson.put("message", blockBBDDSendEmail(user));
        oneJson.put("locked", true);
        response.getWriter().write(oneJson.toJSONString());
    }

    private void actionLogin(HttpServletResponse response, String user, String password) throws IOException, SQLException, ClassNotFoundException {

        session.setAttribute("activePage", "client");
        session.setAttribute("myUser", user);
        session.setAttribute("myPassword", password);
        session.setAttribute("intento", 0);

      int idClient = (new CallerUser()).getIdClient(user);
        session.setAttribute("idClient", idClient);

        JSONObject oneJson = new JSONObject();
        oneJson.put("message", "ok: Password y Usuario correcto");
        oneJson.put("ok", true);
        oneJson.put("myUser", user);
        oneJson.put("idClient", idClient);
        response.getWriter().write(oneJson.toJSONString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    private String getSuccessful (HashMap<String, StateVerify> stateVerify) {

        int user = StateVerify.STATE_USEREXITS.getId();
        int password = StateVerify.STATE_PASSWORDEXITS.getId();
        int login = user + password;
        int state = 0;
        for (Map.Entry<String, StateVerify> entry : stateVerify.entrySet()) {
            state = state + entry.getValue().getId();
        }
        if (state == user) return "user";
        if (state == password) return "password";
        if (state == login) return "login";
        return "nothing";
    }

    private String blockBBDDSendEmail(String user) throws SQLException, ClassNotFoundException {
        session.setAttribute("paginaActiva", "index");
        SendEmail sendEmail = new SendEmail(user);
        return sendEmail.send();
    }

    private boolean isBlocked(HttpServletResponse response){
        return (new BlockingTime((LocalDateTime) session.getAttribute("instantLock"), (int) session.getAttribute("durationLock")).isBlocking());
    }


}
