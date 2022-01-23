import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Typography } from "antd";
import TodoList from "./../src/components/TodoList";
import AddTodo from "./../src/components/AddTodo";
const { Title } = Typography;

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Title>React todo app</Title>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
