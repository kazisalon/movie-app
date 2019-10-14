/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  height: 125px;
  background: #1e2028;
  display: flex;

  //react paginate classes
  & .pagination {
    margin: 0 auto;
    padding-top: 45px;
    display: flex;
    padding-left: 0;
    border-radius: 4px;
  }
  & .pagination > li {
    display: inline;
  }
  & .pagination > li > a,
  .pagination > li > span {
    font-size: 17.5px;
    position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.42857143;
    text-decoration: none;
    color: #f4f4f4;
    opacity: 0.9;
    background: #30333f;
    border: 1px solid #1e2028;
    margin-left: -1px;
    cursor: pointer;
    transition: 0.3s;
    cursor: pointer;
  }
  & .pagination > li > span:hover {
    opacity: 1;
  }
  & .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  & .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  & .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 2;
    color: #1e2028;
    opacity: 0.9;
    background-color: #f4f4f4;
    border-color: #30333f;
    outline: none;
  }
  & .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 3;
    color: #fff;
    background-color: #575b6d;
    cursor: default;
  }
  & .pagination > .disabled > span,
  .pagination > .disabled > span:hover,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #f4f4f4;
    opacity: 0.9;
    background-color: #30333f;
    border-color: #1e2028;
    cursor: not-allowed;
  }
  & .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 25px;
    line-height: 1.3333333;
  }
  & .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }
  & .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  & .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 20px;
    line-height: 1.5;
  }
  & .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  & .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  @media screen and (max-width: 370px) {
    & .pagination > .break-me {
      display: none;
    }
  }
`;
