import React from "react";
import { Layout, theme } from "antd";
import HeaderSection from "./layout/HeaderSection";
import Breadcrumbs from "./layout/Breadcrumbs";
import FooterSection from "./layout/FooterSection";
import MainRoutes from "./routes/MainRoutes";

const { Content } = Layout;

const App = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const contentStyle = {
    padding: 24,
    minHeight: 380,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "0 48px", }}>
        <Breadcrumbs />
        <div style={contentStyle}>
          <MainRoutes />
        </div>
      </Content>
      <FooterSection />
    </Layout>
  );
};
export default App;
