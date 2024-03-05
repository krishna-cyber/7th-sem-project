/** @format */

import { Avatar, Button, ConfigProvider } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { BiDonateBlood } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";

const DonorList = () => {
  const users = useSelector((state) => state.search.users);
  console.log(users);
  return (
    <>
      <div className=' w-[40%] flex flex-col justify-center items-center gap-3 mt-5'>
        {users.length === 0 && (
          <h1 className=' text-2xl text-red-600'>No Donor Found</h1>
        )}
        {users.map((user) => {
          return (
            <div className=' bg-gray-200 justify-around my-2 flex w-full items-center '>
              <Avatar size={64} icon={<FaUserCircle />} />
              <span>
                <span>
                  <p className=' text-lg font-medium'>
                    {user.fullName}
                    <span>
                      <Button type='link'>View Details</Button>
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

              <Button type='primary' danger>
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
