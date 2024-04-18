import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const GlobalLoader = () => {
  return (
    <Spin
      className="g_loader"
      indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
    />
  );
};

export default GlobalLoader;
