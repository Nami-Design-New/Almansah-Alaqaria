import i18n from "./utils/i18n";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function App() {
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  return <RouterProvider router={router} />;
}
