import { useEffect, useState } from "react";
import Card from "./components/Card";

interface Personal {
  birthdate?: string;
  clan?: string;
}

interface Character {
  id: number;
  name: string;
  images: string[];
  personal: Personal;
}

function App() {
  const BASE_URL = "https://dattebayo-api.onrender.com";
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${BASE_URL}/characters`);
        const json = await response.json();
        console.log("API response:", json);
        setData(json.characters);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  if (data.length === 0) {
    return <p className="text-center mt-5">Cargando personajes...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-center fw-bold my-4">Naruto API</h1>
      {/* <Card
        imgUrl="https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
        name="Naruto Uzumaki"
        birthdate="166 cm"
        clan="Uzumaki"
      /> */}

      <div className="row">
        {data.map((character) => (
          <div key={character.id} className="col-md-4 mb-4">
            <Card
              imgUrl={character.images[0]}
              name={character.name}
              birthdate={character.personal.birthdate ?? "Desconocido"}
              clan={character.personal.clan ?? "Desconocido"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
