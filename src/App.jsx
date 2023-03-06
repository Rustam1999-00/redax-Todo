import "./Appcss/App.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { todoDefault, todoEdit } from "./redux/todo/todoActions";
import { useRef } from "react";
import { TODO_EDI, TODO_DEFAULT, TODO_ADD } from "./redux/todo/todoTypes";



function App() {
  const todoRef = useRef()
  const todoAdd = useSelector((state) => state)
  console.log(todoAdd.length);
  const dispatch = useDispatch();





  const hendleSubmit = (evt) => {
    evt.preventDefault()

    const data = {
      id: todoAdd.length + 1,
      name: todoRef.current.value
    }

    data ? dispatch({ type: TODO_EDI, payload: data }) : ''

    toast.success('Bajarildi')
  }

  const hendleDelete = (todoId) => {


    const filter = todoAdd.filter((el) => el.id !== todoId)
    dispatch({ type: TODO_DEFAULT, payload: filter })
    toast.error("Todo o'chirildi!!!")
  }
  const hendleEdit = (todoId) => {
    const newTodos = prompt('Write new todo: ')
    let findTodos = todoAdd.find((todo) => todo.id === todoId)
    findTodos.name = newTodos
    dispatch({ type: TODO_ADD, payload: todoAdd })
    
    console.log('resthf,');
    toast.warning("Todo o'zgartirildi!!!")
}

  return (
    <div className="App">

      <h1 className="text-center pt-5 mb-3">Redax Todo</h1>
      <form onSubmit={hendleSubmit} className="form-control w-50 mx-auto p-5 shadow">

        <input ref={todoRef} className="input-group mb-3 p-3 rounded-3" placeholder="Add_todo" />
        {/* <TextField
        ref={todoRef}
       
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />

        <TextField  className="input-group mb-3" id="standard-basic" label="Standard"/>
        <TextField   className="input-group mb-3" id="outlined-basic" label="Todo Kiriting" variant="outlined" /> */}
        <Button className="btn d-block ms-auto" type="submit" variant="contained">Send</Button>



      </form>

      <ul className="list-group w-50 mx-auto mt-5">
        {
          todoAdd.length >= 0 && todoAdd.map((el) => (
            <li className="list-group-item  pt-3 d-flex ">
              <h3 className="text-start"> {el.name}</h3>
              <Button onClick={() => hendleEdit(el.id)} className="btn bg-warning d-block ms-auto me-3" type="submit" variant="contained">EDIT</Button>
              <Button onClick={() => hendleDelete(el.id)} className="btn bg-danger d-block  me-3" type="submit" variant="contained">DELETE</Button>
            </li>

          ))
        }

      </ul>




      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
export default App


