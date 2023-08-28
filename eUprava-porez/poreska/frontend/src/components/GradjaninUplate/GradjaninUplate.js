import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import poreskaService from "../../services/api/poreska-service";
import Input from "../util/Input/Input";

const dateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const GradjaninUplate = () => {
  const [uplate, setUplate] = useState([]);
  const [jmbg, setJmbg] = useState([]);

  useEffect(() => {
    if (jmbg && jmbg.length > 3) {
      poreskaService.getUplateZaGradjanePoJMBG(jmbg).then((data) => {
        setUplate(data);
      });
    }
  }, [jmbg]);

  return (
    <>
      <Input type="text" title="JMBG" setValue={setJmbg} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vreme uplate</th>
            <th>Iznos(RSD)</th>
            <th>Tip nekretnine</th>
            <th>Kvadratura</th>
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
                <td>{`${uplata.nekretnina.grad} ${uplata.nekretnina.adresa}`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GradjaninUplate;
