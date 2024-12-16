import { Dropdown, Form } from "react-bootstrap";

export default function LanguageDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="rounded_btn">
        <i className="fa-sharp fa-regular fa-globe"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => e.stopPropagation()}>
          <Form.Switch label="الترجمة التلقائية" />
        </Dropdown.Item>
        <span className="line" />
        <Dropdown.Item>English</Dropdown.Item>
        <Dropdown.Item>العربية</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
