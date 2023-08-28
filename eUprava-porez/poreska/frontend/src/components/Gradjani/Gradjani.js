import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import poreskaService from "../../services/api/poreska-service";

const Gradjani = () => {
  const history = useHistory();
  const [gradjani, setGradjani] = useState([]);

  useEffect(() => {
    poreskaService.getGradjani().then((data) => {
      setGradjani(data);
    });
  }, []);

  const goToFormHandler = () => {
    history.push(`/gradjani/form`);
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-end my-3">
        <Button variant="primary" onClick={goToFormHandler}>
          Kreiraj gradjanina u sistemu
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ime</th>
            <th>Prezime</th>
            <th>JMBG</th>
            <th>Datum rodjenja</th>
          </tr>
        </thead>

        <tbody>
          {gradjani.map((gradjanin) => {
            return (
              <tr key={gradjanin.id} className="pointer">
                <td>{gradjanin.id}</td>
                <td>{gradjanin.ime}</td>
                <td>{gradjanin.prezime}</td>
                <td>{gradjanin.jmbg}</td>
                <td>{gradjanin.datumRodjenja}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Gradjani;
