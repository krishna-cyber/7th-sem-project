/** @format */

import React from "react";
import { Button, Form, Select } from "antd";
import axios from "axios";
import { setUsers, setError, setLoading } from "../features/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BloodRequestForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const onFinish = ({ bloodGroup, location }) => {
    console.log({ bloodGroup, location });
    axios
      .post("http://localhost:8000/api/v1/donation/request-blood", {
        bloodGroup,
        location,
        token,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          alert(res.data.message);
          dispatch(setUsers(res.data));
          navigate("/donor-list");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };
  return (
    <div className=' bg-gray-200 p-2 flex flex-col gap-3 '>
      <h3 className=' text-red-600 text-2xl text-center'>Blood Request</h3>
      <p className=' font-bold text-lg text-center'>Request Form</p>
      <Form className=' w-[40%] self-center' onFinish={onFinish}>
        <Form.Item name='bloodGroup' label='Blood Group'>
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
        {/* <Form.Item label='Mobile' name='mobile'>
          <Input />
        </Form.Item> */}

        {/* <Form.Item label='Gender'>
          <Radio.Group name='gender' defaultValue={1}>
            <Radio value={"male"}>male</Radio>
            <Radio value={"female"}>female</Radio>
          </Radio.Group>
        </Form.Item> */}
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BloodRequestForm;
