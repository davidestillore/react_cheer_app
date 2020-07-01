import React, {useState} from 'react';

// const api = {
//   key: "AIzaSyDivdkP9qia15m1p9_hxyaOL4PpU5mskOQ",
//   base: "https://us-central1-jokeapp2020.cloudfunctions.net/joke"
// }

function App() {
  const [joke, setJoke] = useState('Wanna hear a joke?');

  const data = async () => {
    const apiRes = await fetch('https://us-central1-jokeapp2020.cloudfunctions.net/joke');
    const resJSON = await apiRes.json();
    var x = Math.floor((Math.random() * 10));

    // const joke = data[x].joke;
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
    <div className="app"> 
      <div>
        <p value={joke} onClick={(e)=>setJoke(e.target.value)}>{joke}</p>
        <button onClick={e => handleSearch(e)}>Tell me a joke</button>
      </div>
    </div>
  );
}

export default App;
