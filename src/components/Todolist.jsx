import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const todolist = () => {
  const [tasks, setTasks] = useState(["Eat", "Shower", "Walk"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUpTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDownTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="bg-slate-900 flex justify-center items-center flex-col w-auto h-auto mb-0">
      <h1 className="font-mono mt-20 mb-10 text-orange-400 text-6xl">
        To-Do-List
      </h1>
      <div className="w-full md:w-1/2 sm:w-1/3 h-20 bg-slate-950 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter your Task"
          value={newTask}
          onChange={handleInputChange}
          className="font-mono border p-8 rounded-md h-full w-4/6 border-orange-300 text-white bg-slate-900 text-xl"
        />
        <button
          onClick={addTask}
          className="font-mono hover:bg-slate-700 h-full w-2/6 border rounded-md border-orange-300 bg-slate-900 text-white text-2xl"
        >
          Add
        </button>
      </div>

      <div className="mt-20 border-t border-orange-300 w-full border-solid-2 flex justify-center items-center">
        <ol className="w-full sm:w-3/6">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="w-full text-white font-mono flex-wrap flex justify-between items-center bg-slate-950 py-3 px-4 rounded-md mb-1 cursor-pointer"
            >
              <span className="w-3/6 text-xl sm:text-4xl border-solid">
                {task}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="px-4 py-2 bg-gray-700 text-white rounded"
              >
                <FaTrashAlt />
              </button>
              <button
                onClick={() => moveUpTask(index)}
                className=" px-4 py-2 bg-gray-700 text-white rounded"
              >
                <FaArrowUp />
              </button>
              <button
                onClick={() => moveDownTask(index)}
                className=" px-4 py-2 bg-gray-700 text-white rounded"
              >
                <FaArrowDown />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default todolist;
