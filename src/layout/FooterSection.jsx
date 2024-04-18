import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Petclinic ©{new Date().getFullYear()} Created by SRROBIN
    </Footer>
  );
};

export default FooterSection;
