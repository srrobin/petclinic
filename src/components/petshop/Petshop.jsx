/* eslint-disable max-len */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, FloatButton, Row } from "antd";
import { AxiosInstance } from "../../utils/Axios";
import ProductCard from "./ProductCard";
import GlobalLoader from "../../utils/GlobalLoader";

const Petshop = () => {
  const {
    isLoading,
    isError,
    error,
    data: petshop,
  } = useQuery({
    queryKey: ["petshop"],
    queryFn: () =>
      AxiosInstance.get("/petshop").then((res) => res.data),
  });
  if (isLoading) return <GlobalLoader />;
  if (isError) return `An error has occurred: ${error.message}`;
  return (
    <div>
      <FloatButton
        href="https://ant.design/index-cn"
        tooltip={<div>cart items</div>}
        badge={{
          count: 5,
          color: "blue",
        }}
      />
      <Row gutter={[24, 24]}>
        {petshop?.map((product) => (
          <Col span={12} md={8} lg={4} xxl={4} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Petshop;
