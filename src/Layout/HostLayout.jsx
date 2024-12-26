import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function HostLayout() {
  return (
    <>
      <Header isHost={true} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
