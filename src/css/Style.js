import styled from "styled-components";
import { device } from "./GlobalStyles";

export const Container = styled.div`
  padding: 16px;
`;
export const BlackButton = styled.button`
  @media ${device.pc} {
    width: 480px;
  }
  border: none;
  background-color: var(--BLACK);
  width: 100%;
  height: 72px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  font-family: "Niramit", sans-serif;
  z-index: 2;
  cursor: pointer;
  :disabled {
    background-color: var(--DEFAULT);
  }
`;

export const VioletButton = styled.button`
  @media ${device.pc} {
    width: 480px;
  }
  border: none;
  background-color: var(--INFO);
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  font-family: "Niramit", sans-serif;
  z-index: 2;
  cursor: pointer;
`;

export const VioletRoundButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #7f5fff;
  border-radius: 50px;
  font-family: "AppleSDGothicNeoM";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  gap: 8px;
  color: var(--LIGHTEST);
  position: fixed;
  left: 50%;
  bottom: 31px;
  transform: translate(-50%, 0);
  cursor: pointer;
`;

export const VioletRoundTextBtn = styled.button`
  width: 110px;
  height: 48px;
  background: var(--INFO);
  border-radius: 50px;
  border: none;
  font-family: "AppleSDGothicNeoM";
  color: var(--WHITE);
  cursor: pointer;
  :disabled {
    background-color: var(--LIGHTER);
  }
`;

export const FooterBtn = styled.article`
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:72px;
    background-color:var(--BLACK);
    cursor:pointer;
    p {        
        font-family:'AppleSDGothicNeoM';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        color:var(--WHITE);
    }
    @media ${device.pc} {
        /* bottom:152px; */
        width:480px;
        left:50%;
        transform:translateX(-50%);
    }
`