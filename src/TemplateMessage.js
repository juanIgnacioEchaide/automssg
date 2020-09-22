
import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';


const TemplateMessage=(props)=>{

    const options=[
      {label:'selecciona trámite', value:''},
      {label:'cancelación turno', value:'Si desea cancelar su turno...'},
      {label:'extracción dolares', value:'Si desea extraer dolares...'}
    ]
    const [selectedOption, setSelectedOption] = useState({value:options.value});

    const handleSelection=(e)=>{
      setSelectedOption({
        ...options.value,
        value:e.target.value});
      console.log(selectedOption);
    }
    const[copied,setCopied]=useState(false);
    return (
      <div> 
        <div className={"bg-secondary text-white m-4 rounded p-4 row"}>
          <h2>Trámite</h2>  
          <Form.Control as="select" 
          value={selectedOption}
          style={{width:'50%'}}
          onChange={handleSelection}
          className={"ml-4 mt-1"}
          >
          {options.map(o => (
            <option className={"p-4 m-4"}value={o.value}>{o.label}</option>
          ))}
         </Form.Control>
        </div>
            {selectedOption.value==null?
            <></>:
            <div className={"bg-light rounded row justify-content-center"}>
              <div className={"pt-2"}>
                <p>{selectedOption.value}</p>
              </div>
              <CopyToClipboard text={selectedOption.value} onCopy={()=>setCopied(true)}>
                <Button className={"btn btn-success ml-3"} type="success">
                  Copy
                </Button>
              </CopyToClipboard>  
            </div> }
       
            </div>
    );
  };
     
   
export default TemplateMessage;