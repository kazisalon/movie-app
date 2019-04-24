import React from 'react';
import { connect } from 'react-redux';
import logo from '../../img/logo.svg';
import './Header.css';
import Filters from './Filters/Filters';
import { fetchMovieByInput } from '../../Store/actions/filtersActions';

const Header = (props) => {
  const { sendSearchQuery } = props;
  return (
    <header className="header">
      <button
        type="button"
        // clean input
        onClick={() => {
          sendSearchQuery('');
        }}
        className="header-logo-wrapper"
      >
        <img src={logo} className="header-logo" alt="logo" />
        <span className="header-text">Movies App</span>
      </button>

      <Filters />
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  sendSearchQuery: inputData => dispatch(fetchMovieByInput(inputData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);
