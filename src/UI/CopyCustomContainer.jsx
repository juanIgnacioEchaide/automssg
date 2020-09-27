
import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';

const CopyCustomContainer=(props)=>{

return(   
        <div id="parrafo" name="parrafo" value={props.parrafo} onClick={props.handleCopy}>
            <h6 >{props.customizedOption.label}</h6>
                <CopyToClipboard text={props.parrafo.parrafo} onCopy={()=>props.setCopied(true)}>
                    <Button className={"btn btn-secondary ml-3"} type="success">
                    <FontAwesomeIcon icon={faCopy} />
                    </Button>
                </CopyToClipboard>  
            <div className={"pt-2"}>
            <p className={"p-1 text-justify"}>{props.i.value}</p>
        </div>         
    </div>)
}
export default CopyCustomContainer;