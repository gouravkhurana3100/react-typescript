import React from 'react';

type Props = {
  todo: string;
  writeToDo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};
export const InputBox: React.FC<Props> = ({ todo, writeToDo, addTodo }) => {
  return (
    <div>
      <input
        type='text'
        onChange={(e) => writeToDo(e.target.value)}
        value={todo}
      ></input>
      <button onClick={addTodo}>Go</button>
    </div>
  );
};
