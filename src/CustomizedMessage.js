import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Form} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {optionMessages} from '../src/data/optionMessages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CustomizedMessage =(props)=>{
  const options=optionMessages;

    const[value,setValue]=useState('');
    const[copied,setCopied]=useState(false);
    const [selectedOption, setSelectedOption] = useState({value:options.value});

    const[datosCliente, setDatosCliente]=useState({
          nombre:'',
          dia:'',
          hora:'',
          monto:''
        });  
    const[parrafo, setParrafo]=useState({
      parrafo:''
    });
    const [mode,setMode]=useState('template');
    
    const early_today =<p> {datosCliente.nombre} espero te encuentres bien. Mi nombre es Yveline Chen, 
    oficial exclusive del ICBC, sucursal Flores.
    Me han informado que tenes un turno para hoy {datosCliente.dia} a las {datosCliente.hora} en nuestra sucursal. ¿Es correcto?
    Le quería sacar unos minutos para comentarle que estamos facilitando los trámites presenciales en el banco durante la cuarentena, por los cuidados sanitarios necesarios y obligatorios.
    Por esta vía nunca vamos a pedirle datos personales ni de sus cuentas, y obviamente no todos los trámites se pueden realizar de manera no presencial, como ej. retiro de dólares, ingreso a caja de seguridad, etc. Quería confirmar si es alguno de estos el motivo de tu consulta.
    </p>
    const today_afternoon =<p>{datosCliente.nombre} espero te encuentres bien. Mi nombre es Yveline Chen, 
    oficial exclusive del ICBC, sucursal Flores.
    Me han informado que tenes un turno para hoy {datosCliente.dia} a las {datosCliente.hora} en nuestra sucursal. ¿Es correcto?
    Quiero comentarle que:
    1. Para facilitar a nuestros clientes sus trámites presenciales durante la cuarentena y seguir brindando nuestra mejor atención personalizada, con los cuidados sanitarios necesarios y obligatorios, *hemos simplificado muchos de nuestros tramites.* Me gustaría asesorarle al respecto.
    2. Nunca vamos a pedirle datos personales ni de sus cuentas, y aunque no todos los trámites se pueden realizar de manera no presencial (ej.: ingresar a caja de seguridad u operar por ventanilla), muchos otros hoy se pueden realizar a distancia *con ayuda de un oficial, y con la misma seguridad*. NINGÚN TURNO SE CANCELARÁ sin el consentimiento expreso del cliente.
    3. Tenga presente que un cajero automático de la suc. Flores fue renovado para poder extraer hasta 300 dólares por día. Es imprescindible para la extracción de la misma tener vinculada su cuenta en dólares a la Banelco, si necesita, puedo enviarle instrucciones. Por otro lado *no está permitido desde ventanilla* -por normativa vigente- operar en forma alguna en billetes montos menores a AR$150.000, y para montos mayores únicamente con autorización y reserva de fondos previa, así como operar por montos mayores a U$S2.000.
    *¿Le interesa ahorrarse la demora en sucursal?* Puedo asesorarlo ahora mismo. Gracias.
    </p>
    const pp_preacordado=<p>Buenas tardes {datosCliente.nombre} , Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores, estoy a cargo de sus cuentas. Me presento para que le quede agendado mi contacto por cualquier asesoramiento que requiera sobre sus productos.
    Le quiero comentar además una nueva propuesta que el banco habilitó para clientes Exclusive, se trata de una tasa especial para acceder un préstamo personal, que lo tiene preaprobado por AR${datosCliente.monto}. Por esta vía nunca le pediré datos personales ni de sus cuentas. Si le interesa la propuesta, le puedo pasar un simulador de cuotas.
    ¡Espero su consulta! Quedo a su disposición.
    </p>
    const tommorrow_morning=<p>
    Buenas tardes {datosCliente.nombre}, Mi nombre es Yveline Chen -yen.chen@icbc.com.ar-, Oficial Exclusive del ICBC, suc. Flores.
    Me comunico con Ud. porque tiene un turno asignado mañana {datosCliente.dia} a las {datosCliente.hora}. ¿Es correcto?
    Quiero comentarle que:
    1. Para facilitar a nuestros clientes sus trámites presenciales durante la cuarentena y seguir brindando nuestra mejor atención personalizada, con los cuidados sanitarios necesarios y obligatorios, *hemos simplificado muchos de nuestros tramites.* Me gustaría asesorarle al respecto.
    2. Nunca vamos a pedirle datos personales ni de sus cuentas, y aunque no todos los trámites se pueden realizar de manera no presencial (ej.: ingresar a caja de seguridad u operar por ventanilla), muchos otros hoy se pueden realizar a distancia *con ayuda de un oficial, y con la misma seguridad*. NINGÚN TURNO SE CANCELARÁ sin el consentimiento expreso del cliente.
    3. Tenga presente que un cajero automático de la suc. Flores fue renovado para poder extraer hasta 300 dólares por día. Es imprescindible para la extracción de la misma tener vinculada su cuenta en dólares a la Banelco, si necesita, puedo enviarle instrucciones. Por otro lado *no está permitido desde ventanilla* -por normativa vigente- operar en forma alguna en billetes montos menores a AR$150.000, y para montos mayores únicamente con autorización y reserva de fondos previa, así como operar por montos mayores a U$S2.000.
    *¿Le interesa ahorrarse la demora en sucursal?* Puedo asesorarlo ahora mismo. Gracias.
    </p>

   const customOptions=[
     {label:'turno esta mañana',value:early_today},
     {label:'turno esta tarde',value:today_afternoon},
     {label:'turno mañana',value:tommorrow_morning},
     {label:'pp preacordado',value:pp_preacordado},
    ];
   const[customizedOption, setCustomizedOption]=useState({value:customOptions.value})
  
  const handleChange=(event)=>{
    setDatosCliente({
      ...datosCliente,
      [ event.target.name]:event.target.value
    })
  }

  const handleParrafo=(event)=>{
    setParrafo({  
      parrafo:event.target.innerText
    });
  } 
  
  const handleCopy=(event)=>{
      handleParrafo(event);
      setValue(
      event.target.value
      )
  }     

  const handleSelection=(e)=>{
    setSelectedOption({
      ...options.value,
      value:e.target.value});
  }
