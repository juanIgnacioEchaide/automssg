import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';

const CopyTemplateContainer=(props)=>{   
    return(
        <div className={"p-2 bg-light rounded row m-5 justify-content-center"}>
                    <CopyToClipboard text={props.selectedOption.value} onCopy={()=>props.setCopied(true)}>
                        <Button className={"btn btn-secondary ml-3 float-right"} type="success">
                        <FontAwesomeIcon icon={faCopy} />
                        </Button>
                    </CopyToClipboard>  
                <div className={"pt-2"}>
            <p className={"p-1 text-justify"}>{props.selectedOption.value}</p>
        </div>
      </div>
    )
}
export default CopyTemplateContainer;