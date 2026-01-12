import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // Home page
import Register from "./components/Accontpages/register";
import Signin from "./components/Accontpages/signin";
import AuthGuard from "./store/Auth";
import DashboardView from "./view/DashboardView";
import ViewdetailDash from "./components/Dashboard/ViewDetailDash";
import TableView from "./components/Dashboard/TableView";
import InsertStore from "./components/Dashboard/InsertStore";
import Shop from "./pages/shop.jsx";
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
    path: "/shop",
    element: (
      <AuthGuard>
        <Shop/>
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
    path: "/DashboardView",
    element: (
      <AuthGuard>
        <DashboardView />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <ViewdetailDash />,
      },
      {
        path: "tableview",
        element: <TableView />,
      },
      {
        path: "insertStore",
        element: <InsertStore />,
      },
    ],
  },
]);
