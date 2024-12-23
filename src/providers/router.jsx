import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";

import Home from "../routes/Home";
import PageNotFound from "../routes/PageNotFound";
import Properties from "../routes/Properties";
import PropertyDetails from "../routes/PropertyDetails";

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
      {
        path: "properties",
        children: [
          {
            index: true,
            element: <Properties />,
          },
          {
            path: ":id",
            element: <PropertyDetails />,
          },
        ],
      },
    ],
  },
]);
