import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {useState} from 'react'

const todoList = [
  {
    id:1,
    task:"Todo Something",
    completed:false,
  },
  {
    id:new Date().getTime(),
    task:"Ract todo List",
    completed:false,
  },
 
]
function App() {
  const [todo, setTodo] = useState (todoList)
  return (
    <div className="container">
     <Header setTodo={setTodo} todo={todo} />
     <TodoList todo={todo}  setTodo={setTodo}/>
    </div>
  );
}

export default App;
