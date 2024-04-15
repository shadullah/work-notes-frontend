import axios from "axios";
import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/");
        console.log(res.data);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTasks();
  }, []);
  return [tasks];
};

export default useTasks;
