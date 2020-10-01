import React, {useState} from 'react';
import axios from 'axios';

 const FileUpload=(props)=>{

    const UploadFile=()=>{ 
        axios.post('https://automssg.netlify.app/',{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Origin' : '*',
            });
        }

    return(
        <>
        <input type="file" onClick={UploadFile}>upload</input>
        </>
    )
}
export default FileUpload;