import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CustomizedMessage =(props)=>{

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
    
      const handleParrafo=(event)=>{
        setParrafo({  
          parrafo:event.target.innerText
        });
    
      }
    
    const[value,setValue]=useState('');
    const[copied,setCopied]=useState(false);

    const handleCopy=(event)=>{
        handleParrafo(event);
        setValue(
        event.target.value
        )
        console.log(parrafo)
    }     
        return (
          <div style={{witdh:'20vw'}}>
              <div>
             </div>   
            <Form className={"p-4 row m-4"} >
              <Form.Label >Cliente</Form.Label>
              <Form.Control  name="nombre" type="text" placeholder="Cliente" onChange={handleChange}/>
              <Form.Label>Día Turno</Form.Label>
              <Form.Control  name="dia" type="text"  placeholder="Día Turno" onChange={handleChange}/>
              <Form.Label>Hora Turno</Form.Label>
              <Form.Control name="hora" type="text"  placeholder="Hora Turno" onChange={handleChange}/>     
          </Form>
            <div className={"row p-3 justify-content-center bg-light m-5 rounded"}>
              <div id="parrafo" name="parrafo" value={parrafo} onClick={handleCopy} >
              <p className={"pt-3"} > 
                  Estimado <strong>{datosCliente.nombre}</strong>:
                  Tiene agendado un turno para el día <strong>{datosCliente.dia}</strong> a las <strong>{datosCliente.hora}</strong> hs,
                  en la Sucursal ICBC-Flores. ¿Es correcto?
                </p>
                </div> 
                <CopyToClipboard text={parrafo.parrafo} onCopy={()=>setCopied(true)}>
                <Button className={"btn btn-success ml-3"} type="success">
                  Copy
                </Button>
              </CopyToClipboard>  
            </div>     
          </div>         
    )
}
export default CustomizedMessage;