package com.ftn.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
@Table(name = "uplata")
public class Uplata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "vreme_uplate", nullable = false)
    private Date vremeUplate;

    @Column(name = "iznos", nullable = false)
    private Integer iznos;

    @ManyToOne
    private Gradjanin gradjanin;

    @ManyToOne
    private Nekretnina nekretnina;
}
