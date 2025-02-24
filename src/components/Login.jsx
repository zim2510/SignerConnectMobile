import { TextField, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/http";

export default function Login() {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, data, isError, error } = useMutation({
    mutationFn: login,
    queryKey: ["login"],
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data));
      navigate("/");
    }
  });

  function handleLoginSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    mutate({ username: formData.username, password: formData.password });
  }

  return (
    <main className="flex flex-col items-center">
      <h3 className="mt-6 text-3xl">Login to your Account</h3>
      {isError && <p className="mt-8 text-red-400">
        {error.message ?? "Uh-oh! That didn't quite work!"}
        </p>}
      <form
        className="flex flex-col w-4/5 md:w-2/5 mt-8 gap-5 items-center"
        onSubmit={handleLoginSubmit}
      >
        <div className="w-full">
          <TextField
            fullWidth
            label="Username"
            name="username"
            variant="standard"
          ></TextField>
        </div>

        <div className="w-full">
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="standard"
            type="password"
          ></TextField>
        </div>

        <div className="w-full mt-2 flex justify-between">
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button color="secondary" component={Link} to="/auth?action=forgot-password">Forgot Password?</Button>
        </div>
      </form>
    </main>
  );
}
