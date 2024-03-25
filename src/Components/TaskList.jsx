import {Component} from "react"
import lists from "../list.json"
import {Task} from "./Task.jsx"


export class TaskList extends Component{

    state={
        tasks: lists
    }

    deleteTodo=(Id)=>{
       return this.setState((prevState)=>{
          return{
            
            tasks:prevState.tasks.filter(task=>task.id !== Id)
            
          }
        })
      }

    render(){
        return(
           <ul>
           { lists.map((list)=>{return <Task 
            key={list.id}
            text={list.text}
            taskId={list.id}
           onDelete={this.deleteTodo}
            />})}
           </ul>
        )
    }
}