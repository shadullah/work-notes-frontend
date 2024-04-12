import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useParams, useNavigate, Link } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  const user_id = localStorage.getItem("userId");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
      navigate("/");
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };

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
        {user_id == task.user?.id ? (
          <>
            <div className="my-6">
              <button onClick={handleDelete} className="text-2xl mx-3">
                <MdOutlineDelete />
              </button>
              <Link to={`/${task.id}/update`}>
                <button className="text-2xl mx-3">
                  <FaEdit />
                </button>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TaskDetails;
