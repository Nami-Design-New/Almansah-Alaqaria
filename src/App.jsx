import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Toaster expand={false} duration={2000} position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}
