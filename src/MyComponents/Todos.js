import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto",
  }

  return (
    <div className="container" my-3 style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0?"No todos":
      props.todos.map((todo)=>{
        return  (
        <>
        <TodoItem todo={todo} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
     
      }
    </div>
  )
}

export default Todos

