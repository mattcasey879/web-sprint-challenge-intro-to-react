import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components'

const Outline = styled.h1`
text-shadow: -1px -1px 0 #FFE81F, 1px -1px 0 #FFE81F, -1px 1px 0 #FFE81F, 1px 1px 0 #FFE81F;
`
const App = () => {
const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios
  .get('https://swapi.dev/api/people')
  .then(res => {
    setCharacters(res.data)
  })
  .catch(err => {console.log(err)})
}, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log(characters);
  return (
    <div className="App">
      <Outline> Star Wars Characters </Outline>
      {
        characters.map(char => {
          return (
            <Character key={char.name} info={char}/>
          )
        })
      }
    </div>
  );
}

export default App;
