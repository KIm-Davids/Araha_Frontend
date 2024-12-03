package com.semicolon.africa.Go_Rent_App.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetails {

    private Location address;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
}
