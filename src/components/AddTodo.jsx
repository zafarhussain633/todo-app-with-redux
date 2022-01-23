import {useState} from "react";
import {AddTodoAction} from  "./../redux/todoApp/action"
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
 const dispatch = useDispatch();
 const data = useSelector(state=>state)
 const [todo , setTodo] = useState("");
  
  const handleSubmit = (e) => {
     e.prevent.defafaul();
     dispatch(AddTodoAction(todo))
     console.log(data);
  };


  function handleChange(e){
    setTodo(e.target.value)
  }

  console.log(todo);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={todo} placeholder="add what to todo" onChange={handleChange} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
