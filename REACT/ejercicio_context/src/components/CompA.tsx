import type { ChangeEvent } from "react";
import { useDataContext } from "../contexts/dataContext";

function CompA() {
  const { contextData, setContextData } = useDataContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContextData(event.target.value);
  };

  return (
    <div>
      <h2>Componente A</h2>
      <p>Dato: {contextData} </p>
      <input type="text" value={contextData} onChange={handleChange} />
    </div>
  );
}

export default CompA;
