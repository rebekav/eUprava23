package com.ftn.backend.service.implementation;

import com.ftn.backend.dto.GradjaninDTO;
import com.ftn.backend.dto.NekretninaDTO;
import com.ftn.backend.dto.ProcenaResponseDTO;
import com.ftn.backend.dto.UplataDTO;
import com.ftn.backend.model.Gradjanin;
import com.ftn.backend.model.Nekretnina;
import com.ftn.backend.model.Uplata;
import com.ftn.backend.repository.GradjaninRepository;
import com.ftn.backend.repository.NekretninaRepository;
import com.ftn.backend.repository.UplataRepository;
import com.ftn.backend.service.PoreskaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class PoreskaServiceImpl implements PoreskaService {

    private static final int KOEFICIENT_ZA_POREZ = 1000;
    private static final int KURS_EVRA = 117;

    @Autowired
    GradjaninRepository gradjaninRepository;

    @Autowired
    NekretninaRepository nekretninaRepository;

    @Autowired
    UplataRepository uplataRepository;

    @Override
    public void kreirajUplatu(UplataDTO uplataDTO) {
        Uplata u = new Uplata();
        u.setNekretnina(nekretninaRepository.getById(uplataDTO.getIdNekretnina()));
        Gradjanin g = gradjaninRepository.getById(uplataDTO.getIdGradjanin());
        u.setGradjanin(g);
        u.setIznos(uplataDTO.getIznos());
        u.setVremeUplate(new Date());

        uplataRepository.save(u);
    }

    @Override
    public void kreirajNekretninu(NekretninaDTO nekretninaDTO) {
        Nekretnina n = new Nekretnina();
        n.setGrad(nekretninaDTO.getGrad());
        n.setAdresa(nekretninaDTO.getAdresa());
        n.setKvadratura(nekretninaDTO.getKvadratura());
        n.setTip(nekretninaDTO.getTip());
        n.setVremeKupoprodaje(new Date());
        n.setIdentifikator(String.valueOf(new Date().getTime()));
        Gradjanin g = gradjaninRepository.getById(nekretninaDTO.getIdGradjanin());
        n.setGradjanin(g);
        n.setProcenjenaVrednost(dobaviVrednostOdProcenitelja(nekretninaDTO));
        n.setGodisnjiPorez(Math.round((float) n.getProcenjenaVrednost() / KOEFICIENT_ZA_POREZ) * KURS_EVRA);
        nekretninaRepository.save(n);
    }

    @Override
    public void kreirajGradjanina(GradjaninDTO gradjaninDTO) {
        Gradjanin o = new Gradjanin();
        o.setIme(gradjaninDTO.getIme());
        o.setPrezime(gradjaninDTO.getPrezime());
        o.setJmbg(gradjaninDTO.getJmbg());
        o.setDatumRodjenja(gradjaninDTO.getDatumRodjenja());
        gradjaninRepository.save(o);
    }


    private Integer dobaviVrednostOdProcenitelja(NekretninaDTO dto) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<ProcenaResponseDTO> response = template.getForEntity("http://procenitelj-backend:8002/api/procenitelj/proceni?grad=" + dto.getGrad() + "&tipNekretnine=" + dto.getTip() + "&kvadratura=" + dto.getKvadratura(), ProcenaResponseDTO.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return response.getBody().getResponse();
        }
        return 0;
    }

    @Override
    public List<Uplata> uplate(String jmbg) {
        if (jmbg == null) {
            return uplataRepository.findAllOrderByVremeUplateDesc();
        }
        return uplataRepository.findAllByGradjaninJmbgOrderByVremeUplateDDesc(jmbg);
    }

    /**
     * Metoda vraca true ukoliko je nad nekretninom placen sav porez ili ukoliko nekretnine nema u sistemu (nema dugovannja)
     *
     * @param identifikator identifikator za proveru
     * @return true u slucaju da je dozvoljena kupoprodaja
     */
    @Override
    public boolean provera(String identifikator) {
        Nekretnina n = nekretninaRepository.findByIdentifikator(identifikator);
        if (n == null) {
            return true;
        }

        Date vremeKupoprodaje = n.getVremeKupoprodaje();
        int godinaKupoprodaje = vremeKupoprodaje.getYear();
        int trenutnaGodina = new Date().getYear();

        int ukupanDug = 0;
        for(int i = godinaKupoprodaje; i<=trenutnaGodina; i++){
            ukupanDug += n.getGodisnjiPorez();
        }

        int ukupnoUplaceno = 0;
        for(Uplata u : n.getUplate()){
            ukupnoUplaceno += u.getIznos();
        }

        return ukupnoUplaceno>=ukupanDug;
    }

    @Override
    public List<Gradjanin> gradjani() {
        return gradjaninRepository.findAll();
    }

    @Override
    public List<Nekretnina> nekretnine() {
        return nekretninaRepository.findAll();
    }
}
