import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Pagination from './Components/Pagination/Pagination';
// import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* TO DO */}
        <Pagination />
        {/* <Footer />  */}
      </div>
    );
  }
}

export default App;
