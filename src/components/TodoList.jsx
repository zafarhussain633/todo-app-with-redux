
import {DeleteTodoItemAction} from "../redux/todoApp/action"
import { useDispatch } from "react-redux";


const TodoList = ({value,id}) => {
   
    const dispatch = useDispatch();
   
    const handleDelete = () => {
        dispatch(DeleteTodoItemAction(id))
    } 

  return (
    <>
      <div>
        <i>{value}</i> 
        <button onClick={handleDelete}>remove</button>
      </div>
    </>
  );
};

export default TodoList;
