import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  titulo?: string;
  descripcion?: string;
};

const Card = ({ children, titulo, descripcion }: Props) => {
  return (
    <div className="card" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title"> {titulo} </h5>
        <p className="card-text"> {descripcion} </p>
      </div>
      {children}
    </div>
  );
};

export default Card;
