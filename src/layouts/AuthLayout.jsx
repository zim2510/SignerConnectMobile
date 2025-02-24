import { useNavigate, useSearchParams } from "react-router-dom";
import LogoDark from "../assets/logo-dark.svg";

import Login from "../components/Login";
import { invalidateLogin } from "../utils/auth";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get("action");

  useEffect(() => {
    if (action == "logout") {
      invalidateLogin();
      navigate("/auth?action=login");
    }

    if (!action) {
      setSearchParams({ action: "login" });
    }
  });

  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <img
          className="p-4 m-8 md:m-16 w-1/2 md:w-1/4"
          src={LogoDark}
          alt="logo"
        />
      </header>
      {(!action || action === "login") && <Login></Login>}
    </>
  );
}
