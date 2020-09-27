import React, {useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const ModeToggle=(props)=>{
    return(
            <div className={"p-4 row ml-4 mb-4 mr-4 mt-1 bg-light rounded"} >
                <ToggleButtonGroup  className={"bg-dark mb-2 rounded"}type="checkbox" value={[1, 2]}>
                    <ToggleButton onClick={()=>props.setMode('template')}value={1}>Plantilla</ToggleButton>
                    <ToggleButton onClick={()=>props.setMode('customized')} value={2}>Personalizado</ToggleButton>
                </ToggleButtonGroup>
            </div>)
    }

export default ModeToggle;