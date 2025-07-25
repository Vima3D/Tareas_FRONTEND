import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post no encontrado.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
      <button onClick={() => navigate("/")}>Inicio</button>
    </div>
  );
}
