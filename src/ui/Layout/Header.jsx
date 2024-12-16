import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import ThemeDropDown from "./ThemeDropDown";
import LanguageDropDown from "./LanguageDropDown";

export default function Header() {
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
        <div className="actions">
          <ThemeDropDown />
          <LanguageDropDown />
          <UserDropDown />
        </div>
      </nav>
    </header>
  );
}
