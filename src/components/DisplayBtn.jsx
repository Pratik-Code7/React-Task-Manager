import { useState } from "react";
const DisplayBtn = ({
  idx,
  tasks,
  setTask,
  edited,
  setEdited,
  setInputval,
  inputval,
}) => {
  const deletetask = (idx) => {
    const update = tasks.filter((_, i) => i !== idx);
    setTask(update);
  };
  const edit = (idx) => {
    setEdited(true);
    setInputval(tasks[idx]);
  };
  const save = (idx) => {
    setEdited(false);
    setTask(
      tasks.map((elem, i) => {
        return i == idx ? inputval : elem;
      }),
    );
  };
  return (
    <div className=" flex gap-2 p-1 ">
      {edited ? (
        <button
          className="w-10 text-slate-600 hover:bg-indigo-50 shadow-lg rounded p-1 flex justify-center items-center"
          onClick={() => save(idx)}
        >
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      ) : (
        <button
          className="w-10 text-slate-600 hover:bg-indigo-50 shadow-lg rounded p-1 flex justify-center items-center"
          onClick={() => edit(idx)}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      )}

      <div className="w-10 text-slate-600 hover:bg-indigo-50 shadow-lg rounded p-1 flex justify-center items-center">
        <select name="" id="">
          <option value="">⏳ </option>
          <option value="">✅ </option>
          <option value="">❌</option>
        </select>
      </div>
      <button
        className="w-10 text-slate-600 hover:bg-indigo-50 shadow-lg rounded p-1 flex justify-center items-center"
        onClick={() => deletetask(idx)}
      >
        <i className="fa-solid fa-delete-left"></i>
      </button>
    </div>
  );
};

export default DisplayBtn;
