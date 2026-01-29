import { useState } from "react";
const Displayitem = ({ task, edited, setEdited, inputval, setInputval }) => {
  return (
    <div className="bg-white shadow-lg text-slate-800 border-slate-200  w-full  flex items-center p-4 overflow-x-auto rounded-xl me-1 ">
      {edited ? (
        <input
          type="text"
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
        />
      ) : (
        <p>{task}</p>
      )}
    </div>
  );
};

export default Displayitem;
