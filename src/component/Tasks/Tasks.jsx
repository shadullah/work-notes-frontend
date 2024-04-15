import SingleTask from "./SingleTask";
import Infomation from "../Home/Home/Infomation/Infomation";
import useTasks from "../../hooks/useTasks";
import { CgGoogleTasks } from "react-icons/cg";

const Tasks = () => {
  const [tasks] = useTasks();
  return (
    <>
      <div className="bg-gray-800 text-white px-12">
        {tasks.length !== 0 ? (
          <>
            <div className="flex justify-between">
              <div className="w-full">
                <Infomation />
                <div className="mt-12">
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

                <div className="grid grid-cols-3 gap-6">
                  {tasks.map((task, index) => (
                    <SingleTask key={index} task={task} />
                  ))}
                </div>
              </div>
              <div className="w-1/3 text-white">Row</div>
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
