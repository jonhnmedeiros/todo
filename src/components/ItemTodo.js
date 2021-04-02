import React, {useState} from 'react';
import { addItem } from '../context/Actions';
import { useAppContext } from '../context/AppContext';

const ItemTodo = () => {
  const [value, setValue] = useState("")
  const [state, dispatch] = useAppContext();
  const handleIncluirTodo = () => {
    dispatch(addItem(value));
  }
  return (
    <>
    <input type={"text"} size={60} value={value}
      onChange={(inputRef) => setValue(inputRef.target.value)}
    />
    <button onClick={handleIncluirTodo}>Incluir Todo</button>
    </>
  );
  
};

export default ItemTodo;