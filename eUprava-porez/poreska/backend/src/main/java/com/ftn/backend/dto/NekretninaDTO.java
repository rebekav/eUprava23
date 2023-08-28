package com.ftn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NekretninaDTO {
    private String grad;
    private String adresa;
    private String tip;
    private Integer kvadratura;
    private Long idGradjanin;
}
