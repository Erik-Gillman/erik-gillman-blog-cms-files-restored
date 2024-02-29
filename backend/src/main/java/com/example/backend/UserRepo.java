package com.example.backend;

import com.example.backend.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users, Long> {

    Users findUserByUserName(String userName);

    void deleteUserByUserName(String userName);
}
