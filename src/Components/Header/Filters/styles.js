import styled from 'styled-components';
import ReactSelect from 'react-select';

export const StyledReactSelect = styled(ReactSelect)`
  &.react-select-container {
    height: 39px;
    font-size: 17px;
  }

  .react-select__menu {
    cursor: pointer;
    color: #f4f4f4;
    opacity: 0.95;
    border: 1px solid #1e2028;
    background-color: #23252b;
    transition: 0.3s;
    margin-top: 4px;
  }

  .react-select__control {
    height: 39px;
    background-color: #1e2028;
    border: 1px solid #424754;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    min-width: 200px;
    display: flex;

    &:hover {
      border: 1px solid #424754;
    }
  }

  .react-select__input {
    color: #f4f4f4;
    opacity: 0.7;
  }

  .react-select__placeholder {
    color: #8e95a5;
    opacity: 0.8;
  }

  .react-select__option:hover {
    background-color: #424754;
    cursor: pointer;
  }

  .react-select__option {
    background-color: #23252b;
  }

  .react-select__option--is-selected {
    background-color: #424754;
  }

  .react-select__single-value {
    color: #8e95a5;
    font-size: 17px;
  }

  .css-19bqh2r {
    fill: #8e95a5;
    opacity: 0.8;
  }
  .css-19bqh2r:hover {
    fill: #9ca3b3;
    opacity: 1;
  }

  .react-select__indicator-separator {
    background-color: #8e95a5;
  }

  /* scroll */
  .react-select__menu-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #2d3038;
  }

  .react-select__menu-list::-webkit-scrollbar {
    width: 8px;
    background-color: #23252b;
  }

  .react-select__menu-list::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1e2028;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-width: 875px;
  justify-content: flex-end;
  @media screen and (max-width: 1182px) {
    margin: 20px auto 30px auto;
  }
  @media screen and (max-width: 864px) {
    min-width: 0;
    margin: 10px 100px 28px 100px;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 700px) {
    margin: 10px 0 28px 0;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  display: inline-block;
  width: 29%;
  margin: 0 50px 0 25px;
  @media screen and (max-width: 864px) {
    margin: 15px 0 0 0;
    width: 398px;
  }
  @media screen and (max-width: 450px) {
    width: 285px;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  transition: all 0.2s ease 0s;
  padding: 0 10px;
  height: 37px;
  border: 1px solid #424754;
  background: 0 0;
  color: #8e95a5;
  line-height: 32px;
  border-radius: 3px;
  cursor: text;
  font-size: 17px;
  text-align: start;
  min-width: 225px;
  width: 92%;
  &::placeholder {
    color: #8e95a5;
    opacity: 0.8 !important;
  }
  @media screen and (max-width: 864px) {
    width: calc(100% - 20px);
  }
`;

export const FilterButtonsContainer = styled.div`
  max-width: 65%;
  display: flex;
  @media screen and (max-width: 1182px) {
    margin-left: 5%;
  }
  @media screen and (max-width: 870px) {
    width: auto;
    margin: 0;
    max-width: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 4px;
  right: 7px;
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  background: 0 0;
  color: #646b7f;
  font-size: 1.2rem;
  padding: 0;
  outline: none;
  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const RattingButton = styled.button`
  display: block;
  margin: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  outline: none;
  height: 39px;
  margin-left: 15px;
  transition: all 0.2s ease 0s;
  padding: 0 10px;
  border: ${({ checked }) => (checked ? '1px solid #8e95a5' : '1px solid #424754')};
  color: ${({ checked }) => (checked ? '#bbc6df' : '#8e95a5')};
  line-height: 32px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  text-align: start;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const PopularityButton = styled(RattingButton)`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
