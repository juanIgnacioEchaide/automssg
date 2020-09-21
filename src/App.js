import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

function App() {

  const[datosCliente, setDatosCliente]=useState({
    nombre:'',
    dia:'',
    hora:''
  });

  const handleChange=(event)=>{
    setDatosCliente({
      ...datosCliente,
     [ event.target.name]:event.target.value
    })
    console.log(datosCliente);
  }

  const[parrafo, setParrafo]=useState({
    parrafo:''
  });

  const funcion=(event)=>{
    setParrafo({
      
      parrafo:event.target.innerText
    });
    console.log(parrafo)
  }

  const[value,setValue]=useState('');
  

  return (
    <div className="App">
      <Form>
      <Form.Group>
        <Form.Label>Cliente</Form.Label>
        <Form.Control  name="nombre" type="text" placeholder="Enter email" onChange={handleChange}/>
        <Form.Label>Día Turno</Form.Label>
        <Form.Control  name="dia" type="text"  placeholder="Enter email" onChange={handleChange}/>
        <Form.Label>Hora Turno</Form.Label>
        <Form.Control name="hora" type="text"  placeholder="Enter email" onChange={handleChange}/> 
      </Form.Group>
    </Form>

      <div id="parrafo" name="parrafo" value={parrafo} onClick={funcion}>
        <p > 
          Estimado {datosCliente.nombre}:
          Tiene agendado un turno para el día {datosCliente.dia} a las {datosCliente.hora} hs,
           en la Sucursal ICBC-Flores. ¿Es correcto?
        </p>
        <CopyToClipboard text={parrafo} >
        <Button variant="Success" type="success" >
          Copy
        </Button>
      </CopyToClipboard>
      </div> 
    </div>
  );
}

export default App;
