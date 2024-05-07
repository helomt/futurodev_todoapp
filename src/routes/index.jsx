import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";


import { Template } from "../template";
import { About } from "../pages/about";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Template />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Não encontrado! </h1>
      </div>
    ),
  },
]);
