import { useRef } from "react";

function FocusInput() {
  const input = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    input.current?.focus();
    if (input.current) {
      input.current.value = "Hola Mundo";
    }
  };

  return (
    <div>
      <p>Enfocamos el input usando useRef y le damos un valor</p>
      <input type="text" ref={input} />
      <button onClick={handleClick}>Enfocar input</button>
    </div>
  );
}

export default FocusInput;
