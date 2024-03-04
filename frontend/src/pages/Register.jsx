/** @format */

import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <form className=' p-4 w-[20%] bg-red-500 gap-4 flex flex-col  text-white rounded-xl'>
        <h1>Sign Up</h1>
        <div className='input'>
          <Input placeholder='Name' className=' my-2' />
          <Input placeholder='Phone' className=' my-2' />
          <Input placeholder='Email' className=' my-2' />
          <Input.Password placeholder='Password' className=' my-2' />
        </div>
        <Button className=' bg-red-500 text-lg text-white font-bold'>
          Sign Up
        </Button>
        <p className=' text-white'>
          Have an already an account?
          <Link className=' ml-3 text-white font-semibold' to={`/login`}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
