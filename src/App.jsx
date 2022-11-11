import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Register from './pages/Register/Register';
import Login from "./pages/Login/Login";
import Admin from './pages/Admin/Admin';
import Profile from './pages/Profile/Profile';
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign-up",
    element: <Register />
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
    path: "/my-links",
    element: <Profile />
  },
  {
    path: "*",
    element: <Error />
  }
]);

export { router };