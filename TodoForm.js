import React, {useState} from 'react'
export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("");
    const handleSubmit = e =>{
        //prevent the page reloading everytime when we click submit
        e.preventDefault();

        addTodo(value);
        setValue("");
    }
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type='text' className="TodoInput" value={value} placeholder="What is your task today?" 
            //it will set the value of todoInput into new value
            onChange={(e) =>setValue(e.target.value)}/>
            <button type='submit' className="Todo-button">Add Task</button>
        </form>

    )
}
