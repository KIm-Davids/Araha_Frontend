package com.semicolon.africa.Go_Rent_App.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


@Entity
public class EventProduct extends Product {

    @Id
    private Long id;
    @ManyToOne
    private User userId;
}
