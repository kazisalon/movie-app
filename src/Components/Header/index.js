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
import { resetFilters } from '../../actions/filtersActions';
// Components
import Filters from './Filters';

const Header = React.memo(({ resetFilters }) => {
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderLogoButton
          type="button"
          onClick={() => {
            resetFilters();
          }}
        >
          <HeaderLogo src={logo} alt="logo" />
          <HeaderText>Movies App</HeaderText>
        </HeaderLogoButton>
      </HeaderLogoWrapper>

      <Filters />
    </HeaderWrapper>
  );
});

export default connect(
  null,
  { resetFilters },
)(Header);
