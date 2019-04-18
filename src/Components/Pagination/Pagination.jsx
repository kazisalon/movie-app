/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchMovies } from '../../Store/actions/fetchingActions';
import { changePage } from '../../Store/actions/paginationActions';
import Button from './Button/Button';

class pagination extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const handleClick = (e) => {
      // e = custom event from ReactPaginate
      const nextPage = e.selected + 1;
      console.log(nextPage);
      this.props.nextPage(nextPage);
      this.props.downloadMovies(this.props.inputValue, nextPage);
    };
    return (
      <React.Fragment>
        <div className="pagination-wrapper">
          pagination
          {/* <Button
          handleClick={this.handleClick}
          currentPage={this.props.currentPage}
        />
        <div className="commentBox"> */}
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={this.props.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={e => handleClick(e)}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            forcePage={this.props.currentPage - 1}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  downloadMovies: (input, page) => {
    dispatch(fetchMovies(input, page));
  },
  nextPage: (nextPage) => {
    dispatch(changePage(nextPage));
  },
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
  pages: state.paginationReducers.pages,
  currentPage: state.paginationReducers.currentPage,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pagination);
