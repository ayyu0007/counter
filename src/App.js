import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  const [count, setcount] = useState(0);
  return (
   <div className='container my-6' >
    <div className='card text-center my-6'>
      <div className='card-body card bg-dark text-white mb-3' >
        <h1>COUNTER </h1><br/>
        <div className='my-6'>
          <h2 className='my-6'>{count}</h2>
          <button className='btn btn-success mx-3' onClick={() => setcount(count + 1)}>INCREMENT</button>
          <button className='btn btn-danger mx-3' onClick={() => setcount(count - 1)} >DECREMENT</button>
        </div> 
      </div>

    </div>
    
   </div>
  );
}

export default App;
