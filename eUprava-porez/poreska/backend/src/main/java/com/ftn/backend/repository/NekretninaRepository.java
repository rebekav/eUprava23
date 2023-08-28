package com.ftn.backend.repository;

import com.ftn.backend.model.Nekretnina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NekretninaRepository extends JpaRepository<Nekretnina, Long> {
    Nekretnina findByIdentifikator(String identifikator);
}
