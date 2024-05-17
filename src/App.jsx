import React, { useEffect, useState } from "react";
import TitleContainer from "./components/Title/title.container";
import ListContainer from "./components/Items/items.container";
import { useTodosContext } from "./context/todosContext";

const App = () => {
  const { todos, currList, setCurrList } = useTodosContext();

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, currList, setCurrList])

  return (
    <div className="h-screen w-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-8">
      {/* Heading */}
      <div className="text-4xl font-semibold text-center">
        Keep Notes of What
        <span className="font-bold block mx-auto text-center text-5xl">
          ToDo !!
        </span>
      </div>

      {/* Todo Container */}
      <div className="flex flex-col gap-4 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 w-11/12 md:w-3/4 lg:w-[760px] h-2/3 p-5">
        <TitleContainer title={currList.name} />
        <ListContainer items={currList.todos} />
      </div>
    </div>
  );
};

export default App;
