import { useDataContext } from "../contexts/dataContext";

function CompD() {
  const { contextData } = useDataContext();

  return (
    <div>
      <h2>Componente D</h2>
      <p>Dato: {contextData} </p>
    </div>
  );
}

export default CompD;
