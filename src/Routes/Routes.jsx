import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-toy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
