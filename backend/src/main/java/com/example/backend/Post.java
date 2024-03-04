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
    private String userName;
    private String title;
    private String content;
    private Date dateCreated;
    private Date lastEdited;


}
