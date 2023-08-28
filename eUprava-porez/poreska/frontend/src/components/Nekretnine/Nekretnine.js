import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import poreskaService from "../../services/api/poreska-service";

const Nekretnine = () => {
  const history = useHistory();
  const [nekretnine, setNekretnina] = useState([]);

  useEffect(() => {
    console.log("upada");
    poreskaService.getNekretnine().then((data) => {
      setNekretnina(data);
    });
  }, []);

  const goToFormHandler = () => {
    history.push(`/nekretnine/form`);
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-end my-3">
        <Button variant="primary" onClick={goToFormHandler}>
          Kreiraj nekretninu
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Identifikator</th>
            <th>Grad</th>
            <th>Adresa</th>
            <th>Tip</th>
            <th>Kvadraturaa</th>
            <th>Procenjena vrednost</th>
            <th>Godisnji porez</th>
            <th>Vreme kupoprodaje</th>
          </tr>
        </thead>

        <tbody>
          {nekretnine.map((nekretnina) => {
            return (
              <tr key={nekretnina.id} className="pointer">
                <td>{nekretnina.id}</td>
                <td>{nekretnina.identifikator}</td>
                <td>{nekretnina.grad}</td>
                <td>{nekretnina.adresa}</td>
                <td>{nekretnina.tip}</td>
                <td>{nekretnina.kvadratura}</td>
                <td>{nekretnina.procenjenaVrednost}</td>
                <td>{nekretnina.godisnjiPorez}</td>
                <td>{nekretnina.vremeKupoprodaje}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Nekretnine;
