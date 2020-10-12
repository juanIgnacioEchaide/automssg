import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import {CSVReader} from 'react-papaparse';
import {csv} from 'd3';
import Button from 'react-bootstrap/Button';

const UploadComponent=(props)=>{
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
        }
        console.log(clients);

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
         
             <Button text="ok"onClick={parseFile}/>
    </div>
    </>)
}
export default UploadComponent;