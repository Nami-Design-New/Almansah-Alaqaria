import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({ label, ...props }) {
  return (
    <div className="form_field">
      {label && <label htmlFor={props?.id}>{label}</label>}
      <PhoneInput
        {...props}
        country={"sa"}
        enableSearch={true}
        onChange={(phone) => props.onChange(phone)}
      />
    </div>
  );
}
