import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpeg";
import slider2 from "../../assets/images/slider2.webp";
import slider4 from "../../assets/images/slider4.webp";
import slider5 from "../../assets/images/slider5.webp";
import slider6 from "../../assets/images/slider6.webp";
import slider7 from "../../assets/images/slider7.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

function HomePage() {
  const arr = ["TV", "Tu Lanh", "Lap Top"];
  return (
    <>
      <div style={{ padding: "0 200px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{ padding: "0 200px" }}>
        <SliderComponent
          arrImages={[slider1, slider2, slider4, slider5, slider6, slider7]}
        />
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
        </div>
        <div>
          <NavbarComponent />
        </div>
      </div>
    </>
  );
}

export default HomePage;
