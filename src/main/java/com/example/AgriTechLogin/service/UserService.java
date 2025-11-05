package com.example.Agri.L.P.BE.service;
import com.example.Agri.L.P.BE.model.User;
import com.example.Agri.L.P.BE.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    //  Register user
    public String registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered!");
        }
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setProvider("local");
        userRepository.save(user);
        return "User registered successfully!";
    }

    //  Login user
    public String loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            throw new RuntimeException("User not found!");
        }
        User user = optionalUser.get();
        if(user.getPassword().equals(password))
        {
            return "User Login ...........";
        }else {
            return "User Not login.........";
        }
    }

}
