import React from 'react'
import Task from './Task'

const TaskField = (props) => {

    const Tasks = props.getWantedTasks(props.month, props.year)

    return (
        <>
            {
                (Tasks.length > 0) 
                ? Tasks.map((task) => (
                    <div className='task-day'>
                        <h3>{task.day}.{props.month.toUpperCase()}.{props.year}</h3>
                        {
                            <Task task={task}/>
                        }
                    </div>
                    ))
                : <div className='task-day'>
                        <h3>There are no tasks for selected date!!!</h3>
                  </div>
            }
        </>
    )
}

export default TaskField
