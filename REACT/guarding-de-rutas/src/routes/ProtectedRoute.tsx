import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "../context/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const [redireccionar, setRedireccionar] = useState(false);

  useEffect(() => {
    if (!user) {
      alert("Debe iniciar sesión antes de ir al dashboard");
      setRedireccionar(true);
    }
  }, [user]);

  if (redireccionar) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    // Evita renderizar hijos antes de redirigir
    return null;
  }

  return children;
};

export default ProtectedRoute;
