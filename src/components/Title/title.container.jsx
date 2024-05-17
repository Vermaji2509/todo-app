import { useEffect, useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useTodosContext } from "../../context/todosContext";

const TitleContainer = ({ title = "Title" }) => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo, listIdx, changeList } = useTodosContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex flex-col items-center text-2xl gap-3">
      <div className="flex justify-around w-full py-2">
        <button onClick={()=> {
          changeList("l");
        } }>
          <FaCircleChevronLeft />
        </button>
        <div>{title}</div>
        <button onClick={() => changeList("r")}>
          <FaCircleChevronRight />
        </button>
      </div>

      <div className="w-3/4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded text-base p-2 px-4 w-full bg-gray-100 bg-opacity-50 text-black outline-none placeholder:text-gray-800"
            placeholder="Create Todo"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            autoFocus={true}
          />
        </form>
      </div>
    </div>
  );
};

export default TitleContainer;
