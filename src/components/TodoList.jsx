import React from 'react'
import {ListGroup} from 'react-bootstrap';

const TodoList = ({todos}) => {
  return (
    <div>
        <h2 className='text-center '>Todos</h2>
        <ListGroup className='w-50 mx-auto d-flex'>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
{/* {
    todos.map((todo) =>)
} */}

        </ListGroup>
    </div>
  )
}

export default TodoList