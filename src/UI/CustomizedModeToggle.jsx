import React, {useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const CustomizedModeToggle=(props)=>{
    return(
            <div className={"p-1 row ml-5 mr-4 bg-light rounded"} >
                <ToggleButtonGroup  className={"bg-dark mb-2 rounded"}type="checkbox" value={[1, 2]}>
                    <ToggleButton onClick={()=>props.setCustomizedMode('customizedManual')}value={1}>Manual</ToggleButton>
                    <ToggleButton onClick={()=>props.setCustomizedMode('customizedFile')} value={2}>Archivo</ToggleButton>
                </ToggleButtonGroup>
            </div>)
    }

export default CustomizedModeToggle;