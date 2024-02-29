import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/${id}/`);
        console.log(res.data);
        setTask(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTask();
  }, []);
  return (
    <div>
      <h1>Task Details</h1>

      <div className="my-12">
        <h1>Title: {task.title}</h1>
        <p>{task.description}</p>
        <p>Status: {task.completed ? <>Completed</> : <>Not Completed</>}</p>
        <p>{task.date}</p>
        <p>Priority: {task.priority}</p>
        <p>Author: {task?.user?.username}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
