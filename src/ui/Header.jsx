import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getResolvedTheme } from "../redux/slices/themeSlice";
import ThemeDropDown from "./header/ThemeDropDown";
import LanguageDropDown from "./header/LanguageDropDown";
import UserDropDown from "./header/UserDropDown";

export default function Header({ isHost = false }) {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.language);
  const resolvedTheme = useSelector(getResolvedTheme);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img
            src={
              resolvedTheme === "light"
                ? lang === "en"
                  ? "/images/logo-en.svg"
                  : "/images/logo.svg"
                : lang === "en"
                ? "/images/logo-dark-en.svg"
                : "/images/logo-dark.svg"
            }
            alt="logo"
          />
        </Link>

        <div className="nav_links">
          {!isHost && (
            <>
              <NavLink to="/">{t("home")}</NavLink>
              <NavLink to="/about">{t("about")}</NavLink>
              <NavLink to="/properties">{t("properties")}</NavLink>
              <NavLink to="/host/list-property">{t("add_ad")}</NavLink>
              <NavLink to="/contact">{t("contact")}</NavLink>
            </>
          )}
          {isHost && (
            <>
              <NavLink to="/host/reservations">{t("reservations")}</NavLink>
              <NavLink to="/host/my-listings">{t("myProperties")}</NavLink>
              <NavLink to="/host/list-property">{t("add_ad")}</NavLink>
              <NavLink to="/host/chats">{t("chats")}</NavLink>
            </>
          )}
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
