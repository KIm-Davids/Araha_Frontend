package com.semicolon.africa.arahasubcriptionapp.services;

import com.semicolon.africa.arahasubcriptionapp.dtos.requests.UserRegister;
import com.semicolon.africa.arahasubcriptionapp.dtos.responses.UserResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;
    @Test
    public void testToRegisterUser(){
        UserRegister userRegister = new UserRegister();
        userRegister.setEmail("araha@gmail.com");
        userRegister.setPassword("password");
        userRegister.setPhoneNumber("08133608698");
        userRegister.setUsername("username");
        UserResponse userResponse = userService.register(userRegister);
        assertThat(userResponse).isNotNull();
        assertThat(userService.getAllUsers().size()).isEqualTo(1L);
        assertThat(userResponse.getMessage()).contains("Registered Successfully");
    }


}