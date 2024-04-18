import React from "react";
import { Layout, Menu } from "antd";
import Logo from "../assets/logo.png";
import { items } from "../data/Dummy";

const { Header } = Layout;
const HeaderSection = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default HeaderSection;
