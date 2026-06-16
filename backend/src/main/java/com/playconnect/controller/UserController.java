package com.playconnect.controller;

import com.playconnect.model.User;
import com.playconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {

    return userRepository.findByEmail(loginRequest.getEmail())
            .filter(user -> user.getPassword().equals(loginRequest.getPassword()))
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(401)
                    .body("Invalid email or password"));
}
}