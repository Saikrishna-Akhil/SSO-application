package com.example.Agri.L.P.BE.controller;
import com.example.Agri.L.P.BE.dto.LoginDto;
import com.example.Agri.L.P.BE.model.User;
import com.example.Agri.L.P.BE.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.registerUser(user));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginData) {
        try {
            String token = userService.loginUser(loginData.getEmail(), loginData.getPassword());
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }
    @GetMapping("/success")
    public String getsuccess()
    {
        return "Welcome to my website";
    }
}
