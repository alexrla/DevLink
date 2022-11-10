import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Admin from './pages/Admin/Admin';
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign-in",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "*",
    element: <Error />
  }
]);

export { router };