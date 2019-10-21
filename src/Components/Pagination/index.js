// Core
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// Components
import ReactPaginate from 'react-paginate';
// Actions
import { changePage } from '../../actions/paginationActions';
// Styles
import { PaginationWrapper } from './styles';

const Pagination = ({ pages, currentPage, changePage }) => {
  const [windowWidth, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWindowSize(window.innerWidth));
  }, []);

  const handleChangePage = e => {
    // e = custom event from ReactPaginate
    const countedNextPage = e.selected + 1;
    changePage(countedNextPage);
    window.scrollTo(0, 0);
  };

  // Responsiveness by decreasing the number of items(page numbers) in pagination
  const choosePageRangeDisplayed = () => {
    if (windowWidth >= 1000) {
      return 8;
    }
    if (windowWidth <= 1000 && windowWidth > 600) {
      return 4;
    }
    return 1;
  };

  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel="previous"
        pageClassName="page"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={Math.min(pages, 1000)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={choosePageRangeDisplayed()}
        onPageChange={e => handleChangePage(e)}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        forcePage={currentPage - 1}
      />
    </PaginationWrapper>
  );
};

const mapStateToProps = state => ({
  pages: state.pagination.pages,
  currentPage: state.pagination.currentPage,
});

export default connect(
  mapStateToProps,
  { changePage },
)(Pagination);
