import { useDataContext } from "../contexts/dataContext";

function CompB() {
  const { contextData } = useDataContext();

  return (
    <div>
      <h2>Componente B</h2>
      <p>Dato: {contextData} </p>
    </div>
  );
}

export default CompB;
