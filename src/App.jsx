import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./components/Home";
import { tokenLoader } from "./utils/auth";
import FileStatus from "./components/FileStatus";

const queryClient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      element: <MainLayout />,
      loader: tokenLoader,
      children: [
        { index: true, element: <Home /> },
        { path: "/fileStatus/:orderId", element: <FileStatus /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
