import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;
