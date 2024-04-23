import React, { useState } from "react";
import { Button, ConfigProvider, Space, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "../../utils/Axios";
import GlobalLoader from "../../utils/GlobalLoader";

const Veterinarians = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["petclinic"],
    queryFn: () => AxiosInstance.get("/veterinarians").then((res) => res.data),
  });

  const generateRandomColor = () => {
    const colors = ["purple", "geekblue", "blue", "cyan", "volcano", "orange", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Specialties",
      dataIndex: "specialties",
      key: "specialties",
      render: (text) => {
        return (
          <Tag color={generateRandomColor()} key={text}>
            {text}
          </Tag>
        );
      },
    }
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "rgb(4, 47, 117)",
            headerColor: "rgb(240, 240, 240)",
            headerSplitColor: "#042f75",
            colorLink: "#042f75"
          }
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        scroll={{
          y: 350,
        }}
      />
    </ConfigProvider>
  );
};

export default Veterinarians;
