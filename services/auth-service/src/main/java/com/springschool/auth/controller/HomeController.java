package com.springschool.auth.controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

  @GetMapping("/welcome")
  public Map<String, String> getWelcomeMessage() {
    return Map.of(
        "title", "Spring School",
        "message", "Welcome to Spring School!",
        "description", "Learning Spring Boot with React",
        "bio", "This is Amr's Spring school"

    );
  }
}
