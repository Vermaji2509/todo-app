import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const todosContext = createContext();

export const useTodosContext = () => {
  return useContext(todosContext);
};

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || tempTodos
  );
  const [listIdx, setListIdx] = useState(0);
  const [currList, setCurrList] = useState(todos[listIdx]);

  const addTodo = (task) => {
    const newTask = {
      id: v4(),
      task: task,
      isEditing: false,
      isCompleted: false,
    };

    const newTodos = [...currList.todos, newTask];
    setCurrList({ ...currList, todos: newTodos });

    updateList();
  };

  const removeTodo = (id) => {
    console.log(id);
    const filteredTodos = currList.todos.filter((t) => t.id !== id);
    // console.log(filteredTodos);
    setCurrList({ ...currList, todos: filteredTodos });
    updateList();
  };

  const toggleState = (id) => {
    const target = currList.todos.findIndex((p) => p.id === id);
    const updatedTodos = [...currList.todos];
    updatedTodos[target].isCompleted = !(updatedTodos[target].isCompleted);
    
    setCurrList({ ...currList, todos: updatedTodos });
    updateList();
  };

  const updateTodo = (id, task) => {
    const target = currList.todos.findIndex((t) => t.id === id);
    const updatedTodos = [...currList.todos];
    updatedTodos[target].task = task;

    setCurrList({...currList, todos: updatedTodos});
    updateList();
  }


  const updateList = () => {
    const filteredTodos = todos.map((list) => {
      return list.name === currList.name ? currList : list;
    });

    setTodos(filteredTodos);
  }

  const changeList = (direction) => {

    let tempIdx = listIdx;
    if (direction === "r") tempIdx += 1;
    else tempIdx -= 1;

    if (tempIdx < 0 || tempIdx >= todos.length) {
      console.log("Out of Bound");
      return;
    }

    // const filteredTodos = todos.map((list) => {
    //   return list.name === currList.name ? currList : list;
    // });

    // setTodos(filteredTodos);

    updateList();

    setListIdx(tempIdx);
    setCurrList(todos[tempIdx]);
  }
  
  return (
    <todosContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleState, changeList, currList, setCurrList }}
    >
      {children}
    </todosContext.Provider>
  );
};



const tempTodos = [
  { name: "Personal", todos: [] },
  { name: "Business", todos: [] },
];
