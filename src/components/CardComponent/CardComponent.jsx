import React from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { StyleNameProduct, WrapperPrice, WrapperReportText } from "./style";
const { Meta } = Card;
function CardComponent() {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/86/251787/chuot-bluetooth-apple-mk2e3-trang-thumb-600x600.jpg"
        />
      }
    >
      <StyleNameProduct>Chuột Bluetooth Apple MK2E3</StyleNameProduct>
      <WrapperPrice>1.640.000₫</WrapperPrice>
      <WrapperReportText>
        <span>4.8 </span>
        <StarFilled />
      </WrapperReportText>
    </Card>
  );
}

export default CardComponent;
