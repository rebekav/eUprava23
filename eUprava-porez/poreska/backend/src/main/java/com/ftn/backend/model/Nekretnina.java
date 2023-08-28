package com.ftn.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = "nekretnina")
public class Nekretnina {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "identifikator", nullable = true)
    private String identifikator;

    @Column(name = "grad", nullable = true)
    private String grad;

    @Column(name = "adresa", nullable = true)
    private String adresa;

    @Column(name = "tip", nullable = true)
    private String tip;

    @Column(name = "kvadratura", nullable = true)
    private Integer kvadratura;

    @Column(name = "procenjena_vrednost", nullable = true)
    private Integer procenjenaVrednost;

    @Column(name = "godisnji_porez", nullable = true)
    private Integer godisnjiPorez;

    @Column(name = "vreme_kupoprodaje", nullable = false)
    private Date vremeKupoprodaje;

    @ManyToOne
    private Gradjanin gradjanin;

    @JsonIgnore
    @OneToMany(mappedBy= "nekretnina", fetch = FetchType.LAZY)
    private Set<Uplata> uplate;
}
