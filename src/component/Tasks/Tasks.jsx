import SingleTask from "./SingleTask";
import Infomation from "../Home/Home/Infomation/Infomation";
import useTasks from "../../hooks/useTasks";
import { CgGoogleTasks } from "react-icons/cg";
import Tips from "../Tips/Tips";
import { BsThreeDotsVertical } from "react-icons/bs";
import KeenSlider from "../Home/Home/Infomation/KeenSlider";

const Tasks = () => {
  const [tasks] = useTasks();
  return (
    <>
      <div className="bg-gray-800 text-white px-6 md:px-12 pb-12">
        {tasks.length !== 0 ? (
          <>
            <div className="block md:flex justify-between">
              <div className="w-full">
                <div className="block md:flex">
                  <div className="w-full md:w-1/2">
                    <Infomation />{" "}
                  </div>
                  <div className="w-full md:w-1/2">
                    <KeenSlider />{" "}
                  </div>
                </div>

                <div className="mt-6 md:mt-12">
                  <h1 className="text-4xl italic flex items-center">
                    All Tasks{" "}
                    <span className="ml-3 text-3xl text-gray-400">
                      <CgGoogleTasks />
                    </span>
                  </h1>
                  <p className="mt-3">
                    Managing your all tasks with easy task management
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg my-6 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h1 className="bg-gray-800 font-bold p-3 rounded-full text-red-400">
                        Urgent{" "}
                        <span className="bg-red-400 text-white p-2 rounded-full">
                          {
                            tasks?.filter(
                              (task) => task?.priority[0]?.name === "Urgent"
                            ).length
                          }
                        </span>
                      </h1>
                      <p>
                        <BsThreeDotsVertical />
                      </p>
                    </div>
                    {tasks.length !== 0 ? (
                      tasks
                        .filter((task) => task?.priority[0]?.name == "Urgent")
                        .map((task, index) => (
                          <SingleTask key={index} task={task} />
                        ))
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="">
                    <div className="flex items-center justify-between">
                      <h1 className="bg-gray-800 font-bold p-3 rounded-full text-indigo-400">
                        Important{" "}
                        <span className="bg-indigo-400 text-white p-2 rounded-full">
                          {
                            tasks.filter(
                              (task) => task?.priority[0]?.name === "Important"
                            ).length
                          }
                        </span>
                      </h1>
                      <p>
                        <BsThreeDotsVertical />
                      </p>
                    </div>
                    {tasks.length !== 0 ? (
                      tasks
                        .filter(
                          (task) => task?.priority[0]?.name == "Important"
                        )
                        .map((task, index) => (
                          <SingleTask key={index} task={task} />
                        ))
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h1 className="bg-gray-800 font-bold p-3 rounded-full text-cyan-400">
                        Regular{" "}
                        <span className="bg-cyan-400 text-white p-2 rounded-full">
                          {
                            tasks.filter(
                              (task) => task?.priority[0]?.name === "Regular"
                            ).length
                          }
                        </span>
                      </h1>
                      <p>
                        <BsThreeDotsVertical />
                      </p>
                    </div>
                    {tasks.length !== 0 ? (
                      tasks
                        .filter((task) => task?.priority[0]?.name == "Regular")
                        .map((task, index) => (
                          <SingleTask key={index} task={task} />
                        ))
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-white">
                <h2 className="text-2xl mb-6 ml-6">Tips</h2>
                <Tips />
              </div>
            </div>
          </>
        ) : (
          <h1>No Tasks Found</h1>
        )}
      </div>
    </>
  );
};

export default Tasks;
