/** @format */

import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const onFinish = ({ fullName, email, password, mobile }) => {
  axios
    .post("http://localhost:8000/api/v1/auth/register", {
      fullName,
      email,
      password,
      mobile,
    })
    .then(({ data }) => {
      console.log({ data });
      alert(data.message);

      // if success true redirect to dashboard admin page
      if (data.success) {
        window.location.href = "/dashboard";
      }
    });
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className=' p-4 w-[20%] bg-red-500 flex flex-col  text-white rounded-xl'>
        <h1>Sign Up</h1>
        <div className='input'>
          <Form.Item hasFeedback name='fullName' rules={[{ required: true }]}>
            <Input allowClear placeholder='Name' />
          </Form.Item>
          <Form.Item hasFeedback name='password' rules={[{ required: true }]}>
            <Input.Password allowClear placeholder='Password' />
          </Form.Item>
          <Form.Item hasFeedback name='mobile' rules={[{ required: true }]}>
            <Input allowClear placeholder='Phone' />
          </Form.Item>
          <Form.Item hasFeedback name='email' rules={[{ required: true }]}>
            <Input allowClear placeholder='Email' />
          </Form.Item>
        </div>
        <Button
          className=' bg-red-500 text-lg text-white font-bold'
          htmlType='submit'>
          Sign Up
        </Button>
        <p className=' text-white'>
          Have an already an account?
          <Link className=' ml-3 text-white font-semibold' to={`/login`}>
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
