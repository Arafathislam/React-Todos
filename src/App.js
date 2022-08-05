import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import TodoItem from './MyComponents/TodoItem';
import AddTodo from "./MyComponents/AddTodo";
import { useState } from 'react';
function App() {

  const onDelete =(todo) =>{
    console.log("On Delete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"book",
      desc:"chemistry",
    },
    {
      sno:2,
      title:"watch",
      desc:"police",
    },
    {
      sno:3,
      title:"car",
      desc:"rolls royce",
    },
    {
      sno:4,
      title:"mobile",
      desc:"oppo",
    },
    {
      sno:5,
      title:"book",
      desc:"Business",
    },

  ]);   

  return (
    <>
      <Header title="Todos"/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
