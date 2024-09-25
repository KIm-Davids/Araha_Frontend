package com.semicolon.africa.arahasubcriptionapp.dtos.requests;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserRegister {
    private String email;
    private String password;
    private String username;
    private String phoneNumber;
}
