import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MovieWrapper = styled.li`
  display: flex;
  list-style-type: none;
  width: 47%;
  height: 200px;
  margin: 15px;
  border-radius: 7px;

  &:hover {
    background: #30333f;
    transition: 200ms ease-in-out;
  }
  @media screen and (max-width: 1045px) {
    width: 70%;
    margin: 0 auto 15px auto;
  }
  @media screen and (max-width: 679px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    height: auto;
    background: #30333f;
  }
`;

export const MoviePosterWrapper = styled.div`
  cursor: pointer;
  min-height: 200px;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .movie-poster {
    border-radius: 7px;
    position: relative;
    display: block;
    height: 200px;
    width: 150px;
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  ${MovieWrapper}:hover & {
    .movie-poster {
      transition: 200ms ease-in-out;
      opacity: 1;
    }
  }
  @media screen and (max-width: 425px) {
    margin: 15px auto 5px auto;
  }
`;

export const MovieInfo = styled.div`
  padding: 2px 10px 0 15px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 200px;
  color: #f4f4f4;
  opacity: 0.9;
  cursor: default;

  ${MovieWrapper}:hover & {
    transition: 200ms ease-in-out;
    opacity: 1;
  }

  @media screen and (max-width: 425px) {
    padding: 2px 10px 10px 15px;
    height: auto;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #2d3038;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #23252b;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1e2028;
  }
`;

export const MovieTitle = styled.h1`
  display: inline-block;
  margin: 0 14px 0 0;
  font-size: 20px;
  color: #f4f4f4;
  font-weight: normal;
  word-wrap: break-word;
  cursor: pointer;
`;

export const MovieTitleWrapper = styled.div`
  margin: 0 0 12px 0;
`;

export const MovieRank = styled.span`
  position: relative;
  display: inline-block;
`;

export const MovieRankNumber = styled.span`
  color: #f4f4f4;
`;

export const MovieOverview = styled.span`
  display: inline-block;
  margin: 0 0 5px 0;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin: 0 4px 2px 5px;
  font-size: 10px;
  color: #fbb829;
`;

export const ImdbText = styled.span``;
