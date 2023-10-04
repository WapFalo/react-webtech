// import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/style.css'
import data from '../data/data.json'
import logo from '../assets/logo.png'

function getColorHexa(type) {
  let color;
    switch(type) {
      case 'Eau':
        color = 'blue';
        break;

      case 'Plante':
        color = 'green';
        break;

      case 'Feu':
        color = 'orange';
        break;

      default:
        color = 'grey';
        break;  
  }
  return color
}

function App() {
  const pokemonList =
    <main>
      {data.map((pokemon) => (
        <article key={pokemon.pokedexId}  style={{
          borderColor: getColorHexa(pokemon.apiTypes[0].name),
          backgroundColor: getColorHexa(pokemon.apiTypes[0].name),
        }}>
          <figure>
          <picture>
              <img src={pokemon.image} alt="Image ${pokemon.name}" />
          </picture>
          <figcaption>
              <span className="types">{pokemon.apiTypes[0].name}</span>
              <h2>{pokemon.name}</h2>
              <ol>
              <li>Points de vie : {pokemon.stats.HP}</li>
              <li>Attaque : {pokemon.stats.attack}</li>
              <li>Défense : {pokemon.stats.defense}</li>
              <li>Attaque spécial : {pokemon.stats.special_attack}</li>
              <li>Vitesse : {pokemon.stats.speed}</li>
              </ol>
          </figcaption>
          </figure>
      </article>))}
    </main>

  return (
    <>
      <h1>
        <img src={logo} alt='Logo Pokémon' width="100%" height="100%"/>
      </h1>
      {pokemonList}
    </>
  )
}

export default App
