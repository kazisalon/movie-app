import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  /* IE 11 fix */
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 31px;
  padding-bottom: 40px;
  background: inherit;
`;

export const LoadingMessage = styled.h2`
  display: inline-block;
  margin: 35px 0 0 0;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: #646b7f;
  width: 100%;
`;

export const LoadingError = styled.h2`
  display: inline-block;
  margin: 25px 0 0 0;
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: #646b80;
  width: 100%;
`;
