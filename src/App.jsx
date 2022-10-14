import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioClima from "./components/FormularioClima";
import "./style.css"

function App() {
  return (
    <Container className="mt-4">
      <div className="text-center text-white">
        <h1 className="display-4">Pronostico actualizado del clima</h1>
        <hr />
      </div>
      <FormularioClima></FormularioClima>
    </Container>
  );
}

export default App;
