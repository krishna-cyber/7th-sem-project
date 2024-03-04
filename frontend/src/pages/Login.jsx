/** @format */

import { Button, Input, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Register = () => {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <form className=' p-4 w-[20%] bg-red-500 gap-4 flex flex-col  text-white rounded-xl'>
        <Image src={logo} alt='logo' preview={false} />
        <div className='input'>
          <Input
            size='large'
            prefix={
              <FaUser className=' text-lg flex items-center justify-center' />
            }
            placeholder='Username'
            className=' my-2'
          />
          <Input.Password
            size='large'
            prefix={
              <RiLockPasswordLine className=' text-lg flex items-center justify-center' />
            }
            placeholder='Password'
            className=' my-2'
          />
        </div>
        <Button className=' bg-red-500 text-lg text-white font-bold'>
          Login
        </Button>
        <p className=' text-white'>
          Didn't have an account?
          <Link className=' ml-3 text-white font-semibold' to={`/register`}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
