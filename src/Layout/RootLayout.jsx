import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "./../ui/Footer";
import AuthModal from "../ui/modals/AuthModal";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}
