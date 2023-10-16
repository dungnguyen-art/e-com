import React from "react";
import { Col, Input } from "antd";
import {
  WrapperHeader,
  WrapperTexthHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Search } = Input;
function HeaderComponent() {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTexthHeader>Tiki</WrapperTexthHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="Bạn tìm gì..."
            allowClear
            enterButton="Tìm kiếm"
            size="large"
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontsize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/ Đăng kí</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontsize: "30px", color: '#fff'}}/>
            <WrapperTextHeaderSmall style={{color: '#fff'}}>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
