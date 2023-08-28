import NekretnineForm from "../components/Nekretnine/NekretnineForm/NekretnineForm";
import StandardLayout from "../layouts/StandardLayout";

const NekretnineFormPage = (props) => {
  return (
    <StandardLayout title="Kreiraj nekretninu">
      <NekretnineForm />
    </StandardLayout>
  );
};

export default NekretnineFormPage;
