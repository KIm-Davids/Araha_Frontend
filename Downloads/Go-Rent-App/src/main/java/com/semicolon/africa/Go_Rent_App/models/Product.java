package com.semicolon.africa.Go_Rent_App.models;

import com.semicolon.africa.Go_Rent_App.constants.Category;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
abstract class Product {
    private String productName;
    private String description;
    private Location address;
    private BigDecimal price;
    private Category productCategory;
}
