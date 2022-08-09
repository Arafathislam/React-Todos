import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit =(e) =>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description not here");
            }else{
                props.addTodo(title,desc);
                setTitle("");
                setDesc(""); 
            }

    }

    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div  className="mb-3">
                    <label  htmlFor="title"  className="form-label">Todo Title</label> 
                    <input type="text"  className="form-control" value={title}id="title" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div  className="mb-3">
                    <label  htmlFor="desc"  className="form-label">Todo Description</label>
                    <input type="text"  className="form-control" value={desc} id="desc"onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <button type="submit"  className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
