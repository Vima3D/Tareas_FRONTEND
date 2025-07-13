import { useDataContext } from "../contexts/dataContext";

function CompC() {
  const { contextData } = useDataContext();

  return (
    <div>
      <h2>Componente C</h2>
      <p>Dato: {contextData} </p>
    </div>
  );
}

export default CompC;
