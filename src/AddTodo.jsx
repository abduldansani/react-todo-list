import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddTodo({ onAddTodo }) {
    const [name, setName] = useState('');
    return(
        <div className="Add">
            <input 
                className="AddInput"
                type="text"
                placeholder="Add New Todo" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        onAddTodo(name);
                        setName('');
                    }
                }}
            />
            <FaPlus
                className="AddButton"
                onClick={() => {
                    onAddTodo(name);
                    setName('');
                }}
            />
        </div>
    );
}