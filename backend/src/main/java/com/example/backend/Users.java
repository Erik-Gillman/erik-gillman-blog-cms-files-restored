package com.example.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String userName;

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }
    public long getId(){
        return id;
    }

    private String password;
    protected Users(){}

    public Users(String userName, String password){
        this.userName = userName;
        this.password = password;
    }
}
