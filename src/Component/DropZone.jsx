import React, {useState} from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
const DropZone=(props)=>{
    /* https://malcoded.com/posts/react-dropzone/ */
    /* https://malcoded.com/posts/react-file-upload/ */

    const fileInputRef = React.createRef();
    const[highLight, setHighLight]=useState(false);

    const onFilesAdded=(evt)=>{
        let files = evt.target.files;
        if(props.onFilesAdded){
            const array = fileListToArray(files);
            props.onFilesAdded(array);
        }
    };

    const fileListToArray=(list)=>{
        let array=[];
        for(let i=0;i<list.length;i++){
            array.push(list.item(i))
        }
        return array;
    };

    const openFileDialog=()=>{
        if(props.disabled) return;
        fileInputRef.current.click();
    }

    const onDragOver=(evt)=>{
        evt.preventDefault();

    };

    const onLeave=()=>{

    };

    const onDrop=()=>{

    }

    return(<>
    <div>
        <FontAwesomeIcon icon={faUpload} />
        <input
        ref={fileInputRef}
        type={"file"}
        multiple
        onChange={onFilesAdded}
        />
    </div>
    </>)
}
export default DropZone;