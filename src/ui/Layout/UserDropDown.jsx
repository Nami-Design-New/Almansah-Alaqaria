import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="user_btn">
        <img src="/images/icons/user.svg" alt="user_alt" />
        حسابى
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/login">
          تسجيل الدخول
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/register">
          إنشاء حساب
        </Dropdown.Item>
        <span className="line" />
        <Dropdown.Item as={Link} to="/help">
          المساعدة
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
