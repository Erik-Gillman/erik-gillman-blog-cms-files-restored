package com.example.backend.controllers;

import com.example.backend.services.UserService;
import com.example.backend.Users;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{userName}")
    public ResponseEntity<Users> getUser(@PathVariable("userName") String userName){
        Users user = userService.findUserByUserName(userName);
        if(user == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/auth/{userName}/{password}")
    public ResponseEntity<Users> authUser(@PathVariable("userName") String userName, @PathVariable("password") String password){
        Users user = userService.findUserByUserName(userName);
        if(user != null){
            if(user.getPassword().equals(password)){
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }
    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users user) {
        System.out.println("checkPoint 1");
        Users oldUser = userService.findUserByUserName(user.getUserName());
        System.out.println("Check point 2");
        if (oldUser == null) {
            Users newUser = userService.addUser(user);
            //add 406 error code (HttpStatus.NOT_ACCEPTABLE)
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_ACCEPTABLE);
    }

    @DeleteMapping("/delete/{userName}")
    public ResponseEntity<?> deleteUser(@PathVariable("userName") String userName){
        Users user = userService.findUserByUserName(userName);
        if(user != null) {
            userService.deleteUserByUserName(userName);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
