import {Component} from "react"
import list from "../list.json"
import {Task} from "./Task.jsx"


export class TaskList extends Component{

    state={
        TasksList: list
    }

    render(){
        return(
           <ul>
           { list.map(({id, text})=>{return <Task 
            key={id}
            text={text}
            
            />})}
           </ul>
        )
    }
}