package harnina.model.procedure;

import com.google.gson.Gson;
import harnina.entity.BuilderMobile;
import harnina.entity.Mobile;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

public class CallerUtil extends CallerGlobal {

    public CallerUtil() throws SQLException, ClassNotFoundException {
    }

    public JSONArray getCp() {
        ResultSet results = null;
        JSONArray cpsJson = new JSONArray();
        try {
            CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getCp()}");
            try {
                results = cstmt.executeQuery();
                while (results.next()) {

                    JSONObject oneJson = new JSONObject();
                    oneJson.put("postalCode", results.getString("cp"));
                    oneJson.put("municipality", results.getString("municipality"));

                    cpsJson.add(oneJson);
                }

                return cpsJson;
            } finally {
                if (cstmt != null) {
                    cstmt.close();
                }
            }
        } catch (Exception ignore) {
        }

        return cpsJson;
    }

    public JSONArray getAllMobiles() {
        ResultSet results;
        BuilderMobile builderMobile = new BuilderMobile();
        Gson gson = new Gson();
        JSONArray cpsJson = new JSONArray();

        try {
            CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getAllMobiles()}");
            try {
                results = cstmt.executeQuery();
                while (results.next()) {
                    Mobile mobile = builderMobile.idModel(results.getString("idModel")).modelName(results.getString("modelName"))
                            .modelDescription(results.getString("modelDescription"))
                            .modelFeatures(results.getString("modelFeatures"))
                            .price(results.getString("price"))
                            .stockCurrent(results.getString("stockCurrent"))
                            .stockMinimum(results.getString("stockMinimum"))
                            .imageModel(results.getString("imageModel"))
                            .imageRear(results.getString("imageRear"))
                            .imageSide(results.getString("imageSide"))
                            .idBrand(results.getString("idBrand"))
                            .SO(results.getString("SO"))
                            .versionSO(results.getString("versionSO"))
                            .iva(results.getString("iva"))
                            .discountBonus(results.getString("discountBonus")).build();
                    cpsJson.add(gson.toJson(mobile));
                }
                return cpsJson;
            } finally {
                if (cstmt != null) {
                    cstmt.close();
                }
            }
        } catch (Exception ignore) {
        }
        return cpsJson;
    }

    public JSONArray getConcreteMobiles(int numberOfRow, int amount) {
        ResultSet results;
        BuilderMobile builderMobile = new BuilderMobile();
        Gson gson = new Gson();
        JSONArray cpsJson = new JSONArray();

        try {
            CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getConcreteMobiles(?,?)}");
            cstmt.setInt(1,numberOfRow);
            cstmt.setInt(2,amount);
            try {
                results = cstmt.executeQuery();

                while (results.next()) {
                    Mobile mobile = builderMobile.idModel(results.getString("idModel")).modelName(results.getString("modelName"))
                            .modelDescription(results.getString("modelDescription"))
                            .modelFeatures(results.getString("modelFeatures"))
                            .price(results.getString("price"))
                            .stockCurrent(results.getString("stockCurrent"))
                            .stockMinimum(results.getString("stockMinimum"))
                            .imageModel(results.getString("imageModel"))
                            .imageRear(results.getString("imageRear"))
                            .imageSide(results.getString("imageSide"))
                            .idBrand(results.getString("idBrand"))
                            .SO(results.getString("SO"))
                            .versionSO(results.getString("versionSO"))
                            .iva(results.getString("iva"))
                            .discountBonus(results.getString("discountBonus")).build();
                    cpsJson.add(gson.toJson(mobile));
                }
                return cpsJson;
            } finally {
                if (cstmt != null) {
                    cstmt.close();
                }
            }
        } catch (Exception ignore) {
        }
        return cpsJson;
    }
    public int getSize() throws SQLException {
        CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getMobileSize(?)}");
        cstmt.registerOutParameter(1, Types.INTEGER);
        cstmt.execute();
        return cstmt.getInt(1);
    }
    private int countRow() {
        return this.getAllMobiles().size();
    }

    public int getNumberOfPages(int mobilesPerPage) {
        int allMobiles = this.countRow();
        System.out.println("todos moviles" + allMobiles);
        return (int) Math.ceil(allMobiles / mobilesPerPage);
    }
}
