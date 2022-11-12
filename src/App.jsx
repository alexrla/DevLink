import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Register from './pages/Register/Register';
import Login from "./pages/Login/Login";
import Admin from './pages/Admin/Admin';
import Profile from './pages/Profile/Profile';
import Config from "./pages/Config/Config";
import Error from "./pages/Error/Error";

import Private from "./routes/Private";

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
    element: <Private><Admin /></Private>
  },
  {
    path: "/manage-account",
    element: <Private><Config /></Private>
  },
  {
    path: "/my-links/:id",
    element: <Profile />
  },
  {
    path: "*",
    element: <Error />
  }
]);

export { router };