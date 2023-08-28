import StandardLayout from "../layouts/StandardLayout";
import Nekretnine from "../components/Nekretnine/Nekretnine";

const NekretninePage = () => {
  return (
    <StandardLayout title="Nekretnine" fluid>
      <Nekretnine />
    </StandardLayout>
  );
};

export default NekretninePage;
