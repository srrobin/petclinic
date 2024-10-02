import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#042f75",
          colorInfo: "#042f75"
        },
      }}
    >
      <Layout>
        <HeaderSection />
        <Content className="content__area">
          <Breadcrumbs />
          <div style={contentStyle}>
            <MainRoutes />
          </div>
        </Content>
        <FooterSection />
      </Layout>
    </ConfigProvider>
  );
};
export default App;
