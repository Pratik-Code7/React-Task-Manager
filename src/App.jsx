import Input from "./components/Input";
import Display from "./components/Display";
import { useState } from "react";
const App = () => {
  const [task, setTask] = useState([]);
  const addtask = (newtask) => {
    setTask((prev) => [...prev, newtask]);
  };
  return (
    <div className="bg-slate-50 h-screen w-screen flex flex-col gap-1  items-center">
      <h1 className="text-2xl m-5 text-slate-700">Task Manager</h1>
      <div className="bg-white shadow-lg max-h-10/12 flex flex-col gap-2 px-3 py-5 rounded-3xl">
        <Input addtask={addtask} />
        <div className="flex-1  overflow-y-auto  flex flex-col gap-2">
          {task.map((elem, idx) => (
            <Display
              key={idx}
              task={elem}
              tasks={task}
              setTask={setTask}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
