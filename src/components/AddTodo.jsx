import {useState} from "react";
import {AddTodoAction} from  "./../redux/todoApp/action"
import { useDispatch } from "react-redux";

const AddTodo = () => {
 const dispatch = useDispatch();
 const [todo , setTodo] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(AddTodoAction(todo))
  };

  function handleChange(e){
    setTodo(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  value={todo}  onChange={handleChange}  id="username" type="text"  placeholder="add what to todo" />
        <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
