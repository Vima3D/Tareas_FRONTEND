import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const listaMiVillanoFavorito = ["Gru", "Vector", "Margo"];
  const [data, setData] = useState(listaMiVillanoFavorito);
  const agregarMinion = () => setData([...data, "Minion"]);
  const quitarMinion = () => setData(data.slice(0, -1));

  return (
    <>
      <Card titulo="Ejercicio 1" descripcion="Este es un parrafo">
        <List className="p-3" lista={["Bob", "Mark", "Rick"]} />
        <Button />
      </Card>
      <br />
      <Card
        titulo="Ejercicio 2"
        descripcion="Aqui puedes agregar y quitar Minions"
      >
        <div className="d-grid gap-3 d-md-flex justify-content-md-center">
          <Button text="Agregar" onClick={agregarMinion} />
          <Button text="Quitar" onClick={quitarMinion} />
        </div>
        <br />
        <List className="p-3" lista={data} />
      </Card>
    </>
  );
}

export default App;
