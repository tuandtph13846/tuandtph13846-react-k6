import React from "react";
import styled from "styled-components";
import {
  LaptopOutlined,
  MobileOutlined,
  SoundOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
type Props = {};

const { Sider } = Layout;
const SideBarAdmin = (props: Props) => {
  const menuItem = [
    {
      key: "phone",
      label: <Link to="/admin/products">Điện thoại</Link>,
      icon: <MobileOutlined />,
    },
    { key: "laptop", label: "Laptop", icon: <LaptopOutlined /> },
    { key: "tablet", label: "Máy tính bảng", icon: <TabletOutlined /> },
    { key: "sound", label: "Âm thanh", icon: <SoundOutlined /> },
  ];
  return (
    <SideBar theme="light" width={300}>
      <Menu items={menuItem} />
    </SideBar>
  );
};

const SideBar = styled(Sider)`
  padding: 30px 0;

  .ant-menu-vertical {
    padding: 0 20px;
  }
  .ant-menu-item:hover {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }

  .ant-menu-item:active {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: #fff;
    background-color: #00b0d7;
    border-radius: 10px;
  }
  .ant-menu-item-selected a {
    color: #fff;
  }
`;

const LinkAdmin = styled(Link)``;

export default SideBarAdmin;