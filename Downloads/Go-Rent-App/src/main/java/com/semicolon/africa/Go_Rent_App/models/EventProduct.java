package com.semicolon.africa.Go_Rent_App.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class EventProduct extends Product {

    @Id
    private Long id;
}
