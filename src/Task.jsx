import { useState } from "react";
import { FaRegTrashAlt, FaPencilAlt, FaRegSave } from 'react-icons/fa';

export default function Task({ todo, onCheck, onDelete, onEditTodo }) {
    const [isEditting, setIsEditting] = useState(false);
    
    const todoContent = isEditting ? (
        <div className="EditTodo">
            <input 
                className="EditInput"
                type="text" 
                value={todo.title}
                onChange={e => onEditTodo({...todo, title: e.target.value})}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        setIsEditting(false);
                    }
                }}
            />
            <FaRegSave 
                className="SaveButton"
                onClick={() => setIsEditting(false)}
            />
        </div>
    ) : (
        <>
            <li className="TodoItem">
                <label className="TodoLabel">
                    <input 
                        className="TodoCheck"
                        type="checkbox" 
                        checked={todo.done}
                        onChange={() => onCheck(todo.id)}
                    />
                    {todo.title}
                </label>
                <FaPencilAlt
                    className="EditButton"
                    onClick={() => setIsEditting(true)}
                />
                <FaRegTrashAlt
                    role="button" 
                    className="DeleteButton" 
                    onClick={() => onDelete(todo.id)}
                />
            </li>
        </>
    );
    return(
        <>
            {todoContent}
        </>
    )
}