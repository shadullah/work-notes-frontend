import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit_profile = () => {
  const { id } = useParams();
  //   const user_id = localStorage.getItem("userId");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get(
          `https://work-notes-server.onrender.com/todo/users/${id}`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(`token ${localStorage.getItem("token")}`);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getUserInfo();
  }, [id]);

  return (
    <div className="text-gray-200 h-screen bg-gray-800">
      <h1 className="text-center text-3xl py-6 md:py-12 font-bold">
        Edit Profile
      </h1>
      <div className="block md:flex justify-between items-center p-3 md:p-12">
        <div className="w-full md:w-1/2 text-center m-2 md:m-6">
          <div className="mx-auto text-center border-2 border-gray-200">
            <img className="h-44 md:h-64" src="" alt="#" />
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <h5>Link: </h5>
            <input
              className="my-6 appearance-none border-b-2 bg-gray-800 border-violet-500 w-1/2 py-2 px-3 text-gray-300 outline-none"
              type="url"
            />
            <br />
          </div>
          <button className="mt-6 py-2 px-3 rounded-lg bg-cyan-500">
            Save Image
          </button>
        </div>
        <div className="w-full md:w-1/2 m-2 md:m-6 text-center">
          <div className="flex items-center space-x-3 justify-center">
            <div>
              <h3>Username:</h3>
              <input
                className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500  py-2 px-3 text-gray-300 outline-none"
                type="text"
              />
            </div>
            <div>
              <h3>Full name:</h3>
              <input
                className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500  py-2 px-3 text-gray-300 outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="my-6">
            <h3>Email:</h3>
            <input
              className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500 w-1/2 py-2 px-3 text-gray-300 outline-none"
              type="email"
            />
          </div>

          <div className="text-center mt-6">
            <button className=" py-2 px-3 rounded-lg bg-cyan-500">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_profile;
