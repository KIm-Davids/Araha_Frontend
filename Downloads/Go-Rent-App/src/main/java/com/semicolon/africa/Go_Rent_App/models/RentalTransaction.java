package com.semicolon.africa.Go_Rent_App.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class RentalTransaction {
    @Id
    private long rentalId;
    @OneToOne
    private EventProduct eventProductId;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Boolean status;
    private BigDecimal totalAmount;

}
