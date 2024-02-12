type ButtonType = {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "navbar";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = (props: ButtonType) => {
  const {className, disabled, children, type, variant, onClick} = props;

  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle += "btn-primary";
      break;
    case "secondary":
      buttonStyle += "btn-secondary";
      break;
    case "white":
      buttonStyle += "btn-white";
      break;
    case "navbar":
      buttonStyle += "btn-navbar";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
};
