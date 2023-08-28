package com.ftn.backend.service;

import com.ftn.backend.dto.GradjaninDTO;
import com.ftn.backend.dto.NekretninaDTO;
import com.ftn.backend.dto.UplataDTO;
import com.ftn.backend.model.Gradjanin;
import com.ftn.backend.model.Nekretnina;
import com.ftn.backend.model.Uplata;

import java.util.List;

public interface PoreskaService {
    void kreirajUplatu(UplataDTO uplataDTO);

    void kreirajNekretninu(NekretninaDTO nekretninaDTO);

    void kreirajGradjanina(GradjaninDTO gradjaninDTO);

    List<Uplata> uplate(String jmbg);

    boolean provera(String identifikator);

    List<Gradjanin> gradjani();

    List<Nekretnina> nekretnine();
}
