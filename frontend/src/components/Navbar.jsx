/** @format */

import React from "react";
import { Input, Image, ConfigProvider, Button } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
import logo from "../assets/logo.png";

const Navbar = () => {
  const onSearch = (value) => console.log(value);
  return (
    <nav className=' flex p-2 justify-between items-center gap-3 w-full'>
      <div>
        <Image src={logo} alt='logo' preview={false} />
      </div>
      <div className=' w-[40%]'>
        {" "}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#f5222d",
              borderRadius: 10,
            },
          }}>
          <Search
            size='large'
            placeholder=' Search'
            onSearch={onSearch}
            enterButton
          />
        </ConfigProvider>
      </div>
      <div className=' flex items-center gap-4'>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#f5222d",
              borderRadius: 10,
            },
          }}>
          <Link to='/login'>
            <Button className=' text-red-700 text-lg' type='link'>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button type='primary'>Register</Button>
          </Link>
        </ConfigProvider>
      </div>
    </nav>
  );
};

export default Navbar;
