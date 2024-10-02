import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Petclinic ©{new Date().getFullYear()} Created by
      <Link to="https://srrobin.vercel.app/" target="_blank"> SRROBIN  </Link>
    </Footer>
  );
};

export default FooterSection;
