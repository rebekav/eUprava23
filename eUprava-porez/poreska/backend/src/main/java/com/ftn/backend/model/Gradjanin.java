package com.ftn.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = "gradjanin")
public class Gradjanin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ime", nullable = true)
    private String ime;

    @Column(name = "prezime", nullable = true)
    private String prezime;

    @Column(name = "jmbg", nullable = false)
    private String jmbg;

    @Column(name = "datum_rodjenja", nullable = false)
    private String datumRodjenja;

    @JsonIgnore
    @OneToMany(mappedBy= "gradjanin", fetch = FetchType.LAZY)
    private Set<Uplata> uplate;

    @JsonIgnore
    @OneToMany(mappedBy= "gradjanin", fetch = FetchType.LAZY)
    private Set<Nekretnina> nekretnine;
}
