import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './Header.scss';
import { Outlet } from 'react-router-dom';

const HeaderComponent = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const header = document.querySelector('.header');
      if (header) {
        setHeight(header.clientHeight);
      }
    }, 30);
  });
  const handleClose = () => {
    // TODO: Close the header
    window.close();
  };

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="">
            <h2 className="header-title">Figma to Code</h2>
          </div>
          <div>
            <Button type="text" icon={<SettingOutlined />} className="close-button" onClick={handleClose} />
            <Button type="text" icon={<LogoutOutlined />} className="close-button" onClick={handleClose} />
          </div>
        </div>
      </div>
      <div style={{ height: `calc(100% - ${height}px)` }}>
        <Outlet />
      </div>
    </>
  );
};

export default HeaderComponent;
