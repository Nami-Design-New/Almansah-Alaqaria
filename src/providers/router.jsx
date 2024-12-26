import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import HostLayout from "./../Layout/HostLayout";

import Home from "../routes/Home";
import Chats from "../routes/host/Chats";
import Properties from "../routes/Properties";
import PageNotFound from "../routes/PageNotFound";
import ListProperty from "../routes/host/ListProperty";
import PropertyDetails from "../routes/PropertyDetails";
import MyProperties from "../routes/host/MyProperties";
import Reservations from "../routes/host/Reservations";

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
  {
    path: "/host",
    element: <HostLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "my-listings",
        children: [
          {
            index: true,
            element: <MyProperties />,
          },
          {
            path: ":id",
            element: <PropertyDetails />,
          },
        ],
      },
      {
        path: "list-property",
        element: <ListProperty />,
      },
      {
        path: "chats",
        element: <Chats />,
      },
    ],
  },
]);
