package com.semicolon.africa.Go_Rent_App.models;

import com.semicolon.africa.Go_Rent_App.constants.Consent;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class User {

    @Id
    private Long id;
    @OneToMany
    private List<RentalTransaction> transaction;
    private Location address;
    private Consent userConsent;
}
