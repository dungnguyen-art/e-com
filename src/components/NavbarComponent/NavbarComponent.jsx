import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

function NavbarComponent() {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.lable}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          console.log('check',option);
          return (
            <div style={{display: 'flex'}}>
              <Rate
                style={{ fontSize: "12px" }}
                
                defaultValue={ option }
              ></Rate>
              <span>{`từ ${option} sao trở lên`}</span>
            </div>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLableText>Danh mục</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["xiaomi", "Z-fold", "Huawei"])}
        {renderContent("checkbox", [
          { value: "a", lable: "A" },
          { value: "b", lable: "B" },
          { value: "c", lable: "C" },
        ])}
        {renderContent("star", [3, 4, 5])}
      </WrapperContent>
    </div>
  );
}

export default NavbarComponent;
