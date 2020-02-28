<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="harnina.model.accessDB.AccessMysql" %>
<%@ page import="harnina.model.procedure.CallerUser" %>
<%@ page import="harnina.model.procedure.CallerPage" %>
<%@ page import="java.time.LocalDateTime" %>
<%--
  Created by IntelliJ IDEA.
  CallerUser: Luciano
  Date: 23/09/2019
  Time: 14:00
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%
  String myPage = "";
  session = request.getSession();

  if (session.getAttribute("activePage") == null) {
    session.setAttribute("activePage", "index");
    session.setAttribute("intento", 0);
    session.setAttribute("maxIntento", 3);
    session.setAttribute("instantLock", null);
    session.setAttribute("durationLock", 10);
    session.setAttribute("myIdSession", session.getId());
    session.setAttribute("myUser", "");
    session.setAttribute("idClient", 0);
    session.setAttribute("myPassword", "");
  }
  if (session.getAttribute("myIdSession") == session.getId()) {
    //AccessMysql myTubeMysql = AccessMysql.instance("storemobile2019vista", "global2", "12345");
   CallerPage callerPage = new CallerPage();
    myPage = callerPage.getPage((String) session.getAttribute("activePage"));
  }
%>
<%=myPage%>
