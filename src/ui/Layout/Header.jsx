import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <div className="actions">
          <button >
            <img src="/images/icons/user.svg" alt="user_alt" />
            حسابى
          </button>
        </div>
      </nav>
    </header>
  );
}
