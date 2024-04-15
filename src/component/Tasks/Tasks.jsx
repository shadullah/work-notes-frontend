import SingleTask from "./SingleTask";
import Infomation from "../Home/Home/Infomation/Infomation";
import useTasks from "../../hooks/useTasks";

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
                {tasks.map((task, index) => (
                  <SingleTask key={index} task={task} />
                ))}
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
