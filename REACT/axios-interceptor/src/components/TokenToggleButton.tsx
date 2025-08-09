type Props = {
  hasToken: boolean;
  setHasToken: (value: boolean) => void;
};

const TokenToggleButton = ({ hasToken, setHasToken }: Props) => {
  const handleClick = () => {
    if (hasToken) {
      localStorage.removeItem("token");
      setHasToken(false);
    } else {
      localStorage.setItem("token", "mi-token-falso-123");
      setHasToken(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        backgroundColor: hasToken ? "green" : "#ccc",
        color: hasToken ? "white" : "black",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {hasToken ? "Token activo (click para eliminar)" : "Activar token"}
    </button>
  );
};

export default TokenToggleButton;
