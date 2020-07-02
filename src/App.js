import React, {useState} from 'react';
// import { Button } from 'reactstrap';
import './App.css';

// var express = require('express');
// var cors = require('cors');
// var app.use(cors());

function App() {
  const [joke, setJoke] = useState('Wanna hear a joke?');

  const data = async () => {
    const apiRes = await fetch('/joke');
    const resJSON = await apiRes.json();
    // var x = Math.floor((Math.random() * 10));

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var count = resJSON.length;
    var x = getRandomInt(count);

    return resJSON[x];
  };

  const handleSearch = (e) => {
    e.preventDefault()
    data().then(res => {
      console.log(res.joke)
      setJoke(res.joke)
    });

  };

  return (
    // <div className="app"> 
    //     <div className="container">
    //       <div className="cardbody">
    //         <div className="joke">
    //           <h1 value={joke} onClick={(e)=>setJoke(e.target.value)}>{joke}</h1>
    //         </div>
    //         <div className="button">
    //           <button onClick={e => handleSearch(e)}>Tell me a joke</button>
    //         </div>
    //       </div>
    //     </div>
    // </div>

<div className="app"> 
    <div className="container">
      <div className="cardbody">
        <div className="joke">
          <h1 value={joke} onClick={(e)=>setJoke(e.target.value)}>{joke}</h1>
        </div>
        <div className="buttondiv">
          <a href="/" className="button" onClick={e => handleSearch(e)}>Tell me a joke</a>
        </div>
      </div>
    </div>
</div>
  );
}

export default App;
