import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Form} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const CustomizedMessage =(props)=>{

  const options=[
    
  ]
    const[datosCliente, setDatosCliente]=useState({
        nombre:'',
        dia:'',
        hora:'',
        monto:''
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

    const [selectedOption, setSelectedOption] = useState({value:options.value});

    const handleSelection=(e)=>{
      setSelectedOption({
        ...options.value,
        value:e.target.value});
      console.log(selectedOption);
    }
        return (
          <div style={{witdh:'20vw'}}>
          
            <Form className={"p-4 row m-4 bg-light rounded"} >
              <div className={"row pl-2  ml-2"}>
                <Form.Label >Cliente</Form.Label>
                <Form.Control name="nombre" type="text" placeholder="Cliente" onChange={handleChange}/>
              </div>
             <div className={"row  pl-2 ml-2"}>
               <Form.Label>Día Turno</Form.Label>
              <Form.Control  name="dia" type="text"  placeholder="Día Turno" onChange={handleChange}/>
             </div>
              <div className={"row pl-2  ml-2"}>
                <Form.Label>Hora Turno</Form.Label>
                <Form.Control name="hora" type="text"  placeholder="Hora Turno" onChange={handleChange}/>     
              </div>
              <div className={"row pl-2  ml-2"}>
                <Form.Label>Monto</Form.Label>
                <Form.Control name="hora" type="text"  placeholder="Monto" onChange={handleChange}/>     
              </div>
              </Form>
          <div className={"bg-primary text-white m-4 rounded p-4 row"}>
            <Navbar.Brand>Trámite</Navbar.Brand>
              <Form.Control as="select" 
                value={selectedOption}
                style={{width:'50%'}}
                onChange={handleSelection}
                className={"ml-4 mt-1"}
                display={selectedOption}
                >
                {options.map(o => (
                  <option className={"p-4 m-4"}value={o.value}>{o.label}</option>
                ))}
              </Form.Control>
          </div>
   
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