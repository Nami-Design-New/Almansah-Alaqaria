import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import AuthModal from "../ui/modals/AuthModal";

export default function HostLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header isHost={true} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}
