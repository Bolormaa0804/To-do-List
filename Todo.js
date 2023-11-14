import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Todo = ({task, todoComplete, todoDelete, todoEdit}) => {
    return (
        <div className="Todo">
            <div onClick={() => todoComplete(task.id)}>
            <Checkbox {...label} />
            </div>
            <p className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <EditNoteIcon onClick={() => todoEdit(task.id)} />
                <DeleteIcon onClick={() => todoDelete(task.id)} />
            </div>
        </div>
    );
}
