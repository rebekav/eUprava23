import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import poreskaService from "../../../services/api/poreska-service";
import Input from "../../util/Input/Input";
import Select from "../../util/Select/Select";
import { Button } from "react-bootstrap";

const NekretnineForm = () => {
  const history = useHistory();
  const [gradjani, setGradjani] = useState([]);
  const [tipovi, setTipovi] = useState([
    "KUCA",
    "STAN",
    "GARAZA",
    "LOKAL",
    "ZEMLJLISTE",
  ]);
  const [nekretnina, setNekretnina] = useState({
    grad: "",
    adresa: "",
    tip: "",
    kvadratura: "",
    idGradjanin: 0,
  });

  useEffect(() => {
    poreskaService.getGradjani().then((data) => {
      data.unshift({ id: 0, ime: "select", prezime: "", jmbg: "" });
      setGradjani(data);
    });
  }, []);

  const changeGradHandler = (value) => {
    setNekretnina((prevState) => ({
      ...prevState,
      grad: value.toUpperCase(),
    }));
  };

  const changeAdresaHandler = (value) => {
    setNekretnina((prevState) => ({
      ...prevState,
      adresa: value,
    }));
  };

  const changeKvadraturaHandler = (value) => {
    setNekretnina((prevState) => ({
      ...prevState,
      kvadratura: value,
    }));
  };

  const changeGradjaninHandler = (value) => {
    setNekretnina((prevState) => ({
      ...prevState,
      idGradjanin: value,
    }));
  };

  const changeTipHandler = (value) => {
    setNekretnina((prevState) => ({
      ...prevState,
      tip: value,
    }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(nekretnina);
    poreskaService.createNekretnina(nekretnina).then(() => {
      history.push(`/nekretnine`);
    });
  };

  const optionsGradjani = gradjani.map((g) => ({
    value: g.id,
    name: `${g.ime} ${g.prezime} ${g.jmbg}`,
  }));

  const optionsTipovi = tipovi.map((t) => ({
    value: t,
    name: t,
  }));

  return (
    <form className="w-50 mx-auto">
      <div>
        <h3>Informacije o nekretnini</h3>
        <Input
          type="text"
          title="Grad"
          value={nekretnina.grad}
          setValue={changeGradHandler}
        />
        <Input
          type="text"
          title="Adresa"
          value={nekretnina.adresa}
          setValue={changeAdresaHandler}
        />
        <Input
          type="number"
          title="Kvadratura"
          value={nekretnina.kvadratura}
          setValue={changeKvadraturaHandler}
        />
        <Select
          title="Gradjanin"
          value={nekretnina.idGradjanin}
          setValue={changeGradjaninHandler}
          options={optionsGradjani}
        />
        <Select
          title="Tip"
          value={nekretnina.tip}
          setValue={changeTipHandler}
          options={optionsTipovi}
        />
      </div>

      <div className="w-100 d-flex justify-content-end my-3">
        <Button type="submit" variant="primary" onClick={submitFormHandler}>
          Kreiraj nekretninu
        </Button>
      </div>
    </form>
  );
};

export default NekretnineForm;
