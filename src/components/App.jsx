// import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/style.css'
import logo from '../assets/logo.png'
import data from '../data/data.json'
import PokemonCard from './PokemonCard'

function App() {
  return (
    <>
      <h1>
        <img src={logo} alt='Logo Pokémon' width="100%" height="100%"/>
      </h1>
      <main>
      {data.map((elem) => (
        <PokemonCard key={elem.pokedexId} pokemon={elem}/>
      ))}
      </main>
    </>
  )
}

export default App
