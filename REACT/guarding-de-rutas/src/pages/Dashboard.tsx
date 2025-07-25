import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => logout(), 5);
  };

  return (
    <>
      <h2>
        ¡ Bienvenido al <br />
        Dashboard protegido !
      </h2>
      <button onClick={handleClick}>Cerrar Sesión</button>
    </>
  );
};

export default Dashboard;
