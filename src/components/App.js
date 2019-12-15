import React, {Component} from 'react'

import ToDo from './ToDo'
import Header from './Header'
import '../style.css'
import toDoData from '../toDoData'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: toDoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState=>{
            const updatedToDos = prevState.todos.map(todo=>{
                if (todo.id === id)
                {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {todos: updatedToDos}
        })
        console.log('changed', id)
    }

    render() {
        const toDoComponents = this.state.todos.map(tasks=> 
            <ToDo key={tasks.id} tasks = {tasks} handleChange = {this.handleChange}/>
        )

        return <div className="toDoList">
            <Header />
            {toDoComponents}
        </div>
    }
}

export default App






























