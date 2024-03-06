/** @format */

import { Avatar, Card } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className=' mt-5'>
      <Card hoverable title='Profile' className=' w-[40%] m-auto'>
        <Avatar size={64} icon={<FaUserCircle />} />
        <p className=' text-lg font-medium text-green-600'>
          Full Name:{user.fullName}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Email: {user.email}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Location:{user.location}{" "}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Blood Group:{user.bloodGroup}
        </p>
        <p className=' text-lg font-medium text-green-600'>
          Mobile:{user.mobile}
        </p>
      </Card>
    </div>
  );
};

export default Profile;
