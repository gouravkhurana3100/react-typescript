import React, { useReducer, useState } from 'react';
import './App.css';
import { InputBox } from './components/inputBox';
import TodoWithFunctionality from './components/TodoWithFunctionality';
import Todo from './models/todo';

type Action =
  | { type: 'add'; text: string }
  | { type: 'edit'; id: number }
  | { type: 'delete'; id: number };

const App: React.FC = () => {
  const reducerFunction = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          { id: Date.now(), content: action.text, status: false },
        ];
      case 'edit':
        const arr = [...state];
        return [...state];
      case 'delete':
        return [...state];
      default:
        return [...state];
    }
  };
  const [todo, writeToDo] = useState<string>('');
  const [todos, dispatch] = useReducer(reducerFunction, []);

  return (
    <React.Fragment>
      <div className='App'>
        <h1>TODO app using Typescript</h1>
        <InputBox
          todo={todo}
          writeToDo={writeToDo}
          addTodo={() => dispatch({ type: 'add', text: todo })}
        />
        {todos.map((ele) => (
          <TodoWithFunctionality
            todo={ele}
            deleteTodo={() => dispatch({ type: 'delete', id: ele.id })}
            editTodo={() => dispatch({ type: 'edit', id: ele.id })}
          ></TodoWithFunctionality>
        ))}
      </div>
      ;
    </React.Fragment>
  );
};

export default App;
