import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Pagination from './Components/Pagination/Pagination';
// import Footer from './Components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <Main />
    <Pagination />
    {/* Existing of the not very useful footer can be bad for UX */}
    {/* <Footer />  */}
  </>
);


export default App;
