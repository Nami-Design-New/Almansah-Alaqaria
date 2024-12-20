import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import i18n from "./utils/i18n";

export default function App() {
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
    toast.info("Language changed to " + lang.toUpperCase());
  }, [lang]);

  return (
    <>
      <Toaster
        richColors
        style={{ right: "24px" }}
        position="bottom-right"
        expand={false}
        duration={1000}
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}
