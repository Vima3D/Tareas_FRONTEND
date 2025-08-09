import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ? "/" : "https://dattebayo-api.onrender.com", // En producción
});

// Interceptor de peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (config.headers) {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : `Bearer token-invalido`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuestas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("No autorizado. Tiene que logearse");
      // Aquí podrías redirigir con useNavigate()
    }
    return Promise.reject(error);
  }
);

export default api;
