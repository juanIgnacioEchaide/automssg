import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

const ClientNavigator=(props)=>{

   
    const datosCliente = props.datosCliente
    const[index,setIndex]=useState(0);
    const nombre =datosCliente[0].Nombre.toLowerCase();
    nombre.charAt(0).toUpperCase();
    console.log(nombre);

    return(
        <div className={" row bg-primary text-white m-5 p-4 rounded"}> 
            <Button onClick={()=>setIndex(index-1)}><p>-</p></Button>  
            <div className={" p-4 rounded"}>   
                <p>Nombre: {datosCliente[index].Nombre.toLowerCase()}</p>
                <p>Apellido: {datosCliente[index].Apellido}</p>
            </div>  
            <Button onClick={()=>setIndex(index+1)}><p>+</p></Button>               
        </div>
    )
}
export default ClientNavigator;