package com.ftn.backend.repository;

import com.ftn.backend.model.Uplata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UplataRepository extends JpaRepository<Uplata, Long> {
    @Query("SELECT u FROM Uplata u ORDER BY u.vremeUplate DESC")
    List<Uplata> findAllOrderByVremeUplateDesc();

    @Query("SELECT u FROM Uplata u WHERE u.gradjanin.jmbg = ?1 ORDER BY u.vremeUplate DESC")
    List<Uplata> findAllByGradjaninJmbgOrderByVremeUplateDDesc(String jmbg);
}
