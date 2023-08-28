package com.ftn.backend.controller;

import com.ftn.backend.dto.GradjaninDTO;
import com.ftn.backend.dto.NekretninaDTO;
import com.ftn.backend.dto.UplataDTO;
import com.ftn.backend.model.Gradjanin;
import com.ftn.backend.model.Nekretnina;
import com.ftn.backend.model.Uplata;
import com.ftn.backend.service.PoreskaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/poreska")
public class PoreskaController {

    @Autowired
    private PoreskaService poreskaService;
    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @PostMapping(value = "uplata")
    public ResponseEntity<?> uplata(@RequestBody UplataDTO uplataDTO){
        poreskaService.kreirajUplatu(uplataDTO);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @PostMapping(value = "nekretnina")
    public ResponseEntity<?> nekretnina(@RequestBody NekretninaDTO nekretninaDTO){
        poreskaService.kreirajNekretninu(nekretninaDTO);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @PostMapping(value = "gradjanin")
    public ResponseEntity<?> gradjanin(@RequestBody GradjaninDTO gradjaninDTO) {
        poreskaService.kreirajGradjanina(gradjaninDTO);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @GetMapping(value = "uplate")
    public ResponseEntity<?> uplate(@RequestParam(required = false) String jmbg){
        List<Uplata> list =  poreskaService.uplate(jmbg);
        return ResponseEntity.ok(list);
    }

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @GetMapping(value = "gradjani")
    public ResponseEntity<?> gradjani(){
        List<Gradjanin> gradjani =  poreskaService.gradjani();
        return ResponseEntity.ok(gradjani);
    }

    @PreAuthorize("hasRole('ROLE_PORESKI_RADNIK')")
    @GetMapping(value = "nekretnine")
    public ResponseEntity<?> nekretnine(){
        List<Nekretnina> nekretnine =  poreskaService.nekretnine();
        return ResponseEntity.ok(nekretnine);
    }
}
