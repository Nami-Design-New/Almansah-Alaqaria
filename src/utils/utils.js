export const handlePhoneChange = (value, name, setFormData) => {
  setFormData((prev) => ({ ...prev, [name]: value }));
};
