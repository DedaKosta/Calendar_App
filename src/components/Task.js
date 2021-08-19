import React from 'react'

const Task = (props) => {
    console.log(props.task)
    return (
        <div className='task-div'>
            <label className='task-text'>{props.task.text}</label>
        </div>
    )
}

export default Task
