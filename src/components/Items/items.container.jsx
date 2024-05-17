import React from "react";
import Item from "./item.component";

const ListContainer = ({ items }) => {
  return (
    <div className="overflow-y-scroll px-3 py-3 h-full">
      { items.length == 0 ?
          <div className="h-full flex flex-col text-2xl font-semibold justify-center items-center text-center gap-10"> 
            <div> 
              Welcome to The Todo App. 
            </div>
            <div>
            Start Adding tasks todo. 
            </div>
          </div>
        : items.map((task) => {
        return (
          <div key={task.id}>
            <Item task={task} />
            <div className="w-3/4 mx-auto rounded-md h-px bg-gray-400 my-2" />
          </div>
        );
      })}
    </div>
  );
};

export default ListContainer;
