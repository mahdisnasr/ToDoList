import "./Input.css";

function Input({
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;