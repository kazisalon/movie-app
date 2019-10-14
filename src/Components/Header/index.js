// Core
import React from 'react';
import { connect } from 'react-redux';
// Svg
import logo from '../../img/logo.svg';
// Styles
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderLogoWrapper,
  HeaderLogoButton,
  HeaderText,
} from './styles';
// Actions
import { changeInputValue } from '../../actions/filtersActions';
// Components
import Filters from './Filters';

const Header = props => {
  const { changeInputValue } = props;
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderLogoButton
          type="button"
          onClick={() => {
            changeInputValue('');
          }}
        >
          <HeaderLogo src={logo} alt="logo" />
          <HeaderText>Movies App</HeaderText>
        </HeaderLogoButton>
      </HeaderLogoWrapper>

      <Filters />
    </HeaderWrapper>
  );
};

export default connect(
  null,
  { changeInputValue },
)(Header);
