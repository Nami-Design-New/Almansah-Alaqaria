import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({ label, name, ...props }) {
  return (
    <div className="form_field">
      {label && <label htmlFor={props?.id}>{label}</label>}
      <PhoneInput
        country={"sa"}
        enableSearch={true}
        inputProps={{
          name: name,
          id: props?.id,
        }}
        onChange={(phone) => props.onChange(phone, name)}
      />
    </div>
  );
}
