import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const [todo, setTodo] = useState ([])
  return (
    <div className="container">
     <Header setTodo={setTodo} todo={todo} />
     <TodoList todo={todo}/>
    </div>
  );
}

export default App;
