import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderSection from "./layout/HeaderSection";
import Breadcrumbs from "./layout/Breadcrumbs";
import MainRoutes from "./routes/MainRoutes";
import FooterSection from "./layout/FooterSection";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderSection />
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumbs />
        <div
          style={{
            padding: 24,
            minHeight: 490,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <MainRoutes />
        </div>
      </Content>
      <FooterSection />
    </Layout>
  );
};
export default App;
