import { UserAddOutlined } from "@ant-design/icons";
import { Button, Card, Col, ConfigProvider, Row, Space, Table } from "antd";

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
    queryKey: ["petclinic"],
    queryFn: () => AxiosInstance.get("/petclinic").then((res) => res.data),
  });

  // if (isLoading) return <GlobalLoader />;
  // if (isError) return `An error has occurred: ${error.message}`;

  const dataSource = [
    {
      id: "1",
      name: "John Doe",
      email: "jone@gmail.com",
      phone: "01827578768",
      address: "12/2, Mymensing",
      city: "Mymensing",
      status: 1,

      pets: [
        {
          id: "101",
          name: "Max",
          species: "Dog",
          birthday: "2019-8-12",
          visits: [
            {
              id: "1001",
              date: "2024-04-10",
              reason: "Annual checkup"
            },
            {
              id: "1002",
              date: "2024-02-15",
              reason: "Vaccination"
            }
          ]
        },
        {
          id: "102",
          name: "Whiskers",
          species: "Cat",
          birthday: "2013-8-12",
          visits: [
            {
              id: "1002",
              date: "2023-12-20",
              reason: "Flea treatment"
            }
          ]
        }
      ]
    },
    {
      id: "2",
      name: "Sayam Rahman",
      email: "sayam@gmail.com",
      phone: "01711337897",
      address: "73/2,dhaka",
      city: "dhaka",
      status: 2,

      pets: [
        {
          id: "103",
          name: "Max",
          species: "Dog",
          birthday: "2019-8-12",
          visits: [
            {
              id: "1003",
              date: "2024-04-10",
              reason: "Annual checkup"
            },
            {
              id: " 1004",
              date: "2024-02-15",
              reason: "Vaccination"
            }
          ]
        },
        {
          id: "104",
          name: "Whiskers",
          species: "Cat",
          visits: [
            {
              id: " 1005",
              date: "2023-12-20",
              reason: "Flea treatment"
            }
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Razon Ahmed",
      email: "razon@gmail.com",
      phone: "01799337897",
      address: "71/2,dhaka",
      city: "dhaka",
      status: 3,

      pets: [
        {
          id: "105",
          name: "Max",
          species: "Dog",
          birthday: "2019-8-12",
          visits: [
            {
              id: "1003",
              date: "2024-04-10",
              reason: "Annual checkup"
            },
            {
              id: "1004",
              date: "2024-02-15",
              reason: "Vaccination"
            }
          ]
        },
        {
          id: "106",
          name: "Whiskers",
          species: "Cat",
          birthday: "2011-8-12",
          visits: [
            {
              id: "1005",
              date: "2023-12-20",
              reason: "Flea treatment"
            }
          ]
        }
      ]
    }
  ];
  console.log("🚀 ~ Owners ~ owners111---->:", owners);
  console.log("🚀 ~ Owners ~ owners222---->:", dataSource);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        console.log("Record---------:", record);
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
          <Link to="/">Delete</Link>
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
            headerBg: "#28100b",
          },
          Button: {
            defaultBg: "#28100b",
            defaultHoverBg: "#28100b",
            colorText: "#abaaaa",
            defaultHoverColor: "#F86900",
            colorBorder: "#595858",
            defaultHoverBorderColor: "#F86900",
          },
          Pagination: {
            colorPrimary: "#28100b",
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
              dataSource={dataSource}
              columns={columns}
              size="small"
              scroll={{
                y: 450,
              }}
              rowKey={(record) => record.id}
            />
          </Card>
        </Col>
        <AddOwner modal1Open={modal1Open} setModal1Open={setModal1Open} />
      </Row>
    </ConfigProvider>
  );
};

export default Owners;
