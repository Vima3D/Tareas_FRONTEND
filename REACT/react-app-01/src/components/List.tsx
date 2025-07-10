import { useState } from "react";

type Props = {
  lista: string[];
  className?: string;
};

const List = ({ lista, className }: Props) => {
  const [indexActual, setIndexActual] = useState(0);

  return (
    <ul className={`list-group ${className ?? ""}`}>
      {lista.map((nombre, index) => (
        <li
          onClick={() => setIndexActual(index)}
          key={index}
          className={`list-group-item ${indexActual == index ? "active" : ""}`}
        >
          {nombre}
        </li>
      ))}
    </ul>
  );
};

export default List;
