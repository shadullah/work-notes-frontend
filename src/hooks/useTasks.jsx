import axios from "axios";
import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const urls = [
    "https://work-notes-server.onrender.com/todo/list/",
    "http://localhost:8000/todo/list/",
  ];

  useEffect(() => {
    const getTasks = async () => {
      // let fetchedData = [];
      for (const url of urls) {
        try {
          const res = await axios.get(url, {
            // headers: {
            //   Authorization: `token ${localStorage.getItem("token")}`,
            // },
          });
          console.log(res.data);
          // fetchedData = res.data;
          // break;
          setTasks(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
      // setTasks(fetchedData);
      // setLoading(false);
    };
    getTasks();
  }, []);
  return [tasks, setTasks, loading];
};

export default useTasks;
