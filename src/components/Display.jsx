import Displayitem from "./Displayitem";
import DisplayBtn from "./DisplayBtn";
import { useState } from "react";

const Display = ({ task, idx, tasks, setTask }) => {
  const [edited, setEdited] = useState(false);
  const [inputval, setInputval] = useState(task);
  return (
    <div>
      <div className=" h-14 w-full flex rounded-xl overflow-hidden  p-1 ">
        <Displayitem
          task={task}
          edited={edited}
          setEdited={setEdited}
          setInputval={setInputval}
          inputval={inputval}
        />
        <DisplayBtn
          key={idx}
          tasks={tasks}
          setTask={setTask}
          idx={idx}
          edited={edited}
          setEdited={setEdited}
          setInputval={setInputval}
          inputval={inputval}
        />
      </div>
    </div>
  );
};

export default Display;
