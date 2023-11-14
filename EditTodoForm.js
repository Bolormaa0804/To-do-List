import React, {useState} from 'react'
export const EditTodoForm = ({todoEdit, task}) => {
    const[value, setValue] = useState(task.task);
    const handleSubmit = e =>{
        //prevent the page reloading everytime when we click submit
        e.preventDefault();

        todoEdit(value, task.id);
        setValue("");
    }
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type='text' className="TodoInput" value={value} placeholder="Editing task" 
            //it will set the value of todoInput to editted value
            onChange={(e) =>setValue(e.target.value)}/>
            <button type='submit' className="Todo-button">Edit Task</button>
        </form>

    )
}

