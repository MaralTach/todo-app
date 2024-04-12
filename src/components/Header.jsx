import React, { useState } from 'react'
import {Button, Form, InputGroup} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
const Header = ({todo, setTodo}) => {
   
    const [task,setTask] = useState('')
    const AddTodo = () =>{
        console.log(task)
       
        const newTodo = {
            id: uuidv4(),
            task:task,
            completed: false
        }
        console.log(newTodo)
        setTodo([...todo, newTodo])
        setTask('')
    }
  return (
    <div>
        <h1 className='text-center text-warning m-5'>Todo List</h1>
        <InputGroup className="mb-3 w-50 d-flex mx-auto ">
        <Form.Control
          placeholder="plese enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=> setTask(e.target.value)}
          value={task}
        />
       
        <Button className='input-group-text btn-success' disabled={!task.trim()} id="basic-addon2"
        onClick={AddTodo} >Add</Button>
      </InputGroup>
    </div>
  )
}

export default Header