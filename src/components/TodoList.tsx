import React from "react";
import {DeleteTodoItemAction} from "./../redux/todoApp/action"
import { useDispatch } from "react-redux";

const TodoList = ({value,id}:{value:string, id:number}) => {
  
    const dispatch = useDispatch();

    const handleDelete = (id:number) =>{
        dispatch(DeleteTodoItemAction(id))
    } 

  return (
    <>
      <div>
        <input type="text" value= {value} />
        <button>edit</button>
        <button onClick={()=>handleDelete(id)}>delete</button>
      </div>
    </>
  );
};

export default TodoList;
