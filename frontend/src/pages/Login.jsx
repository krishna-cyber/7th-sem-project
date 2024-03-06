/** @format */

import { Button, Input, Form, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { setUser } from "../features/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = ({ email, password }) => {
    console.log("Success:", email, password);
    axios
      .post("http://localhost:8000/api/v1/auth/login", { email, password })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.user);
          dispatch(setUser(data));
          navigate("/");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <Form
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className=' p-4 w-[20%] bg-red-500 gap-4 flex flex-col  text-white rounded-xl'>
        <Image src={logo} alt='logo' preview={false} />
        <div className='w-full '>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
            className=' w-full'>
            <Input
              allowClear
              classNames='w-full'
              size='large'
              prefix={
                <FaUser className=' text-lg flex items-center justify-center' />
              }
              placeholder='Email Address'
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name='password'
            rules={[
              {
                required: true,
              },
            ]}>
            <Input.Password
              allowClear
              size='large'
              prefix={
                <RiLockPasswordLine className=' text-lg flex items-center justify-center' />
              }
              placeholder='Password'
            />
          </Form.Item>
        </div>

        <Button
          htmlType='submit'
          className=' bg-red-500 text-lg w-full text-white font-bold'>
          Login
        </Button>

        <p className=' text-white'>
          Didn't have an account?
          <Link className=' ml-3 text-white font-semibold' to={`/register`}>
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
