package harnina.model.procedure;

import harnina.entity.Login;
import harnina.entity.User;
import harnina.entity.UserData;
import org.json.simple.JSONObject;

import java.sql.*;
import java.util.UUID;

public class CallerUser extends CallerGlobal{

    public CallerUser() throws SQLException, ClassNotFoundException {
    }

    public Boolean existNifUser(String nif) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isNif(?, ?)}");
        cstmt.setString(1, nif);
        cstmt.registerOutParameter(2, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(2);
    }

    public Boolean existOtroNifUser(String user, String nif) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isAnotherNif(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, nif);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);
    }

    public Boolean existEmailUser(String email) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isEmail(?, ?)}");
        cstmt.setString(1, email);
        cstmt.registerOutParameter(2, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(2);

    }

    public Boolean existOtroEmailUser(String user, String nif) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isAnotherEmail(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, nif);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);
    }

    public Boolean existUserUser(String user) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isUser(?, ?)}");
        cstmt.setString(1, user);
        cstmt.registerOutParameter(2, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(2);

    }

    public Boolean existOtroUserUser(String user, String newUser) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isAnotherUser(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, newUser);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);

    }

    public Boolean existPasswordUser(String password) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isPassword(?, ?)}");
        cstmt.setString(1, password);
        cstmt.registerOutParameter(2, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(2);

    }

    public Boolean existOtroPasswordUser(String user, String password) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call isAnotherPassword(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, password);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);
    }

    public Boolean addUser(User user)throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call addUser(?,?,?,?,?,?,?,?,?,?,?,?)}");
        cstmt.setString(1, user.getNif());
        cstmt.setString(2, user.getLastName());
        cstmt.setString(3, user.getFirstName());
        cstmt.setString(4, user.getCp());
        cstmt.setString(5, user.getAdress());
        cstmt.setString(6, user.getBirthday());
        cstmt.setString(7, user.getLandline());
        cstmt.setString(8, user.getMobile());
        cstmt.setString(9, user.getEmail());
        cstmt.setString(10, user.getUser());
        cstmt.setString(11, user.getPassword());
        cstmt.registerOutParameter(12, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(12);

    }

    public String getEmailUser(String user) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getEmail(?, ?)}");
        cstmt.setString(1, user);
        cstmt.registerOutParameter(2, Types.VARCHAR);
        cstmt.execute();
        return cstmt.getString(2);

    }

    public Boolean lockedUser(String user) throws SQLException {
        String uuid = UUID.randomUUID().toString();
        String clave = uuid.substring(0, Math.min(uuid.length(), 50));
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call lockedUser(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, clave);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);

    }

    public String getLockKey(String user) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getLockKey(?, ?)}");
        cstmt.setString(1, user);
        cstmt.registerOutParameter(2, Types.VARCHAR);
        cstmt.execute();
        return cstmt.getString(2);

    }

    public Boolean unlockUser(String email, String key) throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call unlockUser(?, ?, ?)}");
        cstmt.setString(1, email);
        cstmt.setString(2, key);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);

    }

    public Boolean checkLogin(String user, String password)throws SQLException{
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call checkLogin(?, ?, ?)}");
        cstmt.setString(1, user);
        cstmt.setString(2, password);
        cstmt.registerOutParameter(3, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(3);

    }

    public JSONObject getDataUser(String user){
        ResultSet results = null;
        JSONObject oneJson = new JSONObject();
        try{
            CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getDataUser(?)}");
            cstmt.setString(1, user);
            try{
                results = cstmt.executeQuery();
                results.next();

                oneJson.put("nif", results.getString("NIF"));
                oneJson.put("lastName", results.getString("lastName"));
                oneJson.put("firstName", results.getString("firstName"));
                oneJson.put("postalCode", results.getString("postalCode"));
                oneJson.put("adress", results.getString("adress"));
                oneJson.put("birthday", results.getString("birthday"));
                oneJson.put("landline", results.getString("landline"));
                oneJson.put("movil", results.getString("movil"));
                oneJson.put("email", results.getString("email"));

                return  oneJson;
            }
            finally {
                if (cstmt != null) {
                    cstmt.close();
                }
            }
        }
        catch (Exception ignore) {
        }

        return oneJson;
    }

    public Boolean updateDataUser(UserData user, String myUser)throws SQLException{
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call updateDataUser(?,?,?,?,?,?,?,?,?,?,?)}");
        cstmt.setString(1, user.getNif());
        cstmt.setString(2, user.getLastName());
        cstmt.setString(3, user.getFirstName());
        cstmt.setString(4, user.getCp());
        cstmt.setString(5, user.getAdress());
        cstmt.setString(6, user.getBirthday());
        cstmt.setString(7, user.getLandline());
        cstmt.setString(8, user.getMobile());
        cstmt.setString(9, user.getEmail());
        cstmt.setString(10, myUser);
        cstmt.registerOutParameter(11, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(11);

    }

    public Boolean updateLogin(String oldUser, Login login)throws SQLException{
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call updateLogin(?,?,?,?)}");
        cstmt.setString(1, oldUser);
        cstmt.setString(2, login.getUser());
        cstmt.setString(3, login.getPassword());
        cstmt.registerOutParameter(4, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(4);

    }

    public int getIdClient(String user) throws SQLException{
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getIdClient(?, ?)}");
        cstmt.setString(1, user);
        cstmt.registerOutParameter(2, Types.INTEGER);
        cstmt.execute();
        return cstmt.getInt(2);
    }

    public Boolean deleteUser(String user) throws SQLException{
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call deleteUser(?, ?)}");
        cstmt.setString(1, user);
        cstmt.registerOutParameter(2, Types.BOOLEAN);
        cstmt.execute();
        return cstmt.getBoolean(2);
    }
}
