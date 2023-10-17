import React from "react";
import { Button } from "antd";
function ButtonComponent({ size, styleButton, styleTextButton, textButton, ...rest }) {
  return (
    <div>
      <Button
        size={size}
        style={styleButton}
        // icon={<SearchOutlined />}
      >
        <span style={styleTextButton}>{textButton}</span>
      </Button>
    </div>
  );
}

export default ButtonComponent;
