import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./ui/Layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
    ],
  },
]);
