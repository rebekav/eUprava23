package com.ftn.backend.controller;

import com.ftn.backend.dto.ProcenaResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/procenitelj")
public class ProceniteljController {
    private static final Integer PROSECNA_VREDNOST_KVADRATA_STAN = 1300;
    private static final Integer PROSECNA_VREDNOST_KVADRATA_KUCA = 900;
    private static final String TIP_NEKRETNINE_KUCA = "KUCA";
    private static final String TIP_NEKRETNINE_STAN = "STAN";
    private static final String GRAD_NOVI_SAD = "NOVI SAD";
    private static final String GRAD_BEOGRAD = "BEOGRAD";


    @GetMapping(value = "proceni")
    public ResponseEntity<?> proceni(@RequestParam String grad, @RequestParam String tipNekretnine, @RequestParam Integer kvadratura){
        Integer procena = kvadratura;
        if(tipNekretnine.equals(TIP_NEKRETNINE_KUCA)){
            procena*=PROSECNA_VREDNOST_KVADRATA_KUCA;
        }else if(tipNekretnine.equals(TIP_NEKRETNINE_STAN)){
            procena*=PROSECNA_VREDNOST_KVADRATA_STAN;
        }
        if(grad.equals(GRAD_BEOGRAD)){
            procena+=(kvadratura*(PROSECNA_VREDNOST_KVADRATA_STAN/2));
        } else if (grad.equals(GRAD_NOVI_SAD)) {
            procena+=(kvadratura*(PROSECNA_VREDNOST_KVADRATA_STAN/3));
        }
        return ResponseEntity.ok(new ProcenaResponseDTO(procena));
    }

}
