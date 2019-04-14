import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Paganation from './Components/Paganation/Paganation';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Paganation />
        <Footer /> 
      </div>
    );
  }
}

export default App;
