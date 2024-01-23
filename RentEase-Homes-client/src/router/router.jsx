import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";

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
]);

export default router;
