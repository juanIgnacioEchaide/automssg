import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import {csv} from 'd3';
import file from '../data/data.csv'
const CSVTest=(props)=>{

    const[dataCsv,setDataCsv]=useState([]);

    useEffect(()=>{
        csv(file).then( data=>
            setDataCsv(data)); 
    }
    ,[]);
    console.log(dataCsv)
    return(
    <>
        {dataCsv.map(i=>
            <div>
                <p>{i.Nombre}</p>
                <p>{i.Turno}</p>
            </div>
        )}
|         
    </>)
    }
export default CSVTest;