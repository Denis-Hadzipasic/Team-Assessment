import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
    const {user, isLoading, login} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("logInID", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="password" {...register("password", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
