
import './App.css';
import ItemTodo from './components/ItemTodo';
import ListaTodos from './components/ListaTodos';
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <>
      <AppProvider>
        <ItemTodo/>
        <ListaTodos/>
      </AppProvider>

    </>
  );
}

export default App;
