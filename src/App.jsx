import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import FormularioClima from "./components/FormularioClima";
import "./style.css"

function App() {
  return (
    <section>
    <Container >
    <FormularioClima></FormularioClima>
    </Container>
    <Footer></Footer>
    </section>
  );
}
export default App;
