import { DeleteTodoItemAction } from "../redux/todoApp/action";
import { useDispatch } from "react-redux";

const TodoList = ({ value, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DeleteTodoItemAction(id));
  };

  return (
    <div className="todo-list">
        <div>
          <h2>{value}</h2>
        </div>

        <div>
          <button className="deleteButton" onClick={handleDelete}>
            remove
          </button>
        </div>
    </div>
  );
};

export default TodoList;
