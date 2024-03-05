/** @format */

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      {/* conditional rendering based on user */}
      {user ? <Dashboard /> : <Navbar />}
    </>
  );
}

export default App;
