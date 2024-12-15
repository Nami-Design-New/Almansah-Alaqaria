import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </nav>
    </header>
  );
}
