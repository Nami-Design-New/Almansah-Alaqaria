import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./../ui/Layout/RootLayout";
import Home from "../routes/Home";
import PageNotFound from "../routes/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
