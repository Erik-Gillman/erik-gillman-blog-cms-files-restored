package com.example.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long postId;

    private long userId;
    private String title;
    private String content;
    private Date dateCreated;
    private Date lastEdited;
    private String userName;


    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public long getUserId() {
        return userId;
    }

    public long getPostId() {
        return postId;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public Date getLastEdited() {
        return lastEdited;
    }

    public String getUserName() {
        return userName;
    }
}
