import { Link } from "react-router-dom";

const SingleTask = ({ task }) => {
  const { title, date, completed, priority, user } = task;

  return (
    <>
      <div className="my-12 border-white border-2">
        <h1 className="hover:underline text-3xl">
          <Link to={`/${task.id}`}>Title: {title}</Link>
        </h1>
        {/* <p>{description}</p> */}
        <p>Status: {completed ? <>Completed</> : <>Not Completed</>}</p>
        <p>{date}</p>
        <p>Priority: {priority}</p>
        <p>Author: {user.username}</p>
      </div>
    </>
  );
};

export default SingleTask;
