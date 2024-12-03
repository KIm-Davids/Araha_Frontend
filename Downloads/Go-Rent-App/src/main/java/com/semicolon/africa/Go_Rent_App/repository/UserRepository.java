package com.semicolon.africa.Go_Rent_App.repository;

import com.semicolon.africa.Go_Rent_App.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
