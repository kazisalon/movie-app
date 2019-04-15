import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// TO DO
// import Paganation from './Components/Paganation/Paganation';
// import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/* TO DO */}
        {/* <Paganation />
        <Footer />  */}
      </div>
    );
  }
}

export default App;
