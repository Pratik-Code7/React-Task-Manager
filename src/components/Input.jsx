import { useState } from "react";

const Input = ({ addtask }) => {
  const [input, setInput] = useState("");
  const handleinput = () => {
    if (input.trim() != "") {
      addtask(input);
      setInput("");
    }
  };

  return (
    <div className=" h-14 w-full flex rounded-xl gap-1 overflow-hidden justify-between p-1">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="bg-slate-100 rounded-xl text-center w-72 text-slate-800"
        placeholder=" Add Your Task"
      />
      <button
        className="bg-indigo-500 w-14 text-white rounded-xl"
        onClick={handleinput}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
