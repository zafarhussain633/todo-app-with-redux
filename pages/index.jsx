import {useState} from "react"
import styles from "../styles/Home.module.css";
import { Typography } from "antd";
import TodoList from "./../src/components/TodoList";
import AddTodo from "./../src/components/AddTodo";
import { useSelector } from "react-redux";


const { Title } = Typography;

const Home = () => {

  const TodoListData = useSelector(state=>state.TodoListReducer)
  
  return (
    <div className={styles.container}>
      <Title>React todo app</Title>
      <AddTodo />
      {TodoListData.length>0 && TodoListData.map((res,i)=>(<TodoList value={res} id={i}/>))} 
    </div>
  );
};

export default Home;
