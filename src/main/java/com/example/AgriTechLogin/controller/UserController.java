package com.example.AgriTechLogin.controller;

import com.example.AgriTechLogin.dto.LoginDto;
import com.example.AgriTechLogin.model.User;
import com.example.AgriTechLogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api") // ✅ Base path for all endpoints
@CrossOrigin(origins = "http://localhost:3000") // ✅ Allow frontend (React) to access
public class UserController {

    @Autowired
    private UserService userService;

    // 🔹 Register a new user
    @PostMapping("/addUser")
    public String register(@RequestBody User user) {
        String result = userService.registerUser(user);
        if (result == null || result.isEmpty()) {
            return "❌ User Not Registered.";
        } else {
            return "✅ User Registered Successfully!";
        }
    }

    // 🔹 Login existing user
    @PostMapping("/loginUser")
    public String loginUser(@RequestBody LoginDto loginDto) {
        String result = userService.loginUser(loginDto.getEmail(), loginDto.getPassword());
        if (result != null && !result.isEmpty()) {
            return "✅ Login Successful!";
        } else {
            return "❌ Login Failed. Invalid credentials.";
        }
    }

    // 🔹 Simple test endpoint
    @GetMapping("/test")
    public String testEndpoint() {
        return "🚀 Backend is running perfectly!";
    }
}
