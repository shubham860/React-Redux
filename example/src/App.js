import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './Actions/index'

function App() {
  const Counter = useSelector(state => state.Counter.count);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (

    <div className="App">
      <h1>Counter {Counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {
        isLogged ? <h3>Valuable information</h3> : ''
      }
    </div>
    
  );
}

export default App;
