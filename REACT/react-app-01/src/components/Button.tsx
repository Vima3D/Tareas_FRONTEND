import { useState } from "react";

type Props = {
  className?: string;
  text?: string;
  onClick?: () => void;
};

const Button = ({ className = "", text, onClick }: Props) => {
  const [loading, setLoading] = useState(false);

  // Use prop value if provided, otherwise internal state

  const btnStyle = loading ? "secondary" : "primary";
  const label = loading ? "Cargando..." : text || "Haz Click";

  const handleClick = () => {
    if (onClick) onClick();
    else setLoading(true); // Only set local state if not controlled
  };

  return (
    <button
      type="button"
      className={`btn btn-${btnStyle} ${className}`}
      onClick={handleClick}
      disabled={loading}
    >
      {label}
    </button>
  );
};

export default Button;
