/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchMovies } from '../../Store/actions/fetchingActions';
import { changePage } from '../../Store/actions/paginationActions';

class pagination extends Component {
  render() {
    const handleClick = (e) => {
      // e = custom event from ReactPaginate
      const nextPage = e.selected + 1;
      console.log(nextPage);
      console.log(this.props.genreId);
      this.props.nextPage(nextPage);
      this.props.downloadMovies(
        this.props.inputValue,
        nextPage,
        this.props.genreId,
      );
    };
    return (
      <React.Fragment>
        <div className="pagination-wrapper">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={this.props.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={8}
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
  downloadMovies: (input, page, genreId) => {
    dispatch(fetchMovies(input, page, genreId));
  },
  nextPage: (nextPage) => {
    dispatch(changePage(nextPage));
  },
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
  pages: state.paginationReducers.pages,
  currentPage: state.paginationReducers.currentPage,
  genreId: state.filterReducers.value,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pagination);
