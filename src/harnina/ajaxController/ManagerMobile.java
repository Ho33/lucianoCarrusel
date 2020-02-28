package harnina.ajaxController;

import com.google.gson.Gson;
import harnina.entity.ConcreteSearch;
import harnina.model.procedure.CallerUser;
import harnina.model.procedure.CallerUtil;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/managerMobile")
public class ManagerMobile extends HttpServlet {
    private static final long serialVersionUID = 1L;
    HttpSession session;
    String datos;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        datos=request.getParameter("json");
        session = request.getSession();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        JSONObject oneJson = new JSONObject();

        System.out.println(datos);
        Gson gson =new Gson();
        ConcreteSearch search=gson.fromJson(datos,ConcreteSearch.class);
        try {
            CallerUtil callerUtil = new CallerUtil();
            oneJson.put("tamano",callerUtil.getSize());
            JSONArray mobiles = callerUtil.getAllMobiles();
            JSONArray movileTest=callerUtil.getConcreteMobiles(search.getInicio(),search.getStep());
            oneJson.put("datos",movileTest);
            System.out.println(oneJson.toJSONString());
            System.out.println(movileTest.toJSONString());
            System.out.println(mobiles.toJSONString());
            response.getWriter().write(oneJson.toJSONString());

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
