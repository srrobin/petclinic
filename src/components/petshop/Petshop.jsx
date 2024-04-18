/* eslint-disable max-len */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Col, FloatButton, Row } from "antd";
import { AxiosInstance } from "../../utils/Axios";
import ProductCard from "./ProductCard";

const Petshop = () => {
  const {
    isLoading,
    isError,
    data: petshop,
  } = useQuery({
    queryKey: ["petshop"],
    queryFn: () =>
      AxiosInstance.get("/petshop").then((res) => res.data),
  });
  console.log("🚀 ~ Petshop ~ petshop:", petshop);
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
