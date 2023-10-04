// import { useState } from 'react'
import '../styles/App.css'
import '../styles/normalize.css'
import '../styles/style.css'
import data from '../data/data.json'

function App() {
  const pokemonList =
    <main>
      {data.map((pokemon) => (
        <article key={pokemon.pokedexId}>
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
      {pokemonList}
    </>
  )
}

export default App
