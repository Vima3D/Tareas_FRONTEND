import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido al Mini Blog</h1>
      <p>
        Explora nuestros <Link to="/posts">posts</Link>.
      </p>
    </div>
  );
}
