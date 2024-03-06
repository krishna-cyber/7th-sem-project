/** @format */

import { Avatar, Card } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const DonorDetails = () => {
  const donor = useSelector((state) => state.search.userDetail);
  return (
    <div className=' mt-5'>
      <Card hoverable title='Profile' className=' w-[40%] m-auto'>
        <Avatar size={64} icon={<FaUserCircle />} />
        <p className=' text-lg font-medium text-green-600'>
          Full Name:{donor?.fullName}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Email: {donor?.email}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Location:{donor?.location}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Blood Group:{donor?.bloodGroup}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Mobile:{donor?.mobile}
        </p>
      </Card>
    </div>
  );
};

export default DonorDetails;
