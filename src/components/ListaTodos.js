import React from 'react';
import {useAppContext} from "../context/AppContext";


const ListaTodos = () => {
  const [state, dispatch] = useAppContext();
  const {todoList} = state;

  return (
    <ul>
      {
        todoList.map(item=><li>{item}</li>)
      }
    </ul>
  );
  
}

export default ListaTodos;