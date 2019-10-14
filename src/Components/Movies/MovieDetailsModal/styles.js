import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    }
  to {
    opacity: 1;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 0.2s ease-in alternate 1;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalCard = styled.div`
  position: relative;
  display: flex;
  align-items: ${({ error }) => (error ? 'center' : 'flex-end')};
  z-index: 5;
  width: 600px;
  height: 722px;
  background-image: ${({ backgroundImage }) =>
    backgroundImage
      ? `linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0.8) 55%,rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280/${backgroundImage})`
      : 'none'};
  background-position-x: center;
  background-repeat: no-repeat;
  background-color: #1e2028;
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease-in alternate 1;
  @media (max-width: 700px) {
    background-image: ${({ backgroundImage }) =>
      backgroundImage
        ? `linear-gradient(to bottom,rgba(0,0,0,0.5) 0%,rgba(0, 0, 0, 0.8) 55%,rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280/${backgroundImage})`
        : 'none'};
    width: 90%;
    height: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 9px 12px;
  color: #fff;
  font-size: 22px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const MovieTitle = styled.h1`
  margin: 0px;
  font-family: 'Times New Roman';
  margin: 0 10px 0 0;
  color: #fff;
  font-size: 50px;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  background-color: white;
  vertical-align: middle;
  margin: 0 0 0 9px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  border-radius: 50%;
  color: #1e2028;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  opacity: 0.95;
  @media (max-width: 500px) {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  }
`;

export const MovieGenres = styled.h3`
  margin: 0;
  letter-spacing: 0.25px;
  font-size: 15px;
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.6);
  @media (max-width: 500px) {
    font-size: 13px;
    letter-spacing: 0.15px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 0 15px 15px 15px;
`;

export const DesctiptionSection = styled.div`
  margin: 15px 0 0 0;
`;

export const DescriptionTitle = styled.h3`
  opacity: ${({ opacity }) => opacity || '1'};
  margin: ${({ margin }) => margin || '0'};
  font-size: 20px;
  font-family: 'Times New Roman';
  color: #fff;
  @media (max-width: 500px) {
    font-size: 15px;
    letter-spacing: 0.15px;
  }
`;

export const DesctiptionSubTitle = styled.h4`
  margin: 0;
  letter-spacing: 0.25px;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.5);
  @media (max-width: 500px) {
    font-size: 12px;
    letter-spacing: 0.15px;
  }
`;

export const LoadingError = styled.h2`
  display: inline-block;
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: #646b80;
  width: 100%;
`;
