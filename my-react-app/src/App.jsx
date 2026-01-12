import {Route, Routes, Outlet} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/about.jsx";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default function App() {
  <Routes>
     <Route element={<Layout />}>
         <Route path="/about" element={<AboutUs />} />
      </Route>
  </Routes>
  
  return <Home />;
}
