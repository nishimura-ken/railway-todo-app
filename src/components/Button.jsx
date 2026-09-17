import "./Button.css";

function Button({
  children,
  type = "button",
  variant,
  className = "",
  disabled = false,
  onClick,
  onBlur,
}) {
  return (
    <button
      type={type}
      className={`app_button ${className}`}
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}

export default Button;