import React from 'react'

function HandleChange(){
    return console.log('oh yea')
}

function ToDo(props){
    return  <form className ="toDo">
                <h1>{props.name}</h1>
                <h2>Priority: {props.priority}</h2>
                <h3>ETA: {props.ETA}</h3>
                <div className = "taskIsDone">
                    Completed?
                <input type = "checkbox" checked= {props.tasks.completed} onChange={HandleChange}/>
                </div>
                <hr></hr>
             </form>
}

export default ToDo