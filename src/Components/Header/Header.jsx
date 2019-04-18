import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './Header.css';
import { fetchMovieByInput } from '../../Store/actions/inputActions';

const Header = props => (
  <div className="header">
    <button
      type="button"
      onClick={() => {
        props.sendSearchQuery('');
      }}
      className="header-logo-wrapper"
    >
      <img src={logo} className="header-logo" alt="logo" />
      <span className="header-text">Movies App</span>
    </button>
    <div className="search-wrapper">
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <input
          className="search-input"
          placeholder="Search films..."
          value={props.inputValue}
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'Search films...')}
          onChange={e => props.sendSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
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
