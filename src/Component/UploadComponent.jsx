import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload,faCopy } from '@fortawesome/free-solid-svg-icons';
import {CSVReader} from 'react-papaparse';
import {csv} from 'd3';
import Button from 'react-bootstrap/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ClientNavigator from '../UI/ClientNavigator'

const UploadComponent=(props)=>{
    const setDatosCliente = props.setDatosCliente;
    const fileInputRef = React.createRef();
    const [clients,setClients]=useState([]);
    const [csvFile, setCsvFile]=useState();

    const onFilesAdded=(evt)=>{
        const reader = new FileReader();
        let file = evt.target.files[0];
        reader.onload= processFile(file);
        reader.readAsText(file);
    };

  const processFile=(theFile)=>{
    return function(e) { 
        // Use the .split I've included when calling this from uploadFile()
        var theBytes = e.target.result; //.split('base64,')[1]; 
        setCsvFile(theBytes);
        localStorage.setItem('csv_file',theBytes);
     }  
    }

    const[index,setIndex]=useState(0);
    const parseFile=()=>{     
        const clientObjects=[]
        let file= localStorage.getItem('csv_file');
        let row = file.split('"\r\n\"');
        let rowItems = row.map(i=>{

            let j = i.split('"\t\"');
            let k = j[2].split(" ");
            clientObjects.push(
                {
                    
                    date:k[0],
                    time: k[1],
                    firstName: j[6], 
                    lastName: j[5], 
                    id:j[8],
                    email:j[11],
                    employer:j[10]
                    }
                ) 
            });
        clientObjects.shift();
        setClients(clientObjects);
        localStorage.setItem('client_objs',JSON.stringify(clientObjects));
        setDatosCliente({
            nombre:clientObjects[index].firstName+' '+clientObjects[index].lastName,
            dia:clientObjects[index].date,
            hora:clientObjects[index].time
        })
        }
 

    const openFileDialog=()=>{
        if(props.disabled) return;
        fileInputRef.current.click();
    }


       return(
    <>
     <div>  
        <FontAwesomeIcon icon={faUpload} />
            <input
            ref={fileInputRef}
            type={"file"}
            multiple
            onChange={onFilesAdded}
            />
         
             <Button text="ok"onClick={parseFile}>OK</Button>
          
             {clients.map(i=> clients.indexOf(i)===index ?
                    
                     <>
                            <div className={"bg-primary text-white m-4 p-2 w-5 rounded column justify-content-center"}>
                                <div className={"row pl-2"}>
                                    <CopyToClipboard>
                                                <Button><FontAwesomeIcon color={"cyan"} icon={faCopy}/></Button>
                                    </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>DNI:</label><p className={"mr-2 ml-2"}>{i.id}</p>
                                        <CopyToClipboard>
                                            <Button><FontAwesomeIcon color={"cyan"} icon={faCopy}/></Button>
                                        </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>E-mail:</label><p className={"mr-2 ml-2"}>{i.email}</p>
                                        
                                </div>
                                <div  className={"row pl-2"}>
                                    <CopyToClipboard>
                                        <Button className="pb-2"><FontAwesomeIcon color={"cyan"} icon={faCopy}/></Button>
                                    </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>Nombre:</label><p className={"mr-2 ml-2"}>{i.firstName} {i.lastName}</p>
                                   
                                </div>  
                                <div  className={"row pl-2"}>
                                    <CopyToClipboard>
                                        <Button><FontAwesomeIcon color={"cyan"} icon={faCopy}/></Button>
                                    </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>Fecha turno:</label><p className={"mr-2 ml-2"}>{i.date}</p>    
                                     <CopyToClipboard>
                                        <Button><FontAwesomeIcon  color={"cyan"} icon={faCopy}/></Button>
                                    </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>Horario turno:</label><p className={"mr-2 ml-2"}>{i.time} hs</p>
                                   
                                </div> 
                                <div  className={"row pl-2"}>
                                    <CopyToClipboard>
                                        <Button><FontAwesomeIcon color={"cyan"}  icon={faCopy}/></Button>
                                    </CopyToClipboard>
                                    <label className={"mr-2 ml-2"}>Empleador:</label><p className={"mr-2 ml-2"}>{i.employer}</p>
                                </div>
                               
                            </div>
                    </>
                      :<></>)}
                        
      
    </div>
    </>)
}
export default UploadComponent;