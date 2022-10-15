
import { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

const FormularioClima = () => {
  const [ciudad,setCiudad]=useState('');
  const [pais,setPais]=useState('');
  const [clima,setClima]=useState([]);
  const [temperatura,setTemperatura]=useState([]);
  const [ciudad,setCiudad]=useState('');
  const [sys,setSys]=useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
      consultarAPI();
      setCiudad("");
      setPais("");
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