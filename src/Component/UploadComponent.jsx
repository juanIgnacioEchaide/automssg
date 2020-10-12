import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import {CSVReader} from 'react-papaparse';
import {csv} from 'd3';
import Button from 'react-bootstrap/Button';

const UploadComponent=(props)=>{
    const fileInputRef = React.createRef();
    const[file,setFile]=useState();
    const [csvFile, setCsvFile]=useState();
    const rawClientRows=[]
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
        let rawParsedFile = file.split('"\r\n\"');

        rawParsedFile.map(i =>{
            let j = JSON.stringify(i)
            rawClientRows.push(j);     
          });
        
        rawClientRows.map( i =>{
            let fragment = i.split('" "');
            console.log(fragment);
            //hearing date
            let dateTime =i.slice(56,72);
            let dateTimeArray = dateTime.split(" ");

            clientObjects.push({
                date:dateTimeArray[0],
                time:dateTimeArray[1],
            })    

          });
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
           {rawClientRows.map( i=> <p>{i}</p>)}
        <Button text="ok"onClick={parseFile}/>
    </div>
    </>)
}
export default UploadComponent;