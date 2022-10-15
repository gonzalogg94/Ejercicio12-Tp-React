import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import FormularioClima from "./components/FormularioClima";
import "./style.css"

function App() {
  return (
    <section>
    <Container>
      <div className="text-center text-white">
        <h1 className="display-4">Pronostico actualizado del clima</h1>
        <hr />
      </div>
      <FormularioClima></FormularioClima>
    </Container>
    <Footer></Footer>
    </section>
  );
}

export default App;
