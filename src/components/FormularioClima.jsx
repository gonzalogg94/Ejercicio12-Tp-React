import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ItemClima from "./ItemClima";

const FormularioClima = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState([]);
  const [temperatura, setTemperatura] = useState([]);
  const [ciudadAPI, setCiudadAPI] = useState("");
  const [sys, setSys] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarAPI();
    setCiudad("");
    setPais("");
  };
  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=2511950e4086ed855e87f2fcfc4f809c&units=metric`
      );
      const dato = await respuesta.json();
      if (respuesta.status === 200) {
        console.log(dato.weather);
        setCiudadAPI(dato.name);
        setSys(dato.sys);
        setClima(dato.weather);
        setTemperatura(dato.main);
      } else {
        alert("ubicacion no encontrada");
      }
    } catch (error) {
      console.log("ocurrio un error en la consulta");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="card p-4 text-bg-dark my-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pais</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Argentina"
          onChange={(e) => setPais(e.target.value)}
          value={pais}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Yerba buena "
          onChange={(e) => setCiudad(e.target.value)}
          value={ciudad}
          required
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Obtener clima
      </Button>
      <ItemClima
        ciudadAPI={ciudadAPI}
        clima={clima}
        temperatura={temperatura}
        sys={sys}
      ></ItemClima>
    </Form>
  );
};

export default FormularioClima;
