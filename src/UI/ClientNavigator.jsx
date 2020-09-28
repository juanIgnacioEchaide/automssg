import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

const ClientNavigator=(props)=>{

    const[index,setIndex]=useState(0);
    const[array=[
            {id:0,datosCliente:{nombre:'Fulano',apellido:'Dominguez',dia:'Jueves',hora:'12.30',monto:'10.000',telefono:'5555-5555'}},
            {id:1,datosCliente:{nombre:'Mengano',apellido:'Fernandez',dia:'Lunes',hora:'10.30',monto:'10.000',telefono:'4444-4444'}},
            {id:2,datosCliente:{nombre:'Sultano',apellido:'Alonso',dia:'Martes',hora:'09.00',monto:'10.000',telefono:'3333-3333'}},
            {id:3,datosCliente:{nombre:'Porcino',apellido:'Gutiérrez',dia:'Viernes',hora:'14.15',monto:'10.000',telefono:'2222-2222'}},           
                ]]=useState();

    return(
    <div className={"row"}>
        <div className={"row m-5 p-4"}>
            <Button onClick={()=>setIndex(index-1)}>-</Button>
                <p className={"pl-4 pr-4 pt-2"}>{array[index].id}</p>
            <Button  onClick={()=>setIndex(index+1)}>+</Button>
        </div>
            <div className={" row bg-primary text-white col-3 rounded mt-1 pt-2"}>
                <div>
                    <h5>Datos personales</h5>
                      <div className={" row"}><label className={"ml-2"}>Nombre</label><p className={"ml-2"}>{array[index].datosCliente.nombre}</p></div>
                      <div className={" row"}><label className={"ml-2"}>Apellido</label><p className={"ml-2"}>{array[index].datosCliente.apellido}</p></div>  
                      <div className={" row"}><label className={"ml-2"}>Telefono</label><p className={"ml-2"}>{array[index].datosCliente.telefono}</p></div>
                        
             
                </div>
                <div className={"ml-2"}>
                    <h5>Datos Comercial</h5>
                        <div className={" row"}><label className={"ml-2"}>Día Turno</label> <p className={"ml-2"}>{array[index].datosCliente.dia}</p></div>
                        <div className={" row"}><label className={"ml-2"}>Hora Turno</label><p className={"ml-2"}>{array[index].datosCliente.hora}</p></div>
                        <div className={" row"}><label className={"ml-2"}>Monto crédito</label><p className={"ml-2"}>{array[index].datosCliente.monto}</p></div>
                </div>
        </div>
    </div>)
}
export default ClientNavigator;