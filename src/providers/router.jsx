import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import PageNotFound from "../routes/PageNotFound";
import RootLayout from "../Layout/RootLayout";

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
