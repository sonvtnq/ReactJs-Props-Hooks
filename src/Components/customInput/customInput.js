import React, { useState } from 'react';
import { useEffect } from 'react';
import './CustomInput.css'

const CustomInput =props=>{
    const [inputValue, setInputValue] = useState('');
    // console.log(props);
    const _inputStyle={
        paddingRight: props.paddingRight,
        width: props.width,
    }
    const _onChange=e=>{
        // console.log(e.target.value);
        setInputValue(e.target.value)
        props.inputChange(e);
    }
    useEffect(()=>{
        setInputValue(props.value)
    },[props.allowEdit,props.value])
    // console.log(props.allowEdit);
    
    return (
        <div className='custom-input' style={_inputStyle}>
            <label
                className={props.label==''?'d-none':''}
            >{props.label}</label>
            {
                props.type=="select"
                ?<select 
                    id={props.name} 
                    name={props.name} 
                    onChange={_onChange} 
                    value={props.value=='' || props.allowEdit==1?inputValue :props.value}
                >
                    <option value={''} style={{color:'rgba(0,0,0,0.5)'}}>{props.selections[0]}</option>
                    {props.selections.slice(1).map((option, index) => {
                        return <option key={index} value={option}>{option}</option>;
                    })}
                </select>
                :<input 
                    value={props.value==''&&props.allowEdit?inputValue:props.value}
                    name={props.name}  
                    type={props.type} 
                    placeholder={props.placeholder}
                    onChange={_onChange}
                />
            }
        </div>
    )
}

export default CustomInput