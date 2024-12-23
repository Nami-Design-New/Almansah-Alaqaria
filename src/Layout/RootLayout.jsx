import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import i18n from "../utils/i18n";
import Header from "../ui/Header";
import Footer from "./../ui/Footer";
import AuthModal from "../ui/modals/AuthModal";

export default function RootLayout() {
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </Fragment>
  );
}
