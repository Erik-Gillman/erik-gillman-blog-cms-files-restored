package com.example.backend;

import com.example.backend.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.UserRepo;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired UserService(UserRepo userRepo){this.userRepo = userRepo;}

    public Users addUser(Users user){return userRepo.save(user);}

    public Users findUserByUserName(String userName){return userRepo.findUserByUserName(userName);}

    public List<Users> findAllUsers(){
        return userRepo.findAll();
    }
    public void deleteUserByUserName(String userName){userRepo.deleteUserByUserName(userName);}
}
