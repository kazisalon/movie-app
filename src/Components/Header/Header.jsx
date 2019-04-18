import React from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './Header.css';
import { fetchMovieByInput } from '../../Store/actions/moviesActions';

const Header = props => (
  <div className="header">
    <div className="header-logo-wrapper">
      <img src={logo} className="header-logo" alt="logo" />
      <span className="header-text">Movies App</span>
    </div>
    <div className="search-wrapper">
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <input
          className="search-input"
          placeholder="Seach films..."
          value={props.inputValue}
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'Seach films...')}
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
  inputValue: state.movies.inputValue,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
