import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getResolvedTheme } from "../redux/slices/themeSlice";
import ThemeDropDown from "./header/ThemeDropDown";
import LanguageDropDown from "./header/LanguageDropDown";
import UserDropDown from "./header/UserDropDown";

export default function Header() {
  const { t } = useTranslation();
  const resolvedTheme = useSelector(getResolvedTheme);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img
            src={
              resolvedTheme === "light"
                ? "/images/logo.svg"
                : "/images/logo-dark.svg"
            }
            alt="logo"
          />
        </Link>

        <div className="nav_links">
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
          <NavLink to="/properties">{t("properties")}</NavLink>
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
