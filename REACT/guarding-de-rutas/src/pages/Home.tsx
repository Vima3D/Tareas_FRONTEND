import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home pública</h2>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </>
  );
};

export default Home;
