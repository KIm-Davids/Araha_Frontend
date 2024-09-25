package com.semicolon.africa.arahasubcriptionapp.data.repositories;

import com.semicolon.africa.arahasubcriptionapp.data.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
