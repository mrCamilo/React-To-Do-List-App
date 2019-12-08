import React from 'react'

import ToDo from './ToDo'
import Header from './Header'
import '../style.css'
import toDoData from '../toDoData'

function App () {
    const toDoComponents = toDoData.map(function(tasks) {
        return <ToDo key = {tasks.id} name = {tasks.name} priority = {tasks.priority} ETA = {tasks.ETA}/>
    })

    return <div className = "toDoList">
        <Header/>
        {toDoComponents}
        </div>
}

export default App