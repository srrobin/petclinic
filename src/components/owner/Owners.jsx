/* eslint-disable max-len */
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Card, Col, ConfigProvider, Row, Space, Table, Tooltip } from "antd";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import AddOwner from "./AddOwner";
import { AxiosInstance } from "../../utils/Axios";
import GlobalLoader from "../../utils/GlobalLoader";
import { UserStatus } from "../../utils/StatusBox";

const Owners = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const { isLoading, isError, error, data: owners } = useQuery({
    queryKey: ["owner"],
    queryFn: () => AxiosInstance.get("/owners").then((res) => res.data),
  });

  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return <Link to={`/owners/${record.id}`}>{text}</Link>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (text) => {
        return <UserStatus status={text} />;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="topLeft" title="you can't delete">
            <Link to="/owners" disabled>Delete</Link>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorTextHeading: "#ffffff",
            algorithm: true,
            headerBg: "#042f75",
          },
          Button: {
            defaultBg: "#042f75",
            defaultHoverBg: "#28100b",
            colorText: "#abaaaa",
            defaultHoverColor: "#F86900",
            colorBorder: "#595858",
            defaultHoverBorderColor: "#F86900",
          },
          Pagination: {
            colorPrimary: "#042f75",
            colorPrimaryHover: "#F86900"
          }
        },
      }}
    >
      <Row>
        <Col span={24}>
          <Card
            title="All Owner List"
            extra={
              <div>
                <Button onClick={() => setModal1Open(true)} icon={<UserAddOutlined />}>
                  Add Owner
                </Button>
              </div>
            }
          >
            <Table
              // dataSource={owners}
              dataSource={owners}
              columns={columns}
              size="small"
              scroll={{
                y: 450,
              }}
              rowKey={(record) => record.id}
            />
          </Card>
        </Col>
        <AddOwner modal1Open={modal1Open} setModal1Open={setModal1Open} ownerslength={owners.length} />
      </Row>
    </ConfigProvider>
  );
};

export default Owners;
