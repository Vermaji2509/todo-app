import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useTodosContext } from "../../context/todosContext";
import { useState } from "react";

const Item = ({ task }) => {
  const { removeTodo, toggleState, updateTodo } = useTodosContext();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    updateTodo(task.id, text);
    setIsEditing(false)
  }

  return (
    <div className="flex justify-between items-center text-lg py-3">
      <div className={`w-4 h-4 ${task.isCompleted ? "bg-blue-700" : "bg-transparent"} rounded-full border cursor-pointer`} onClick={()=> toggleState(task.id)}></div>
      
      {
        (isEditing) ? 
        <div className="w-3/4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded text-base p-2 px-4 w-full bg-gray-100 bg-opacity-50 text-black outline-none placeholder:text-gray-800"
            placeholder="Create Todo"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            autoFocus={true}
          />
        </form>
      </div>
        :
        <div className={`flex-1 px-4 ${task.isCompleted && "line-through text-gray-400"}`}>{task.task}</div>
      }
      
      <div className="flex justify-between w-12">
        <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
          <FaRegEdit />
        </div>
        <div className="cursor-pointer" onClick={() => removeTodo(task.id)}>
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default Item;