import { useState } from "react";

function BuggyCounter() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    // Simula un error al llegar a 5
    throw new Error("¡Contador falló en 5!");
  }

  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default BuggyCounter;
