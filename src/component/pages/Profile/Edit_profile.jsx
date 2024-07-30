import axios from "axios";
import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import { TailSpin } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Edit_profile = () => {
  const [userN, setUserN] = useState("");
  const [, setFirst] = useState("");
  const [, setLast] = useState("");
  const [full, setFull] = useState("");
  const [email, setEmail] = useState("");
  const [users1, loading] = useUsers();
  const [pic, setPic] = useState(null);
  const [load, setloading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (users1 && users1.username) {
      setUserN(users1.username);
      setFirst(users1.first_name);
      setLast(users1.last_name);
      setFull(`${users1.first_name} ${users1.last_name}`);
      setEmail(users1.email);
    }
  }, [users1]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/todo/profiles/`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        });
        const profiles = res.data;
        const userProfile = profiles.find(
          (profile) => profile.user === users1.id
        );
        if (userProfile) {
          setPic(userProfile.img);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setloading(false);
      }
    };
    getProfile();
  }, [users1]);

  const handleSaveChange = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const nameParts = fullName.split(" ");
    const first_n = nameParts[0];
    const last_n = nameParts.slice(1).join(" ");

    try {
      await axios.put(
        `http://127.0.0.1:8000/todo/users/${users1.id}/`,
        {
          username: username,
          first_name: first_n,
          last_name: last_n,
          email: email,
        },
        {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/profile/${users1.id}`);
      toast.success("Profile Information saved successfully", {
        duration: 4000,
      });
    } catch (err) {
      toast.error("Error in saving profile change", { duration: 3000 });
      console.log("Error in saving profile change", err);
      throw err;
    }
  };

  return (
    <div className="text-gray-200 h-screen bg-gray-800">
      <h1 className="text-center text-3xl py-6 md:py-12 font-bold">
        Edit Profile
      </h1>
      <div className="block md:flex justify-between items-center p-3 md:p-12">
        <div className="w-full md:w-1/2 text-center m-2 md:m-6">
          {load ? (
            <>
              <div className="flex justify-center items-center h-64">
                <TailSpin
                  visible={true}
                  height="80"
                  width="80"
                  color="gray"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto text-center">
                <img
                  className="h-44 md:h-64 mx-auto rounded-full"
                  src={pic}
                  alt="#"
                />
              </div>
            </>
          )}
          <div className="flex items-center space-x-2 justify-center">
            <h5>Link: </h5>
            <textarea
              className="my-6 appearance-none border-b-2 bg-gray-800 border-violet-500 w-1/2 py-2 px-3 text-gray-300 outline-none"
              type="url"
              rows="5"
              value={pic}
              name="url"
            />
            <br />
          </div>
          <button className="mt-6 py-2 px-3 rounded-lg bg-cyan-500">
            Save Image
          </button>
        </div>

        {/*  */}
        <form onSubmit={handleSaveChange}>
          <div className="w-full md:w-1/2 m-2 md:m-6 text-center">
            {loading ? (
              <>
                <div className="flex justify-center items-center h-64">
                  <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="gray"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-3 justify-center">
                  <div>
                    <h3>Username:</h3>
                    <input
                      className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500  py-2 px-3 text-gray-300 outline-none"
                      type="text"
                      value={userN}
                      name="username"
                      onChange={(e) => setUserN(e.target.value)}
                    />
                  </div>
                  <div>
                    <h3>Full name:</h3>
                    <input
                      className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500  py-2 px-3 text-gray-300 outline-none"
                      type="text"
                      value={full}
                      name="fullName"
                      onChange={(e) => {
                        setFull(e.target.value);
                        const nameParts = e.target.value.split(" ");
                        setFirst(nameParts[0]);
                        setLast(nameParts.slice(1).join(" "));
                      }}
                    />
                  </div>
                </div>

                <div className="my-6">
                  <h3>Email:</h3>
                  <input
                    className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500 py-2 px-3 text-gray-300 outline-none"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="text-center mt-6">
              <input
                type="submit"
                value="Save Changes"
                className=" py-2 px-3 rounded-lg bg-cyan-500 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_profile;
