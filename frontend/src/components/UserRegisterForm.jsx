/** @format */

import React from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import { setUser } from "../features/authSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const UserRegisterForm = () => {
  const dispatch = useDispatch();

  const onFinish = ({ bloodGroup, dob, gender, location }) => {
    console.log({ bloodGroup, dob, gender });
    axios
      .post("http://localhost:8000/api/v1/donation/donor-register", {
        bloodGroup,
        dob,
        gender,
        location,
        token,
      })
      .then(({ data }) => {
        console.log({ data });
        alert(data.message);
        if (data.success) {
          dispatch(setUser(data));
        }
      });
  };
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  console.log(user);
  return (
    <>
      {user.profileCompleted ? (
        <h1 className='text-center text-xl text-green-600'>
          You have already completed your profile registration process.<br></br>
          <span>see your profile from menu</span>
        </h1>
      ) : (
        <div className=' bg-gray-200 p-2 flex flex-col gap-3 '>
          <h3 className=' text-red-600 text-2xl text-center'>
            Give Blood Save Life
          </h3>
          <p className=' font-bold text-lg text-center'>Registration Form</p>
          <Form className=' w-[40%] self-center' onFinish={onFinish}>
            <Form.Item label='Name' name='fullName'>
              <Input
                defaultValue={user?.fullName}
                value={user?.fullName}
                disabled
              />
            </Form.Item>
            <Form.Item label='Email' name='email'>
              <Input defaultValue={user?.email} value={user?.email} disabled />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              name='bloodGroup'
              label='Blood Group'>
              <Select placeholder='Select Blood Group' allowClear>
                <Select.Option value='A+'>A+</Select.Option>
                <Select.Option value='A-'>A-</Select.Option>
                <Select.Option value='B+'>B+</Select.Option>
                <Select.Option value='B-'>B-</Select.Option>
                <Select.Option value='AB+'>AB+</Select.Option>
                <Select.Option value='AB-'>AB-</Select.Option>
                <Select.Option value='O+'>O+</Select.Option>
                <Select.Option value='O-'>O-</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name='location' label='Your Location'>
              <Select placeholder='Select your nearest Location' allowClear>
                <Select.Option value='nepalgunj'>Nepalgunj</Select.Option>
                <Select.Option value='kathmandu'>Kathmandu</Select.Option>
                <Select.Option value='pokhara'>Pokhara</Select.Option>
                <Select.Option value='biratnagar'>Biratnagar</Select.Option>
                <Select.Option value='butwal'>Butwal</Select.Option>
                <Select.Option value='bhairahawa'>Bhairahawa</Select.Option>
                <Select.Option value='dhangadhi'>Dhangadhi</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='Mobile' name='mobile'>
              <Input
                defaultValue={user?.mobile}
                value={user?.mobile}
                disabled
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              label='Date of Birth'
              name='dob'>
              <Input type='date' />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                },
              ]}
              label='Gender'
              name='gender'>
              <Radio.Group name='gender' defaultValue={"male"}>
                <Radio value={"male"}>male</Radio>
                <Radio value={"female"}>female</Radio>
              </Radio.Group>
            </Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default UserRegisterForm;
