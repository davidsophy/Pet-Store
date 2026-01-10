import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // Home page
import Register from "./components/Accontpages/register";
import Signin from "./components/Accontpages/signin";
import AuthGuard from "./store/Auth";
import Dashboard from "./components/Dashboard/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
  },
  {
    path: "/signin",
    element: (
      <AuthGuard>
        <Signin />
      </AuthGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
  },
]);
