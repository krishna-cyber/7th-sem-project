/** @format */

import { Avatar, Button } from "antd";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateBlood } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DonorList = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const [loadings, setLoadings] = useState([]);
  const handleClick = (index, donor) => {
    console.log(donor);
    const message = `Hello ${donor.fullName}, I need your help, I am in need of blood, Please help me.
    Please contact me on my email ${user?.email} or my phone number ${user?.mobile}.
    `;
    axios
      .post("http://localhost:8000/api/v1/donation/send-request", {
        token,
        sender: user.email,
        receiver: donor.email,
        subject: "Blood Request",
        message,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      })
      .catch((err) => {
        console.log(err);
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      });
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
  };
  const users = useSelector((state) => state.search.users);
  console.log(users);
  return (
    <>
      <div className=' w-[40%] flex flex-col justify-center items-center gap-3 mt-5'>
        {users.length === 0 ? (
          <h1 className=' text-2xl text-red-600'>No Donor Found</h1>
        ) : (
          <h1 className=' text-2xl text-red-600'>Nearest Donor List</h1>
        )}
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className=' bg-gray-200 justify-around my-2 flex w-full items-center '>
              <Avatar size={64} icon={<FaUserCircle />} />
              <span>
                <span>
                  <p className=' text-lg font-medium'>
                    {user.fullName}

                    <span>
                      <Button
                        type='link'
                        onClick={() => {
                          navigate(`/donor/${user._id}`);
                        }}>
                        View Details
                      </Button>
                    </span>
                  </p>
                </span>
                <span className=' flex gap-3 mt-3 text-lg font-semibold'>
                  <span className=' flex items-center'>
                    <CiLocationOn />
                    {user.location}
                  </span>
                  <span className=' flex items-center'>
                    <BiDonateBlood />
                    {user.bloodGroup}
                  </span>
                  <span className=' flex items-center'>
                    <BsGenderAmbiguous />
                    Male
                  </span>
                </span>
              </span>

              <Button
                type='primary'
                loading={loadings[index]}
                onClick={() => {
                  handleClick(index, user);
                }}
                danger>
                Request Blood
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DonorList;
