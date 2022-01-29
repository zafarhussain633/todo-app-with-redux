import React,{useState} from "react";
import {DeleteTodoItemAction, EditTodoItemAction} from "./../redux/todoApp/action"
import { useDispatch } from "react-redux";

const TodoList = ({value,id}:{value:string, id:number}) => {
   
    const dispatch = useDispatch();
    const [editStatus , setEditStatus] = useState(true);
    const [todoItem, setTodoItem] = useState(value);
    const handleDelete = (id:number) => {
        dispatch(DeleteTodoItemAction(id))
    } 

    const handleEdit=(id:number)=>{
      setEditStatus(!editStatus);
      dispatch(EditTodoItemAction(id,todoItem));
    }


  return (
    <>
      <div>
        <input type="text" value= {todoItem} onChange={(e)=>setTodoItem(e.target.value)} disabled={editStatus}/> 
        <button onClick={()=>handleEdit(id)}>edit</button>
        <button onClick={()=>handleDelete(id)}>delete</button>
      </div>
    </>
  );
};

export default TodoList;
