import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update_task = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [priority, setPriority] = useState([]);
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [complete, setComplete] = useState("");
  const [prior, setPrio] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/todo/priority_choice/`)
      .then((res) => res.json())
      .then((data) => setPriority(data));

    axios
      .get("http://127.0.0.1:8000/todo/users/", {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/${id}/`);
        console.log(res.data);
        setTitle(res.data?.title);
        setDes(res.data?.description);
        setPrio(res.data?.priority);
        setComplete(res.data?.completed);
      } catch (err) {
        console.log(err);
      }
    };
    getTask();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    // const complete = e.target.completed.value;
    const complete = e.target.querySelector('input[type="checkbox"]').checked;

    try {
      await axios.put(
        `http://localhost:8000/api/${id}/`,
        {
          title: title,
          description: description,
          completed: complete,
          date: new Date(),
          priority: priority,
          user: user,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-12 font-bold">Update Note</h1>

      <form onSubmit={handleUpdate} className="mx-4 md:mx-14 py-6 md:py-16">
        <div>
          <div className="w-full px-3 mb-6">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700 "
              name="title"
              placeholder="Title"
              type="text"
              value={title}
              required
            />
          </div>

          <div className="w-full px-3 mb-6">
            <textarea
              onChange={(e) => setDes(e.target.value)}
              className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700"
              name="description"
              type="text"
              value={des}
              placeholder="Write notes here..."
              required
            />
          </div>
        </div>
        <div className="w-full px-3 mb-6">
          <select
            required
            className="border-b-2 border-violet-500 w-full py-2 px-3 text-gray-400 font-bold"
            name="priority"
            id="priority"
            value={prior}
            onChange={(e) => setPrio(e.target.value)}
          >
            <option className="" value="" disabled>
              Set Priority here
            </option>
            {priority.map((prio) => (
              <option key={prio.id} value={prio.name}>
                {prio.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full px-3 mb-6">
          <label className="text-gray-600  mr-3 font-bold ml-3">
            Mark as Complete
          </label>
          <input
            type="checkbox"
            onChange={(e) => setComplete(e.target.checked)}
            checked={complete}
          />
        </div>
        <div className="text-center mt-6">
          <input
            className="bg-gray-400 w-full py-3 cursor-pointer rounded-lg font-bold"
            type="submit"
            value="Update Note"
          />
        </div>
      </form>
    </div>
  );
};

export default Update_task;