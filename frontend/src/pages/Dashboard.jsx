/** @format */

import React, { useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <main>
      <DashboardNav />
      <Outlet />
    </main>
  );
};

export default Dashboard;
