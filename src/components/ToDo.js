import React from 'react'


function ToDo(props){
    const crossOffTask = {
        textDecoration: "line-through"
    }

    return  <form className ="toDo">
                <h1 style={props.tasks.completed ? crossOffTask: null}>{props.tasks.name}</h1>
                <h2>Priority: {props.tasks.priority}</h2>
                <h3>ETA: {props.tasks.ETA}</h3>
                <div className = "taskIsDone">
                    Completed?
                <input type = "checkbox" checked= {props.tasks.completed} onChange={() => props.handleChange(props.tasks.id)}/>
                </div>
                <hr></hr>
             </form>
}

export default ToDo