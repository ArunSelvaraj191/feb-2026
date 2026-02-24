import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./modules/Login";
import Portfiolio from "./modules/Portfolio";
import Projects from "./modules/Projects";
import Register from "./modules/Register";
import Skills from "./modules/Skills";
import Users from "./modules/Users";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  // Hide Navbar on Login and Register screens
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfiolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
