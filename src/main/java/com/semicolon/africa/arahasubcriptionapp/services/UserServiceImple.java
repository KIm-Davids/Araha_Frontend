package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.arahasubcriptionapp.data.models.User;
import com.semicolon.africa.arahasubcriptionapp.data.repositories.UserRepository;
import com.semicolon.africa.arahasubcriptionapp.dtos.requests.UserRegister;
import com.semicolon.africa.arahasubcriptionapp.dtos.responses.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImple implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserResponse register(UserRegister userRegister) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
