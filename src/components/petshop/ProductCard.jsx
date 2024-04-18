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
        src={product.images}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />}
    variant="top"
    className="product__image"
  >
    <Meta
      title={product.title}
      // description={`price: $${product.price}`}
      description={
        <div>
          {new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(product.price)}  <Rating rating={product.rating} />
        </div>
      }
    />
  </Card>
);

export default ProductCard;
