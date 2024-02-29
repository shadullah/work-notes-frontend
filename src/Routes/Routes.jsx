import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home/Home";
import TaskDetails from "../component/Tasks/TaskDetails";
import Login from "../component/Login/Login";
import Signup from "../component/SignUp/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/:id",
        element: <TaskDetails></TaskDetails>,
      },
    ],
  },
]);
