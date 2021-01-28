import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';



const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="btn-block p-3 btn-success">The Current Value is : {count} </h1>
      <br />
      <br />
      <br />










      <button className="btn btn-block p-3 btn-outline-success" onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button className="btn btn-block p-3 btn-outline-warning" onClick={() => (count != 0) ? setCount(count - 1) : setCount(0)}>Decrease Counter</button >
      <button className="btn btn-block p-3 btn-outline-danger" onClick={() => setCount(0)}>Reset Counter</button>
    </div >
  );
};

export default App;
