import {ADD_ITEM} from '../context/Actions';

export const inititalState = {
  todoList: []
}
export const todoReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      const new_list = [...state.todoList, action.payload];
      return {...state, todoList: new_list}
    default:
      return state;
  }
}