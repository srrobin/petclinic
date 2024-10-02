import { Breadcrumb, Tag } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log("🚀 ~ BreadcrumbItem ~ location:", location);

  const crumbs = location.pathname.split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const link = `/${array.slice(0, index + 1).join("/")}`;

      return (
        <Breadcrumb.Item key={crumb}>
          <Tag bordered={false} color="#000000e0">
            <Link to={link} style={{ textTransform: "capitalize" }}>{crumb}</Link>
          </Tag>
        </Breadcrumb.Item>

      );
    });

  return (
    <Breadcrumb className="breadcrumb__area">
      {crumbs}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
