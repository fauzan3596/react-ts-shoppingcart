import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
