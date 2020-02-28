package harnina.model.procedure;

import harnina.model.accessDB.AccessMysql;

import java.sql.Connection;
import java.sql.SQLException;

public class CallerGlobal {
    private AccessMysql accessMysql;
    protected Connection connection = null;

    public CallerGlobal() throws SQLException, ClassNotFoundException {
        accessMysql = AccessMysql.instance("storemobile2019vista", "root", "");
        connection = accessMysql.getConnection();
    }
}
