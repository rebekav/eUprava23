package com.ftn.backend.repository;

import com.ftn.backend.model.Gradjanin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradjaninRepository extends JpaRepository<Gradjanin, Long> {
    Gradjanin findByJmbg(String jmbg);
}
