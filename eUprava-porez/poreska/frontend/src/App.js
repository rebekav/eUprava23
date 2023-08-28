import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Page from "./components/Page";
import Auth from "./components/Auth/Auth";
import WelcomePage from "./pages/WelcomePage";
import UplatePage from "./pages/UplatePage";
import GradjaniPage from "./pages/GradjaniPage";
import NekretninePage from "./pages/NekretninePage";
import NekretnineFormPage from "./pages/NekretnineFormPage";
import GradjaniFormPage from "./pages/GradjaniFormPage";
import UplateFormPage from "./pages/UplateFormPage";
import GradjaniUplatePage from "./pages/GradjaniUplatePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dobro-dosli" component={WelcomePage} />

        <Route path="/uplate/form" component={UplateFormPage} />
        <Route path="/uplate" component={UplatePage} />
        <Route path="/gradjani/form" component={GradjaniFormPage} />
        <Route path="/gradjani" component={GradjaniPage} />
        <Route path="/nekretnine/form" component={NekretnineFormPage} />
        <Route path="/nekretnine" component={NekretninePage} />
        <Route path="/gradjani-uplate" component={GradjaniUplatePage} />

        <Route path="/page" component={Page} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/dobro-dosli" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
