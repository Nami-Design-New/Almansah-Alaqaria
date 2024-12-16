import { Link } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import ThemeDropDown from "./ThemeDropDown";
import LanguageDropDown from "./LanguageDropDown";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
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
