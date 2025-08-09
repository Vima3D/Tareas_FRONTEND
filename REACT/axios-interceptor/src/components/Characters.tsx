import { useEffect, useState } from "react";
import api from "./Api";

type Character = {
  id: number;
  name: string;
  images: string[];
  personal: {
    birthdate: string;
    clan?: string;
  };
};

type Props = {
  tokenChanged: boolean;
};

const Characters = ({ tokenChanged }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get<{ characters: Character[] }>("/characters")
      .then((response) => {
        console.log("API response:", response.data);
        setCharacters(response.data.characters);
        setError(null);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Error fetching characters: " + err.message);
      });
  }, [tokenChanged]);

  if (error) return <p>Error: {error}</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {characters.map((char) => (
        <li
          key={char.id}
          style={{
            marginBottom: "2rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "1rem",
          }}
        >
          <h2>{char.name}</h2>
          {char.images?.[0] && (
            <img
              src={char.images[0]}
              alt={char.name}
              style={{ maxWidth: "200px", height: "auto", borderRadius: "8px" }}
            />
          )}
          <p>
            <strong>Birthdate:</strong> {char.personal.birthdate || "Unknown"}
          </p>
          {char.personal.clan && (
            <p>
              <strong>Clan:</strong> {char.personal.clan}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Characters;
