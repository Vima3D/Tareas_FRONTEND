import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>¡Página no encontrada!</h1>
      <button onClick={() => navigate("/")}>Volver a Inicio</button>
    </div>
  );
}
