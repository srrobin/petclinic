import React from "react";
import { Card } from "antd";
import Rating from "./Rating";

const { Meta } = Card;
const ProductCard = ({ product }) => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src={product.images[0]}
        style={{ width: "90px", height: "90px", objectFit: "cover" }}
      />}
    variant="top"
    className="product__image"
  >
    <Meta
      title={product.title}
      description={
        <div>
          {new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(product.price)}  <Rating rating={product.rating} />
        </div>
      }
    />
  </Card>
);

export default ProductCard;
