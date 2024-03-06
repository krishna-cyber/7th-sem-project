/** @format */

import React from "react";
import logo from "../assets/logo.png";
import { Image, Dropdown, Avatar } from "antd";
import { useDispatch } from "react-redux";
import { logOut } from "../features/authSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = [
    {
      label: "Logout",
      key: "0",
      onClick: () => {
        console.log("Logout");
        dispatch(logOut());
        alert("You have been logged out");
      },
    },
    {
      label: "Profile",
      key: "",
      onClick: () => {
        navigate("/profile");
      },
    },
  ];

  return (
    <nav className=' flex bg-red-500'>
      <ul className=' flex w-full justify-around list-none items-center'>
        <li>
          <Link to='/'>
            <Image src={logo} alt='logo' preview={false} />
          </Link>
        </li>
        <li className=' list-none  flex w-[40%] justify-between '>
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white font-semibold"
                : "text-white no-underline"
            }>
            Dashboard
          </NavLink>
          <NavLink
            to='/register-user'
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white font-semibold"
                : "text-white no-underline"
            }>
            Register User
          </NavLink>
          <NavLink
            to='/request-blood'
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white font-semibold"
                : "text-white no-underline"
            }>
            Request Blood
          </NavLink>
          <NavLink
            to='/profile'
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white font-semibold"
                : "text-white no-underline"
            }>
            Profile
          </NavLink>
        </li>

        <li>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar size={42} icon={<FaRegUserCircle />} />
            </a>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
