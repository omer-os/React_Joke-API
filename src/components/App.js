import { useEffect, useState } from 'react';
import './index.css'

function App() {

  const [setup, setSetup]=useState()
  const [delivery, setDelevery]=useState()
  const [option, setOption]=useState('Programming')

  // Misc
  // Dark
  // Spooky
  // Pun

  const Joke=(e)=>{
    fetch(`https://v2.jokeapi.dev/joke/${option}`)
      .then(res => res.json())
      .then(data => {
        let Data = data
        setSetup(Data.setup)
        setDelevery(Data.delivery)
        console.log(data);
      })
  }

  const optionHandeler=(e)=>{
    setOption(e.target.value)
  }


  return(
    <div className='container'>
      <div className="btn-sel">
        <button id='in' className='joke-btn' onClick={Joke}>New Joke</button>
        <select id='in' onChange={optionHandeler}>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
          <option value="Spooky">Spooky</option>
          <option value="Pun">Pun</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <p>{setup}</p>
      <p>{delivery}</p>
      <br/>
      <br/>
    <hr/>
      <div className="container">
        <p align='center'>Omar Chatin</p>
        Made with react and Public-Joke-Api
      </div>
    </div>
  )
}

export default App;


/*{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "Hey, wanna hear a joke?",
    "delivery": "Parsing HTML with regex.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 10,
    "safe": true,
    "lang": "en"
}*/