console.log(customizedOption)
  const handleCustomizedSelection=(e)=>{
    setCustomizedOption({
      ...customOptions.value,
      value:e.customOptions.value});
    console.log(e.target.value);
  }
 
        return (
          <div style={{witdh:'20vw'}}>

          {/* user's inputs */}
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

          {/* mode toggle */}
              <div className={"p-4 row ml-4 mb-4 mr-4 mt-1 bg-light rounded"} >
              <ToggleButtonGroup  className={"bg-dark"}type="checkbox" value={[1, 2]} className="mb-2">
                <ToggleButton onClick={()=>setMode('template')}value={1}>Plantilla</ToggleButton>
                <ToggleButton onClick={()=>setMode('customized')} value={2}>Personalizado</ToggleButton>
              </ToggleButtonGroup>
             </div>
             {console.log(mode)}

          {/* selects */}
          <div className={"bg-primary text-white m-4  rounded p-4 row"}>
            <Navbar.Brand>Plantillas</Navbar.Brand>
           {  mode==='template'? 
           /* template's select */
           <Form.Control as="select" 
                value={selectedOption.select}
                style={{width:'50%'}}
                onChange={handleSelection}
                className={"ml-4 mt-1"}
                display={selectedOption}>

                {options.map(o => (
                  <option className={"p-4 m-4"}value={o.value}>{o.label}</option>
                ))}
            </Form.Control> :

            /* customs' select */
            <Form.Control as="select" 
              value={customOptions.select}
              style={{width:'50%'}}
           /*    onChange={handleCustomizedSelection} */
              className={"ml-4 mt-1"}
              display={customizedOption}>
 
              {customOptions.map(o => (
                <option className={"p-4 m-4"}value={o.value}>{o.label}</option>
              ))}
            </Form.Control>  }       
          </div>

      
             
             {/* customized message box */}
            {selectedOption.value===null || mode ==="customized"?
            <></>:
            <div className={"p-2 bg-light rounded row m-5 justify-content-center"}>
              <CopyToClipboard text={selectedOption.value} onCopy={()=>setCopied(true)}>
                <Button className={"btn btn-secondary ml-3 float-right"} type="success">
                <FontAwesomeIcon icon={faCopy} />
                </Button>
              </CopyToClipboard>  
              <div className={"pt-2"}>
                <p className={"p-1 text-justify"}>{selectedOption.value}</p>
              </div>
            </div> }

            {/* template message box */}   
            <h4>Mensajes Personalizados</h4>   
            <h6>click sobre el texto dos veces y dsp copiar</h6>   
                  { /* customizedOption.value===null || mode==="template"?
                  <></>: */
                  customOptions.map( o => 
                        <div className={"p-2 bg-light rounded row m-5 justify-content-center"}>       
                        <h5>{o.label}</h5>    
                        <div id="parrafo" name="parrafo" value={parrafo} onClick={handleCopy} >
                        <CopyToClipboard text={parrafo.parrafo} onCopy={()=>setCopied(true)}>
                          <Button className={"btn btn-secondary ml-3"} type="success">
                          <FontAwesomeIcon icon={faCopy} />
                          </Button>
                        </CopyToClipboard>  
                        <div className={"pt-2"}>
                        <p className={"p-1 text-justify"}>{o.value}</p>
                      </div>
                        </div> 
                    </div>)}
          </div>         
    )
}
export default CustomizedMessage;