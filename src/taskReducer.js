/* function taskReducer(todos, action) {
    if(action.type === 'checked'){
      return(
        todos.map(todo => {
          if(todo.id === action.id){
            return {...todo, done: !todo.done};
          } else {
            return todo;
          }
        })
      );
    } else if(action.type === 'deleted') {
        return todos.filter(todo => todo.id !== action.id);
    } else if(action.type === 'added') {
        return [...todos, {id: action.id, title: action.title, done: false}];
    } else if(action.type === 'edited') {
        return todos.map(todo => {
            if(todo.id === action.edittingTodo.id) {
                return action.edittingTodo;
            } else {
                return todo;
            }
        });
    } else {
        throw Error('Unknown action: ' + action.type);
    }
  }
 

  */
  export default function todoReducer(todos, action) {
    switch(action.type) {
        case 'checked': {
            return todos.map(todo => {
                if(todo.id === action.id){
                  return {...todo, done: !todo.done};
                } else {
                  return todo;
                }
              });
        }

        case 'deleted': return todos.filter(todo => todo.id !== action.id);

        case 'added': return [...todos, {id: action.id, title: action.title, done: false}];

        case 'edited': {
            return todos.map(todo => {
                if(todo.id === action.edittingTodo.id) {
                    return action.edittingTodo;
                } else {
                    return todo;
                }
            });
        }

        default: throw Error('unknown action' + action.type);
    }
  }