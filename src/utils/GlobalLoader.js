import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const GlobalLoader = () => {
  return (
    <>
      <Spin
        className="g_loader"
        indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
      />
      <p>It will take some time for data to arrive from  glitch.me. Please wait ...</p>
    </>
  );
};

export default GlobalLoader;
