import axios from "axios";
import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/todo/list/", {
          // headers: {
          //   Authorization: `token ${localStorage.getItem("token")}`,
          // },
        });
        console.log(res.data);
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, []);
  return [tasks, setTasks, loading];
};

export default useTasks;
