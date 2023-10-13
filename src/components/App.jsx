import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/style.css'
import logo from '../assets/logo.png'
import data from '../data/data.json'
import CardPokemon from './CardPokemon/CardPokemon.jsx'
import Sidebar from './Sidebar/Sidebar'

function App() {
  const [pokedex, setPokedex] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataPokemon, setDataPokemon] = useState([])
  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
       .then((response) => response.json())
       .then((dataPokemon) => {
          console.log(dataPokemon);
          setDataPokemon(dataPokemon);
          setLoading(true)
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  const helloList = dataPokemon.map((poke, index) => (
      <CardPokemon data={poke} key={index} pokedex={pokedex} setPokedex={setPokedex}/>
  ));
  useEffect(() => {
    console.log(`Le Pokedex possède ${pokedex.length} pokémons`)
  })

  return (
    <>
      <h1>
        <img src={logo} alt="logo" width="100%" height="100%"/>
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex}/>
        <main>
          { loading ? (
            [helloList]
          ) : (
            <p>Chargement</p>
          )}</main>
      </div>
    </>
  );
}
export default App;
