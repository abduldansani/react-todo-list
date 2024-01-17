import Task from './Task';

export default function TaskList({ todos, onCheck, onDelete, onEditTodo }) {
    return(
        <>
        {!todos.length && <p className='EmptyTodo'>Your todo list is empty!</p>}
        <ul className='TodoList'>
            {todos.map(todo => (
                <Task 
                    key={todo.id}
                    todo={todo}
                    onCheck={onCheck}
                    onDelete={onDelete}
                    onEditTodo={onEditTodo}
                />
            ))}
        </ul>
        </>
    );
}