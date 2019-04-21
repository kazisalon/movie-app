import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import { fetchMovies } from '../../Store/actions/fetchingActions';
import {
  changePage,
  updateWindowWidth,
} from '../../Store/actions/paginationActions';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.props.updateWindowWidth(window.innerWidth);
  }

  render() {
    const {
      inputValue,
      pages,
      genreId,
      byRating,
      byPopularity,
      windowWidth,
      currentPage,
      downloadMovies,
      nextPage,
    } = this.props;

    const handleClick = (e) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      // e = custom event from ReactPaginate
      const countedNextPage = e.selected + 1;
      nextPage(countedNextPage);
      downloadMovies(
        inputValue,
        countedNextPage,
        genreId,
        byRating,
        byPopularity,
      );
    };
    // Responsiveness by decreasing the number of items in pagination
    const choosePageRangeDisplayed = () => {
      if (windowWidth > 1000) {
        return 8;
      }
      if (windowWidth <= 1000 && windowWidth > 600) {
        return 4;
      }
      return 1;
    };
    return (
      <React.Fragment>
        <div className="pagination-wrapper">
          <ReactPaginate
            previousLabel="previous"
            pageClassName="page"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={choosePageRangeDisplayed()}
            onPageChange={e => handleClick(e)}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            forcePage={currentPage - 1}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  downloadMovies: (input, page, genreId, byRating, byPopularity) => {
    dispatch(fetchMovies(input, page, genreId, byRating, byPopularity));
  },
  nextPage: (nextPage) => {
    dispatch(changePage(nextPage));
  },
  updateWindowWidth: (width) => {
    dispatch(updateWindowWidth(width));
  },
});

const mapStateToProps = state => ({
  inputValue: state.inputReducers.inputValue,
  pages: state.paginationReducers.pages,
  currentPage: state.paginationReducers.currentPage,
  windowWidth: state.paginationReducers.windowWidth,
  genreId: state.genreReducers.value,
  byRating: state.filterReducers.byRating,
  byPopularity: state.filterReducers.byPopularity,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
