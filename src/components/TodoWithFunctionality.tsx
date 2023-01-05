import React from 'react';
import Todo from '../models/todo';
interface Props {
  todo: Todo;
  editTodo?: () => void;
  deleteTodo?: () => void;
}
const TodoWithFunctionality: React.FC<Props> = ({
  todo,
  editTodo,
  deleteTodo,
}) => {
  const { content, id } = todo;
  return (
    <div>
      <input value={content}></input>
      <button>Edit</button>
      <button>Delete</button>
      <button>Change Status</button>
    </div>
  );
};

export default TodoWithFunctionality;
