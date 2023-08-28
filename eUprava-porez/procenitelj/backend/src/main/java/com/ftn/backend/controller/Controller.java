package com.ftn.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @GetMapping("/test")
    public ResponseEntity<String> testApi() {

        return ResponseEntity
                .ok()
                .body("SUCCESSFULLY SENT REQUEST AND RESPONSE! TEST TEST");
    }
}
