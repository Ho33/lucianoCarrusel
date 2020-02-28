package harnina.util;


import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;

public class ManagementIntent extends HttpServlet {
    HttpSession session;

    public ManagementIntent(HttpSession session) {
        this.session = session;
    }

    public void addIntent() {
        int intent = (int) session.getAttribute("intento");
        intent++;
        session.setAttribute("intento", intent);
    }

    public boolean haveIntent() {
        int intent = (int) session.getAttribute("intento");
        int maxIntent = (int) session.getAttribute("maxIntento");
        if (intent < maxIntent) {
            return true;
        }
        return false;
    }

    public int getIntent(){
        int intent = (int) session.getAttribute("intento");
        return intent;
    }

    public int getIntentMax(){
        int maxIntent = (int) session.getAttribute("maxIntento");
        return maxIntent;
    }

    public boolean lastIntent() {
        int intent = (int) session.getAttribute("intento");
        int maxIntent = (int) session.getAttribute("maxIntento");
        if (intent == maxIntent) {
            return true;
        }
        return false;
    }

    public boolean espentIntent() {
        int intent = (int) session.getAttribute("intento");
        int maxIntent = (int) session.getAttribute("maxIntento");
        if (intent > maxIntent) {
            return true;
        }
        return false;
    }

    public String textIntent() {
        return "Llevas " + (int) session.getAttribute("intento") + " intento de " + (int) session.getAttribute("maxIntento");
    }

    public void resetIntent() {
        session.setAttribute("intento", 0);
    }

    public int debtIntent(){
        int intent = (int) session.getAttribute("intento");
        int maxIntent = (int) session.getAttribute("maxIntento");
        return (maxIntent - intent);
    }

}
