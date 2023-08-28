package com.ftn.backend.controller;

import com.ftn.backend.service.PoreskaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/transfuzija")
public class KatastarController {

    @Autowired
    private PoreskaService poreskaService;

    @PreAuthorize("hasRole('ROLE_KATASTAR')")
    @GetMapping(value = "provera")
    public ResponseEntity<?> provera(@RequestParam(required = false) String identifikator){
        boolean provera =  poreskaService.provera(identifikator);
        return ResponseEntity.ok(provera);
    }
}
