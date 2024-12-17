import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function UserDropDown() {
  const { t } = useTranslation();
  return (
    <Dropdown>
      <Dropdown.Toggle className="user_btn">
        <img src="/icons/user.svg" alt="user_alt" />
        {t("myAccount")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/login">
          {t("login")}
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/register">
          {t("register")}
        </Dropdown.Item>
        <span className="line" />
        <Dropdown.Item as={Link} to="/help">
          {t("help")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
