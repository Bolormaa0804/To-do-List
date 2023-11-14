import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import {Todo} from './Todo';
import {EditTodoForm} from './EditTodoForm'
uuidv4();

export const TodoWrapper =()=>{
    const[todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false, 
            isEditing: false}
        ])
        console.log(todos)
    }
    const todoComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
    const todoDelete = id =>{
        //filters out the element that has the same id as the one provided
        setTodos(todos.filter(todo => todo.id !==id))
    }
    const todoEdit = id =>{
        //toggles the isEditing propert of a specific todo
        setTodos(todos.map(todo =>todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }
    const taskEdit = (task, id) =>{
        //updates the task property to the new value and toggles isEditing
        setTodos(todos.map(todo =>todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }
    return(
        <div className="TodoWrapper">
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index)=> (
                todo.isEditing ? (
                    <EditTodoForm todoEdit={taskEdit} task={todo}/>
                ) : (
                <Todo task={todo} key={index} todoComplete ={todoComplete}
                todoDelete ={todoDelete} todoEdit ={todoEdit} />
                )
            ))}
        
        </div>
    )
}