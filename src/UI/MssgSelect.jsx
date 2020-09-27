import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

const MssgSelect=(props)=>{
    return(<>
        <Form.Control as="select" 
                value={props.selectedOption.select}
                style={{width:'50%'}}
                onChange={props.handleSelection}
                className={"ml-4 mt-1"}
                display={props.selectedOption}>

                {props.options.map(o => (
                  <option className={"p-4 m-4"}value={o.value}>{o.label}</option>
                ))}
        </Form.Control>
        </>)}
export default MssgSelect;