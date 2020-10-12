import { csv } from 'd3';
import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

const UploadInput=(props)=>{

    const addFileHandler=(e)=>{
        csv(e.target.files).then(data => props.setFile(data.value));
 
    }  

    return(
        <>
        <Form.Control onChange={addFileHandler} type="file"/>
        </>
    )
}
export default UploadInput;