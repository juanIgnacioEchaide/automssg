import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ClientNavigator=(props)=>{
    const datosCliente = props.datosCliente
    const[index,setIndex]=useState(0);

    return(
        <div className={" row bg-primary text-white ml-4 m-1 p-4 justify-content-between rounded col-6"}>        
            <Button className={"left"} onClick={()=>setIndex(index-1)}><FontAwesomeIcon icon={faArrowLeft} /></Button>  
            <div className={" p-4 rounded"}>   
                <p>Nombre: {datosCliente[index].Nombre}</p>
                <p>Apellido: {datosCliente[index].Apellido}</p>
            </div>  
            <Button className={"fix-right"} onClick={()=>setIndex(index+1)}><FontAwesomeIcon icon={faArrowRight} /></Button>               
        </div>
    )
}
export default ClientNavigator;