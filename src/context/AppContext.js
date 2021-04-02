import React, { useReducer } from "react";
import { inititalState, todoReducer } from "./Reducer";


export const AppContext = React.createContext([inititalState, value=>{}])

export const AppProvider = (props) =>{
  const [state, dispatch] = useReducer(todoReducer, inititalState)
  return (
    <>
    <AppContext.Provider value={[state,dispatch]}>
      {props.children}
    </AppContext.Provider>
    </>
  )
}

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) throw new Error(`Você não pode utilizar o estado global fora de um contexto`)
  return context;
}