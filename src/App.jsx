// import { useState } from 'react';
import { useReducer } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import taskReducer from './taskReducer';

export default function App() {
    // const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(taskReducer, []);

    // const handleCheckTodo = (todoId) => setTodos(todos.map(todo => todo.id === todoId ? {...todo, done: !todo.done} : todo));

    function handleCheckTodo(todoId) {
      dispatch({
        type: 'checked',
        id: todoId
      })
    }

    // const handleDeleteTodo = (todoId) => setTodos(todos.filter(todo => todo.id !== todoId));

    function handleDeleteTodo(todoId) {
      dispatch({
        type: 'deleted',
        id: todoId
      })
    }
    
    // const handleAddTodo = (todoTitle) => setTodos([...todos, {id: todos.length ? todos[todos.length - 1].id + 1 : 0, title: todoTitle, done: false}]);
    
    function handleAddTodo(todoTitle) {
      dispatch({
        type: 'added',
        id: todos.length ? todos[todos.length - 1].id + 1 : 0,
        title: todoTitle
      })
    }
    // const handleEditTodo = (edittingTodo) => setTodos(todos.map(todo => todo.id === edittingTodo.id ? edittingTodo : todo));

    function handleEditTodo(edittingTodo) {
      dispatch({
        type: 'edited',
        edittingTodo: edittingTodo
      })
    }
    
    return(
        <div className='App'>
            <h1 className='todoHead'>Todo List</h1>
          <AddTodo 
            onAddTodo={handleAddTodo}
          />
          <TaskList 
            todos={todos}
            onCheck={handleCheckTodo}
            onDelete={handleDeleteTodo}
            onEditTodo={handleEditTodo}
          />
        </div>
      )
}