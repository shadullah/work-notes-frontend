import useTasks from "../../../../hooks/useTasks";
import KeenSlider from "./KeenSlider";
import CountUp from "react-countup";

const Infomation = () => {
  const [tasks] = useTasks();

  const completedtask = tasks.filter((task) => task.completed).length;
  const inProgress = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <div className="flex">
        <div className="w-1/2 mr-2">
          <h3 className="text-xl">Information</h3>
          <div className="grid grid-cols-3 gap-6 mt-6 h-32">
            <div className="bg-red-400 p-4 rounded-md w-full">
              <h4 className="text-xl mb-3">All Tasks</h4>
              <p>
                <span className="text-4xl">
                  <CountUp start={0} end={tasks.length} duration={5} />{" "}
                </span>{" "}
                Tasks
              </p>
            </div>
            <div className="bg-indigo-400 p-4 rounded-md">
              <h4 className="text-xl mb-3">Completed</h4>
              <p>
                <span className="text-4xl">
                  <CountUp start={0} end={completedtask} duration={5} />{" "}
                </span>{" "}
                Tasks
              </p>
            </div>
            <div className="bg-cyan-400 p-4 rounded-md">
              <h4 className="text-xl mb-3">In Progress</h4>
              <p>
                <span className="text-4xl">
                  <CountUp start={0} end={inProgress} duration={5} />{" "}
                </span>{" "}
                Tasks
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-6">
          <h3 className="text-xl text-center">Priorities</h3>
          <KeenSlider />
        </div>
      </div>
    </>
  );
};

export default Infomation;
