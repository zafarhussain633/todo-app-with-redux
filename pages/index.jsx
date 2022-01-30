import {useState} from "react"
import styles from "../styles/Home.module.css";
import { Typography } from "antd";
import TodoList from "./../src/components/TodoList";
import AddTodo from "./../src/components/AddTodo";
import { useSelector , useDispatch } from "react-redux";
import {ResetTodoList} from "./../src/redux/todoApp/action"


const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const TodoListData = useSelector(state=>state.TodoListReducer)
  
  const handleReset = ()=>{
     dispatch(ResetTodoList());
  }

  return (
    <div className={styles.container}>
      <Title>React todo app</Title>
      <AddTodo />
      {TodoListData.length>0 && TodoListData.map((res,i)=>(<TodoList key={i} value={res} id={i}/>))} 
      {TodoListData.length>0 && <button py-4 fle onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Home;
