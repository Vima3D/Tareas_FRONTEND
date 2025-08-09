import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";
import TokenToggleButton from "./components/TokenToggleButton";

function App() {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, []);

  return (
    <div>
      <h1>Lista de Personajes</h1>
      <TokenToggleButton hasToken={hasToken} setHasToken={setHasToken} />
      <Characters tokenChanged={hasToken} />
    </div>
  );
}

export default App;
