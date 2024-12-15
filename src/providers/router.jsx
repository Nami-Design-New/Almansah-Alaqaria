import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./../ui/Layout/RootLayout";
import Home from "../routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
