import { Form } from "react-bootstrap";

export default function SelectField({
  label,
  options,
  hiddenOption,
  ...props
}) {
  return (
    <div className="form_field">
      {label && <label htmlFor={props.id}>{label}</label>}
      <Form.Select {...props}>
        {hiddenOption && (
          <option value={hiddenOption.value} disabled>
            {hiddenOption.label}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
