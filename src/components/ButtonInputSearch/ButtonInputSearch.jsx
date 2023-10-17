import React from "react";

import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
function ButtonInputSearch(props) {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundColorButton,
  } = props;

  return (
    <div style={{ display: "flex" }} >
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        bordered={bordered}
        style={{ background: backgroundColorButton }}
        icon={<SearchOutlined />}
        textButton={textButton}
      >
        {textButton}
      </ButtonComponent>
    </div>
  );
}

export default ButtonInputSearch;
