import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./MiFormulario.css";

const schema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Debe ser un correo válido"),
  contrasena: z
    .string()
    .min(6, "Debe tener una longitud minima de 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

function MiFormulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className="mi-formulario" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre")} placeholder="Nombre" />
      {errors.nombre && <p>{errors.nombre.message}</p>}
      <input {...register("email")} placeholder="E-mail" />
      {errors.email && <p> {errors.email.message} </p>}
      <input {...register("contrasena")} placeholder="contraseña" />
      {errors.contrasena && <p> {errors.contrasena.message} </p>}
      <input type="submit" />
    </form>
  );
}

export default MiFormulario;
