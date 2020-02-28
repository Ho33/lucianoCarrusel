package harnina.util;
import harnina.model.procedure.CallerUser;

import java.sql.SQLException;
import java.util.*;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendEmail
{
    String user;
    public SendEmail(String user) throws ClassNotFoundException, SQLException {
        this.user = user;
    }
    public String send(){
        final String username = "lucianoluqui55@gmail.com";
        final String password = "lu765qui";
        String email = "";
        String clave = "";
        String mensaje = "";
        try {
            email = (new CallerUser()).getEmailUser(this.user);
        } catch (
                SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        try {
            if((new CallerUser()).lockedUser(this.user)){
                System.out.println("User Bloqueado en BBDD");
            }else{
                System.out.println("User no se ha podido Bloquear en BBDD");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        Properties props = new Properties();
        props.setProperty("mail.smtp.auth", "true");
        props.setProperty("mail.smtp.starttls.enable", "true");
        props.setProperty("mail.smtp.host", "smtp.gmail.com");
        props.setProperty("mail.smtp.port", "587");
        Session session2 = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                        return new javax.mail.PasswordAuthentication(username, password);
                    }
                });

        try {
            clave = (new CallerUser()).getLockKey(this.user);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if (clave != null) {
            Message message = new MimeMessage(session2);
            try {
                message.setFrom(new InternetAddress("from-email@gmail.com"));
                message.setRecipients(Message.RecipientType.TO,
                        InternetAddress.parse(email));
                message.setSubject("Recuperar contraseña");
                message.setText("Tu clave es: " + clave + " O sigue este enlace para desboquear: http://localhost:8080/unlockUser?clave=" + clave + "&email=" + email);
                Transport.send(message);
            } catch (MessagingException e) {
                e.printStackTrace();
            }
            mensaje = "locked: Lock Client: bloqueado, email enviado";
        } else {
            mensaje = "locked: Lock Client: bloqueado, email NO enviado";

        }
        System.out.println(mensaje);

        return mensaje;
    }

}