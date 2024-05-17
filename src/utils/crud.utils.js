import { useTodosContext } from "../context/todosContext";
import { v4 } from "uuid";

const tempData = [
  {
    id: -4,
    task: "Type and Press Enter to Add ToDo",
    isEditing: false,
    isCompleted: false,
  },
  {
    id: -3,
    isCompleted: false,
    isEditing: false,
    task: "<- Click here to Mark as Done",
  },
  {
    id: -2,
    isCompleted: false,
    isEditing: false,
    task: "Click on 1st button to Edit Task ->",
  },
  {
    id: -1,
    isCompleted: false,
    isEditing: false,
    task: "Click on 2nd button to Delete Task ->",
  },
];

const tempTodos = [
  { name: "Personal", todos: tempData },
  { name: "Business", todos: tempData },
];

const useUtils = () => {
  const { currList, setCurrList, listIdx, setListIdx } = useTodosContext();

  const addTodo = (task) => {
    console.log("Add todo Invoked");
    const newTask = {
      id: v4(),
      task: task,
      isEditing: false,
      isComplete: false,
    };

    if (currList.todos == tempData) {
      const newTodos = [newTask];
      setCurrList({ ...currList, todos: newTodos });
      return;
    }

    const newTodos = [...currList.todos, newTask];
    setCurrList({ ...currList, todos: newTodos });

    console.log(currList);
    return;
  };

  const removeTodo = (id) => {
    console.log(id);
    const filteredTodos = currList.todos.filter((t) => t.id !== id);
    console.log(filteredTodos);
    setCurrList({ ...currList, todos: filteredTodos });
  };

  const toggleState = (id) => {
    const target = currList.todos.findIndex((p) => p.id === id);
    const updatedTodos = [...currList.todos];
    updatedTodos[target].isComplete = !updatedTodos[target].isComplete;
    setCurrList({ ...currList, todos: updatedTodos });
  };

  return { addTodo, removeTodo, toggleState };
};

export default useUtils;
