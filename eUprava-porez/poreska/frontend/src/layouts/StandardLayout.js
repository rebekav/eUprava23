import Navbar from "../components/Navigation/Navigation";
import { Container } from "react-bootstrap";

const StandardLayout = (props) => (
  <>
    <Navbar navLinks={props.navLinks} />
    <Container fluid={props.fluid} className={props.fluid && "w-95 mx-auto"}>
      <main style={{ marginBottom: "8rem" }}>
        {props.title && <h1 className="text-center my-5">{props.title}</h1>}
        {props.children}
      </main>
    </Container>
  </>
);

export default StandardLayout;
