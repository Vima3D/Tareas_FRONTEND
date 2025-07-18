import { useState, useRef } from "react";

function Timer() {
  const intervalRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const [displayTime, setDisplayTime] = useState(0);

  const iniciarTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      timeRef.current = timeRef.current + 1;
    }, 100);
  };

  const detenerTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const actualizarTimer = () => {
    setDisplayTime(timeRef.current);
  };

  return (
    <div>
      <p>
        Iniciamos un crónometro y guardamos valores en variable con useRef{" "}
        <br />
        Así evitamos un nuevo render en cada cambio. Solo hacemos render nuevo
        al solicitar el dato
      </p>
      <button onClick={iniciarTimer}>Iniciar</button>
      <button onClick={detenerTimer}>Detener</button>
      <button onClick={actualizarTimer}>Mostrar tiempo actual</button>
      <p>Tiempo Actual: {displayTime} </p>
    </div>
  );
}

export default Timer;
