import React from 'react'


function ToDo(props){
    return  <form className ="toDo">
                <h1>{props.name}</h1>
                <h2>Priority: {props.priority}</h2>
                <h3>ETA: {props.ETA}</h3>
                <div className = "taskIsDone">
                    Completed?
                <input type = "checkbox" checked= {props.tasks.completed} onChange={() => props.handleChange(props.tasks.id)}/>
                </div>
                <hr></hr>
             </form>
}

export default ToDo