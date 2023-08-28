import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import poreskaService from "../../services/api/poreska-service";
import Input from "../util/Input/Input";

const dateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Uplate = () => {
  const history = useHistory();
  const [uplate, setUplate] = useState([]);
  const [jmbg, setJmbg] = useState([]);

  useEffect(() => {
    if (jmbg && jmbg.length > 3) {
      poreskaService.getUplateZaJMBG(jmbg).then((data) => {
        setUplate(data);
      });
    } else {
      poreskaService.getUplate().then((data) => {
        setUplate(data);
      });
    }
  }, [jmbg]);

  const goToFormHandler = () => {
    history.push(`/uplate/form`);
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-end my-3">
        <Button variant="primary" onClick={goToFormHandler}>
          Zabelezi uplatu
        </Button>
      </div>
      <Input type="text" title="JMBG" setValue={setJmbg} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vreme uplate</th>
            <th>Iznos(RSD)</th>
            <th>Tip nekretnine</th>
            <th>Kvadratura</th>
            <th>Godisnji porez</th>
            <th>Identifikator</th>
            <th>Adresa</th>
          </tr>
        </thead>

        <tbody>
          {uplate.map((uplata) => {
            const vremeUplate = new Date(uplata.vremeUplate);

            return (
              <tr key={uplata.id} className="pointer">
                <td>{uplata.id}</td>
                <td>{vremeUplate.toLocaleDateString("de-DE", dateOptions)}</td>

                <td>{uplata.iznos}</td>
                <td>{uplata.nekretnina.tip}</td>
                <td>{uplata.nekretnina.kvadratura}</td>
                <td>{uplata.nekretnina.godisnjiPorez}</td>
                <td>{uplata.nekretnina.identifikator}</td>
                <td>{`${uplata.nekretnina.grad} ${uplata.nekretnina.adresa}`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Uplate;
