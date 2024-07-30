import axios from "axios";
import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import { TailSpin } from "react-loader-spinner";

const Edit_profile = () => {
  const [userN, setUserN] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");
  const [email, setEmail] = useState("");
  const [users1, loading] = useUsers();
  const [pic, setPic] = useState(null);
  const [load, setloading] = useState(true);

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
        const res = await axios.get(
          `https://work-notes-server.onrender.com/todo/profiles/`
        );
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
              <div className="mx-auto text-center border-2 border-gray-200">
                <img className="h-44 md:h-64 mx-auto" src={pic} alt="#" />
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
            />
            <br />
          </div>
          <button className="mt-6 py-2 px-3 rounded-lg bg-cyan-500">
            Save Image
          </button>
        </div>

        {/*  */}
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
                  />
                </div>
                <div>
                  <h3>Full name:</h3>
                  <input
                    className="my-2 appearance-none border-b-2 bg-gray-800 border-violet-500  py-2 px-3 text-gray-300 outline-none"
                    type="text"
                    value={full}
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
                  value={email}
                />
              </div>
            </>
          )}

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
