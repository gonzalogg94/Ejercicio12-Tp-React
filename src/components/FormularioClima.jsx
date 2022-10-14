
import { Form,Button } from 'react-bootstrap';
import { useState } from "react";

const FormularioClima = () => {
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [clima, setClima] = useState([]);
    const [temperatura, setTemperatura] = useState({});
    const [ciudadAPI, setCiudadAPI] = useState("");
    const [sys, setSys] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
          consultarAPI();
          setCiudad("");
          setPais("");
        }
      };
      const consultarAPI = async () => {
        try {
          setMostrarSpinner(true);
          const respuesta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=2511950e4086ed855e87f2fcfc4f809c`
          );
          const dato = await respuesta.json();
          if (respuesta.status === 200) {
            console.log(dato.weather);
            setCiudadAPI(dato.name);
            setSys(dato.sys);
            setClima(dato.weather);
            setTemperatura(dato.main);
            setMostrarSpinner(false);
          } else {
            alert("ubicacion no encontrada");
            setMostrarSpinner(false);
          }
        } catch (error) {
          setMostrarSpinner(false);
          console.log("ocurrio un error en la consulta");
        }
      };

    return (
        <Form className='card p-4 text-bg-dark my-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pais</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Enviar
      </Button>
    </Form>
    );
};

export default FormularioClima;