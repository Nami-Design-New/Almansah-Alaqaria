import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { setShowAuthModal } from "../../redux/slices/showAuthModal";
import { useDispatch } from "react-redux";

export default function UserDropDown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  return (
    <Dropdown>
      <Dropdown.Toggle className="user_btn">
        <img src="/icons/user.svg" alt="user_alt" />
        {t("myAccount")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => dispatch(setShowAuthModal(true))}>
          {t("login")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => dispatch(setShowAuthModal(true))}>
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
