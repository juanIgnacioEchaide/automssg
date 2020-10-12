import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {optionMessages} from '../src/data/optionMessages';
import InputClientData from './UI/InputClientData'
import MssgSelect from './UI/MssgSelect';
import ModeToggle from './UI/ModeToggle';
import CustomizedModeToggle from './UI/CustomizedModeToggle';
import CopyCustomContainer from './UI/CopyCustomContainer';
import CopyTemplateContainer from './UI/CopyTemplateContainer';
import useCustomizedValues from './data/useCustomizedValues';
import useTemplateValues from './data/useTemplateValues';
import ClientNavigator from './UI/ClientNavigator';
import {csv} from 'd3';
import file from './data/data.csv'
import UploadComponent from './Component/UploadComponent';

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
  const[dataCsv,setDataCsv]=useState([]);

  useEffect(()=>{
      csv(file)
          .then( data=> setDataCsv(data))
    }
  ,[]);

  const[parrafo, setParrafo]=useState({
    parrafo:''
  });
  const [mode,setMode]=useState('template');
  const [customizedMode,setCustomizedMode]=useState('customManual');
  const customizedValues=useCustomizedValues(datosCliente).customizedValues;
  const customOptions=useCustomizedValues(datosCliente).customOptions;
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

  const handleCustomizedSelection=(e)=>{
    setCustomizedOption({
      ...customOptions.label,
      id:e.target.value,
      label:e.target.value
    });
  }

  const array=[
    {id:1,texto:'la garlompa //n es garlompera'},
    {id:2,texto:'la garlompa2 /n baila'},
    {id:3,texto:'la garlompa3/n es mi amiga'},
]

        return (
          <div style={{witdh:'20vw'}}>
            <UploadComponent></UploadComponent>
          <ModeToggle setMode={setMode}/>   
            {mode ==="customized"?
            <CustomizedModeToggle setCustomizedMode={setCustomizedMode}/>
            :<></>}
           
            {customizedMode==="customizedFile"?
            <> 
            <ClientNavigator lassName={"m-5 p-5"} datosCliente={dataCsv}/>
           
            </>:
            <InputClientData handleChange={handleChange}/>}

            <div className={"bg-primary text-white m-4  rounded p-4 row"}>
                <Navbar.Brand>Plantillas</Navbar.Brand>
                {  mode==='template'? 
                /* template's select */
                <MssgSelect options={options} 
                              handleSelection={handleSelection} 
                              selectedOption={selectedOption}/>:

                <MssgSelect options={customOptions} 
                              handleSelection={handleCustomizedSelection} 
                              selectedOption={selectedOption}/>}       
              </div>
          {

              array.map(i=><p>{i.texto}</p>)}
              {mode ==="template"?          
              <CopyTemplateContainer setCopied={setCopied} 
                                    selectedOption={selectedOption}
                                    />:<></> }
          
              {mode ==="customized"?  
                <> 
                { customizedValues.map(i=> i.label===customizedOption.label ?
                    <CopyCustomContainer handleCopy={handleCopy}
                                          setCopied={setCopied}
                                          customizedOption={customizedOption}
                                          parrafo={parrafo}
                                          i={i}/>:<></>)}
                    
              </>:<></>}
          </div>         
    )
}
export default CustomizedMessage;