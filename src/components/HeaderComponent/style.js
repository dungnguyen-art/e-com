import {Row} from 'antd'
import styled from "styled-components";
export const WrapperHeader = styled(Row)`
    padding: 20px 120px;
    background-color: #ffd400;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`
export const WrapperTexthHeader = styled.span `
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`
export const WrapperHeaderAccount = styled.div `
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span `
    font-size: 12px;
    color: #fff;
       
`
// export const WrapperIconHeader = styled