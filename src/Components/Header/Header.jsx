import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './Header.css';
import Filters from './Filters/Filters';
import { fetchMovieByInput } from '../../Store/actions/inputActions';

const Header = props => (
  <div className="header">
    <button
      type="button"
      // clean input
      onClick={() => {
        props.sendSearchQuery('');
      }}
      className="header-logo-wrapper"
    >
      <img src={logo} className="header-logo" alt="logo" />
      <span className="header-text">Movies App</span>
    </button>

    <Filters />
  </div>
);

const mapDispatchToProps = dispatch => ({
  sendSearchQuery: inputData => dispatch(fetchMovieByInput(inputData)),
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
