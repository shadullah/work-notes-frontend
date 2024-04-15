import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const user_id = localStorage.getItem("userId");
  const [users1, setusers1] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/todo/users/${user_id}/`
        );
        console.log(res.data);
        setusers1(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [user_id]);

  return [users1];
};

export default useUsers;
