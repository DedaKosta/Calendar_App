import React from 'react'

const Input = (props) => {
    return (
        <div className='input-field'>
            <label className='input-label'>{props.name}: </label>
            <input className={props.className} type={props.type} name={props.name} onChange={(e) => props.onChange(e.target.value)}/>
        </div>
    )
}

export default Input
