// import { useState, useEffect } from "react";
// import { LoadingOutlined } from "@ant-design/icons";
// import { Spin } from "antd";

// const GlobalLoader = () => {
//   const [showLoader, setShowLoader] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(true);
//     }, 5000); // Delay for 5 seconds (5000 milliseconds)

//     return () => clearTimeout(timer); // Cleanup on component unmount
//   }, []);

//   return showLoader ? (
//     <Spin
//       className="g_loader"
//       indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
//     />
//   ) : null;
// };

// export default GlobalLoader;

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const GlobalLoader = () => {
  return (
    <>
      <Spin
        className="g_loader"
        indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
      />
      <p>30s ... </p>
    </>
  );
};

export default GlobalLoader;
