import StandardLayout from "../layouts/StandardLayout";
import GradjaninUplate from "../components/GradjaninUplate/GradjaninUplate";

const GradjaniUplatePage = () => {
  return (
    <StandardLayout title="Uplate za gradjane (javni servis)" fluid>
      <img
        style={{ margin: "auto", width: "200px", display: "block" }}
        src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/group-people.png"
      ></img>
      <GradjaninUplate />
    </StandardLayout>
  );
};

export default GradjaniUplatePage;
