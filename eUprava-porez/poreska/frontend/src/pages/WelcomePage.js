import StandardLayout from "../layouts/StandardLayout";
import { Button } from "react-bootstrap";

const WelcomePage = () => {
  return (
    <StandardLayout>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "60vh" }}
      >
        <img
          style={{ margin: "auto", width: "200px", display: "block" }}
          src="https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/group-people.png"
        ></img>
        <h1 className="display-3">PORESKA UPRAVA!</h1>

        <Button
          variant="primary"
          size="lg"
          style={{ width: "100%" }}
          href="http://localhost:4101/auth/login?successUrl=http://localhost:9001/auth"
        >
          PRIJAVA NA SISTEM
        </Button>
      </div>
    </StandardLayout>
  );
};

export default WelcomePage;
