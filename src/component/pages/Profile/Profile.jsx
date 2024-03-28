import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const user_id = localStorage.getItem("userId");
  console.log(user_id);
  const [users1, setusers1] = useState([]);

  //    direct korle cors issue dey
  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:8000/todo/users/1`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [user_id]);

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

  return (
    <div>
      <h1 className="text-3xl text-center my-12">Profile</h1>
      <p>{users1.username}</p>
      <p>{users1.email}</p>
    </div>
  );
};

export default Profile;
