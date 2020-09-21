import React, {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const optionsMessage=[
    {value:'blabla',label:'cancelación turno'},
    {value:'blaa',label:'extracción dolares'}
]

const TemplateMessage=(props)=>{

return(
    <>
    <div style={{width:'40%'}} className={"m-4 p-4 bg-dark text-white rounded"}>
        <label className={"pr-2 pt-2"}>Mensaje</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={''}
          options={optionsMessage.title}
          isSearchable
        />
        </div>
      {/*       {options.map(o=><option value={options}>{o.title}</option>)}
       
 */}
     
    </>)
}
export default TemplateMessage;