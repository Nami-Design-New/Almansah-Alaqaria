import { Form } from "react-bootstrap";

export default function InputField({ label, hint, icon, img, ...props }) {
  return (
    <div className="form_field">
      {label && (
        <label htmlFor={props.id}>
          {icon} {img && <img className="to_dark" src={img} alt="img" />}{" "}
          {label}
          {hint && <span>({hint})</span>}
        </label>
      )}
      <Form.Control {...props} />
    </div>
  );
}
