import React from "react";
import {DeleteTodoItemAction} from "./../redux/todoApp/action"
import { useDispatch } from "react-redux";

const TodoList = ({value,id,disableStatus,click}:{value:string, id:number,disableStatus:boolean,click:any}) => {
  
    const dispatch = useDispatch();
    const handleDelete = (id:number) => {
        dispatch(DeleteTodoItemAction(id))
    } 

  return (
    <>
      <div>
        { 
          disableStatus ? <input type="text" value= {value} /> :  <input type="text" value= {value} disabled />
        }    
        <button onClick={click}>edit</button>
        <button onClick={()=>handleDelete(id)}>delete</button>
      </div>
    </>
  );
};

export default TodoList;
