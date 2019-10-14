import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 90px;
  width: 100%;
  background: #1e2028;
  @media screen and (max-width: 1183px) {
    height: 100%;
  }
  @media screen and (max-width: 865px) {
    height: 190px;
  }
`;

export const HeaderText = styled.h1`
  margin: 6px 0 0 0;
  font-size: 36px;
  font-weight: 400;
  color: #f4f4f4;
  opacity: 0.93;
  &:hover {
    opacity: 1;
  }
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  @media screen and (max-width: 1183px) {
    margin: 0 auto;
    margin-top: 13px;
    width: 300px;
  }
`;

export const HeaderLogoButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  font: inherit;
  outline: none;
  cursor: pointer;
`;

const appLogoSpin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const HeaderLogo = styled.img`
  animation: ${appLogoSpin} 10s linear infinite;
  height: 50px;
  pointer-events: none;
  min-width: 70px;
`;
