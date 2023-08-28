package com.ftn.backend.controller;

import com.ftn.backend.model.Uplata;
import com.ftn.backend.service.PoreskaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/gradjanin")
public class GradjaninController {

    @Autowired
    private PoreskaService poreskaService;

    @PreAuthorize("hasRole('ROLE_GRADJANIN')")
    @GetMapping(value = "uplate")
    public ResponseEntity<?> uplate(@RequestParam String jmbg){
        List<Uplata> list =  poreskaService.uplate(jmbg);
        return ResponseEntity.ok(list);
    }
}
