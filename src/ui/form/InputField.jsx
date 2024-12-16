import { Form } from "react-bootstrap";

export default function InputField({ label, ...props }) {
  return (
    <div className="form_field">
      {label && <label htmlFor={props.id}>{label}</label>}
      <Form.Control {...props} />
    </div>
  );
}
