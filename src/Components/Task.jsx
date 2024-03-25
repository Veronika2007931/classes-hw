

export function Task({text, onDelete, taskId}){

    const handleDelete=()=>{
       onDelete(taskId)
       
    }
    
    return(
        <li>
           <p>{text}</p>
         <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}