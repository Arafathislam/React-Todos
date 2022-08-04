import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-danger sm'>Delete</button>
    </div>
  )
}

export default TodoItem
