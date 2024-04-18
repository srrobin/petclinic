import { Breadcrumb } from "antd";
import React from "react";

const Breadcrumbs = () => {
  const items = [
    { path: "/home", breadcrumbName: "Home" },
    { path: "/list", breadcrumbName: "List" },
    { path: "/app", breadcrumbName: "App" },
  ];

  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
      }}
      items={items}
    />
  );
};

export default Breadcrumbs;
