import React, {useState} from 'react';
import {Form} from 'react-bootstrap';


const InputClientData=(props)=>{
    return(<>
      <Form className={"p-4 row m-4 bg-light rounded"} >
        <div className={"row pl-2  ml-2"}>
            <Form.Label >Cliente</Form.Label>
            <Form.Control name="nombre" type="text" placeholder="Cliente" onChange={props.handleChange}/>
        </div>
        <div className={"row  pl-2 ml-2"}>
            <Form.Label>Día Turno</Form.Label>
            <Form.Control  name="dia" type="text"  placeholder="Día Turno" onChange={props.handleChange}/>
        </div>
        <div className={"row pl-2  ml-2"}>
            <Form.Label>Hora Turno</Form.Label>
            <Form.Control name="hora" type="text"  placeholder="Hora Turno" onChange={props.handleChange}/>     
        </div>
        <div className={"row pl-2  ml-2"}>
            <Form.Label>Monto</Form.Label>
            <Form.Control name="hora" type="text"  placeholder="Monto" onChange={props.handleChange}/>     
        </div>
      </Form>
    </>)
}
export default InputClientData;