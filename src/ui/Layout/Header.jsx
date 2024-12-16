import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import UserDropDown from "./UserDropDown";
import ThemeDropDown from "./ThemeDropDown";
import LanguageDropDown from "./LanguageDropDown";

export default function Header() {
  const { t } = useTranslation();
  const { theme } = useSelector((state) => state.theme);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img
            src={
              theme === "light" ? "/images/logo.svg" : "/images/logo-dark.svg"
            }
            alt="logo"
          />
        </Link>
        <div className="nav_links">
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
          <NavLink to="/ads">{t("ads")}</NavLink>
          <NavLink to="/add-ad">{t("add_ad")}</NavLink>
          <NavLink to="/contact">{t("contact")}</NavLink>
        </div>
        <div className="actions">
          <ThemeDropDown />
          <LanguageDropDown />
          <UserDropDown />
        </div>
      </nav>
    </header>
  );
}
