import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import poreskaService from "../../../services/api/poreska-service";
import Input from "../../util/Input/Input";
import { Button } from "react-bootstrap";

const GradjaniForm = () => {
  const history = useHistory();
  const [gradjanin, setGradjanin] = useState({
    ime: "",
    prezime: "",
    jmbg: "",
    datumRodjenja: "",
  });

  const changeImeHandler = (value) => {
    setGradjanin((prevState) => ({
      ...prevState,
      ime: value,
    }));
  };

  const changePrezimeHandler = (value) => {
    setGradjanin((prevState) => ({
      ...prevState,
      prezime: value,
    }));
  };

  const changeJmbgHandler = (value) => {
    setGradjanin((prevState) => ({
      ...prevState,
      jmbg: value,
    }));
  };

  const changeDatumRodjenjaHandler = (value) => {
    setGradjanin((prevState) => ({
      ...prevState,
      datumRodjenja: value,
    }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    poreskaService.createGradjanin(gradjanin).then(() => {
      history.push(`/gradjani`);
    });
  };

  return (
    <form className="w-50 mx-auto">
      <div>
        <h3>Gradjanin</h3>
        <Input
          type="text"
          title="Ime"
          value={gradjanin.ime}
          setValue={changeImeHandler}
        />
        <Input
          type="text"
          title="Prezime"
          value={gradjanin.prezime}
          setValue={changePrezimeHandler}
        />
        <Input
          type="text"
          title="JMBG"
          value={gradjanin.jmbg}
          setValue={changeJmbgHandler}
        />
        <Input
          type="date"
          title="Datum rodjenja"
          value={gradjanin.datumRodjenja}
          setValue={changeDatumRodjenjaHandler}
        />
      </div>

      <div className="w-100 d-flex justify-content-end my-3">
        <Button type="submit" variant="primary" onClick={submitFormHandler}>
          Kreiraj
        </Button>
      </div>
    </form>
  );
};

export default GradjaniForm;
