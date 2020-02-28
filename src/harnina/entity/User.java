package harnina.entity;

public class User {
    private String nif;
    private String firstName;
    private String lastName;
    private String adress;
    private String cp;
    private String birthday;
    private String landline;
    private String mobile;
    private String email;
    private String user;
    private String password;

    public User(String nif, String firstName, String lastName, String adress, String cp,String birthday, String landline, String mobile, String email, String user, String password) {
        this.nif = nif;
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.cp = cp;
        this.birthday = birthday;
        this.landline = landline;
        this.mobile = mobile;
        this.email = email;
        this.user = user;
        this.password = password;
    }

    public String getNif() {
        return nif;
    }

    public void setNif(String nif) {
        this.nif = nif;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getLandline() {
        return landline;
    }

    public void setLandline(String landline) {
        this.landline = landline;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
