package com.example.AgriTechLogin.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<com.example.AgriTechLogin.model.User, Long> {
    Optional<com.example.AgriTechLogin.model.User> findByEmail(String email);
    boolean existsByEmail(String email);
}
