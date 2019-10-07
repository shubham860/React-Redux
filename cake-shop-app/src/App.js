import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cakecontainer from './components/Cakecontainer'
import  { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;
