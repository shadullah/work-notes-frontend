import useUsers from "../../../hooks/useUsers";

const Profile = () => {
  const [users1] = useUsers();

  //    direct korle cors issue dey
  //   useEffect(() => {
  //     fetch(`http://127.0.0.1:8000/todo/users/1`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [user_id]);

  return (
    <div>
      <h1 className="text-3xl text-center my-12">Profile</h1>
      <p>{users1.username}</p>
      <p>{users1.email}</p>
    </div>
  );
};

export default Profile;
