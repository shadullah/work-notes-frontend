import axios from "axios";
import { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/");
        setTasks(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTasks();
  }, []);
  return (
    <>
      {tasks.length !== 0 ? (
        <>
          <div className="flex justify-between">
            <div className=" bg-slate-300 p-12">
              {tasks.map((task, index) => (
                <SingleTask key={index} task={task} />
              ))}
            </div>
            <div className="bg-gray-800 w-1/3 text-white">Row</div>
          </div>
        </>
      ) : (
        <h1>No Tasks Found</h1>
      )}
    </>
  );
};

export default Tasks;
