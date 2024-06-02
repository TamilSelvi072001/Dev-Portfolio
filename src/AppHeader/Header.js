import { Menu } from "antd";
import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("/");
  const items = [
    {
      label: "ABOUT",
      key: "/",
    },
    {
      label: "CONTACT",
      key: "/contact",
    },
    {
      label: "EXPERIENCE",
      key: "SubMenu",
    },
    {
      key: "alipay",
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="header-component"
    />
  );
};
export default Header;
