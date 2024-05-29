import { Menu } from "antd";
import React, { useState } from "react";

const Header = () => {
    const items = [
        {
          label: 'Navigation One',
          key: 'mail',
          
        },
        {
          label: 'Navigation Two',
          key: 'app',
         
        },
        {
          label: 'Navigation Three - Submenu',
          key: 'SubMenu',
          
        },
        {
          key: 'alipay',
          label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          ),
        },
      ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
