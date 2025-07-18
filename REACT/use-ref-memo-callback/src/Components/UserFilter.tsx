import { useState, useMemo } from "react";
import "../App.css";

function UserFilter() {
  const generateUsers = () => {
    const baseNames = [
      "Juan",
      "María",
      "Nicolás",
      "Pedro",
      "Karen",
      "Julio",
      "Carlos",
      "Sonia",
      "Rebeca",
    ];

    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      name: `${baseNames[i % baseNames.length]} ${i}`, // 'i % baseNames.length' lo que permite es tener un índice del 0 al 8 en este caso
    }));
  };

  const users = useMemo(() => generateUsers(), []);

  const [searchInput, setSearchInput] = useState("");
  const [inputButton, setInputButton] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // 👈 detecta si ya se hizo una búsqueda

  const filteredUsers = useMemo(() => {
    const inputLowerCase = inputButton.toLowerCase();
    return users.filter((user) =>
      user.name.toLowerCase().includes(inputLowerCase)
    );
  }, [inputButton, users]);

  const handleClick = () => {
    setInputButton(searchInput);
    setHasSearched(true); // 🔓 activa el renderizado de resultados
  };

  return (
    <div>
      <p>
        Buscamos un nombre en la lista de datos. <br />
        Cada vez que buscamos tiene que filtrar la lista de datos para buscar el
        nombre. <br />
        La idea es que con useMemo no filtre nuevamente si la lista y la
        busqueda son las mismas
      </p>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleClick}>Buscar Nombre</button>
      {hasSearched && (
        <>
          <p>Resultados: {filteredUsers.length}</p>
          <ul className="user-list">
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default UserFilter;
