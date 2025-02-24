import { useEffect, useState } from "react";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LogoDark from "../assets/logo-dark.svg";
import Sidebar from "../components/Sidebar";
import Modal from "../UI/Modal";
import { invalidateLogin } from "../utils/auth";

import { Link } from "react-router-dom";

export default function MainLayout() {
  const token = useRouteLoaderData("root");
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    if (!token || new Date(token?.expiration) < new Date()) {
      invalidateLogin();
      navigate("/auth?action=login");
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isSidebarVisible && (
          <Modal position="left" onClose={() => setIsSidebarVisible(false)}>
            <Sidebar onClose={() => setIsSidebarVisible(false)}></Sidebar>
          </Modal>
        )}
      </AnimatePresence>

      <header className="flex justify-start items-center">
        <div className="relative ml-4">
          <DensityMediumIcon
            onClick={() => setIsSidebarVisible(true)}
          ></DensityMediumIcon>
        </div>
        <div className="flex justify-center w-full">
          <Link to="/">
            <img className="p-4 m-1" src={LogoDark} alt="logo" />
          </Link>
        </div>
      </header>

      <div className="border-t w-full"></div>

      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
