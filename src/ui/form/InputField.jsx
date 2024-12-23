import { Form } from "react-bootstrap";

export default function InputField({ label, hint, ...props }) {
  return (
    <div className="form_field">
      {label && <label htmlFor={props.id}>{label} {hint && <span>({hint})</span>}</label>}
      <Form.Control {...props} />
    </div>
  );
}
