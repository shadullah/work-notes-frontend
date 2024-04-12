import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home/Home";
import TaskDetails from "../component/Tasks/TaskDetails";
import Login from "../component/Login/Login";
import Signup from "../component/SignUp/Signup";
import Profile from "../component/pages/Profile/Profile";
import Add_task from "../component/Tasks/Add_task";
import Update_task from "../component/Tasks/Update_task";
import PrivateRoute from "./PrivateRoute";

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
        path: "addTask",
        element: <Add_task></Add_task>,
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
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "/:id",
        element: <TaskDetails></TaskDetails>,
      },
      {
        path: "/:id/update",
        element: (
          <PrivateRoute>
            <Update_task></Update_task>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
