//package com.example.AgriTechLogin.Security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                // 🔒 Disable CSRF for development & APIs
//                .csrf(csrf -> csrf.disable())
//
//                // 🚀 Allow all requests to /api/**
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/api/**").permitAll()  // ✅ allow all API endpoints
//                        .anyRequest().permitAll()                // allow everything else
//                )
//
//                // 🧩 Disable login form and basic auth
//                .formLogin(form -> form.disable())
//                .httpBasic(basic -> basic.disable())
//                .logout(logout -> logout.disable())
//
//                // 🔐 Disable session creation for stateless API (optional but good)
//                .sessionManagement(session -> session.disable());
//
//        return http.build();
//    }
//}

package com.example.AgriTechLogin.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").permitAll()
                        .anyRequest().permitAll()
                )
                .formLogin(form -> form.disable())
                .httpBasic(basic -> basic.disable());
        // ⚠️ Remove session.disable() for now
        return http.build();
    }
}

