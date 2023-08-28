import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import poreskaService from "../../../services/api/poreska-service";
import Select from "../../util/Select/Select";
import Input from "../../util/Input/Input";
import { Button } from "react-bootstrap";

const UplateForm = () => {
  const history = useHistory();
  const [gradjani, setGradjani] = useState([]);
  const [nekretnine, setNekretnine] = useState([]);
  const [uplata, setUplata] = useState({
    idGradjanin: 0,
    idNekretnina: 0,
    iznos: 0,
  });

  useEffect(() => {
    poreskaService.getNekretnine().then((data) => {
      console.log(data);
      data.unshift({
        id: 0,
        identifikator: "select",
        grad: "",
        adresa: "",
        tip: "",
      });
      setNekretnine(data);
    });
    poreskaService.getGradjani().then((data) => {
      console.log(data);
      data.unshift({ id: 0, ime: "select", prezime: "", jmbg: "" });
      setGradjani(data);
    });
  }, []);

  const changeNekretninaHandler = (value) => {
    setUplata((prevState) => ({
      ...prevState,
      idNekretnina: value,
    }));
  };

  const changeGradjaninHandler = (value) => {
    setUplata((prevState) => ({
      ...prevState,
      idGradjanin: value,
    }));
  };

  const changeIznosHandler = (value) => {
    setUplata((prevState) => ({
      ...prevState,
      iznos: value,
    }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(uplata);
    poreskaService.createUplata(uplata).then((data) => {
      history.push(`/uplate/${data}`);
    });
  };

  const optionsGradjani = gradjani.map((g) => ({
    value: g.id,
    name: `${g.ime} ${g.prezime} ${g.jmbg}`,
  }));

  const optionsNekretnine = nekretnine.map((n) => ({
    value: n.id,
    name: `${n.identifikator} ${n.grad} ${n.adresa} ${n.tip}`,
  }));

  return (
    <form className="w-50 mx-auto">
      <div>
        <h3>Podaci o uplatama</h3>

        <Select
          title="Gradjanin"
          value={uplata.idGradjanin}
          setValue={changeGradjaninHandler}
          options={optionsGradjani}
        />
        <Select
          title="Nekretnina"
          value={uplata.idNekretnina}
          setValue={changeNekretninaHandler}
          options={optionsNekretnine}
        />
        <Input
          type="number"
          title="Iznos"
          value={uplata.iznos}
          setValue={changeIznosHandler}
        />
      </div>

      <div className="w-100 d-flex justify-content-end my-3">
        <Button type="submit" variant="primary" onClick={submitFormHandler}>
          Zabelezi uplatu
        </Button>
      </div>
    </form>
  );
};

export default UplateForm;
