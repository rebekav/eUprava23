package com.ftn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GradjaninDTO {
    private String ime;
    private String prezime;
    private String jmbg;
    private String datumRodjenja;
}
