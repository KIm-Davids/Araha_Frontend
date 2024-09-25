package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.arahasubcriptionapp.data.models.User;
import com.semicolon.africa.arahasubcriptionapp.dtos.requests.UserRegister;
import com.semicolon.africa.arahasubcriptionapp.dtos.responses.UserResponse;

import java.util.Collection;
import java.util.List;

public interface UserService {

    UserResponse register(UserRegister userRegister);

    List<User> getAllUsers();

}
