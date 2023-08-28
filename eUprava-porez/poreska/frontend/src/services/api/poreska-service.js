import axios from "axios";

const createUplata = (uplata) => {
  return axios
    .post("/poreska/uplata", uplata)
    .then((response) => response.data);
};

const createNekretnina = (nekretnina) => {
  return axios
    .post("/poreska/nekretnina", nekretnina)
    .then((response) => response.data);
};

const createGradjanin = (gradjanin) => {
  return axios
    .post("/poreska/gradjanin", gradjanin)
    .then((response) => response.data);
};

const getUplate = () => {
  return axios.get("/poreska/uplate").then((response) => response.data);
};

const getUplateZaJMBG = (jmbg) => {
  return axios
    .get(`/poreska/uplate?jmbg=${jmbg}`)
    .then((response) => response.data);
};

const getUplateZaGradjanePoJMBG = (jmbg) => {
  return axios
    .get(`/gradjanin/uplate?jmbg=${jmbg}`)
    .then((response) => response.data);
};

const getNekretnine = () => {
  return axios.get("/poreska/nekretnine").then((response) => response.data);
};

const getGradjani = () => {
  return axios.get("/poreska/gradjani").then((response) => response.data);
};

const poreskaService = {
  getUplate,
  getNekretnine,
  getGradjani,
  getUplateZaJMBG,
  createUplata,
  createNekretnina,
  createGradjanin,
  getUplateZaGradjanePoJMBG,
};

export default poreskaService;
