package de.tipgame.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserLoginData {
    @Id
    private int id;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private boolean loginAccepted;

    public boolean isLoginAccepted() {
        return loginAccepted;
    }

    public void setLoginAccepted(boolean loginAccepted) {
        this.loginAccepted = loginAccepted;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    String username;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    String password;
}