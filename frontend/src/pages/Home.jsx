import { CSSTransition, TransitionGroup } from "react-transition-group";
import AddTodo from "../components/AddTodo";
import Layout from "../layouts/Layout";
import TodoContainer from "../components/TodoContainer";
import TodoCard from "../components/TodoCard";
import { useEffect, useRef, useState } from "react";
import { PAGE_MODS } from "../utils/pageMode";
import { getAllTodos } from "../utils/request";
import { Transition } from "react-transition-group";
import "./home-style.css";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Home = () => {
  const inputComponentRef = useRef(null);
  const changingInputRef = useRef(null);
  const nodeRef = useRef(null);

  const [todoLists, setTodoLists] = useState([]);
  const [input, setInput] = useState("");
  const [pageMode, setPageMode] = useState(PAGE_MODS.CREATE);

  const OnClickOutArr = ["BUTTON", "SPAN", "INPUT", "svg", "path"];

  useEffect(() => {
    getAllTodos(setTodoLists);
  }, []);

  useEffect(() => {
    setInput("");
  }, [todoLists]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (!OnClickOutArr.includes(event.target.tagName)) {
      setPageMode(PAGE_MODS.CREATE);
    }
  };

  return (
    <Layout>
      <AddTodo
        input={input}
        setInput={setInput}
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        pageMode={pageMode}
        setPageMode={setPageMode}
        inputComponentRef={inputComponentRef}
        changingInputRef={changingInputRef}
      />

      <TodoContainer>
        {todoLists.length != 0 &&
          todoLists.map((todo) => (
            <TodoCard
              key={todo?.todoId}
              item={todo}
              setPageMode={setPageMode}
              setInput={setInput}
              setTodoLists={setTodoLists}
              inputComponentRef={inputComponentRef}
              changingInputRef={changingInputRef}
            />
          ))}
      </TodoContainer>
    </Layout>
  );
};

export default Home;
