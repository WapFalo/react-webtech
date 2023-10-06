import { useState } from 'react'
import '../styles/normalize.css'
import '../styles/style.css'
import logo from '../assets/logo.png'
import data from '../data/data.json'
import CardPokemon from './CardPokemon/CardPokemon.jsx'
import Sidebar from './Sidebar/Sidebar'

function App() {
  const [pokedex, setPokedex] = useState([])
  const helloList = data.map((poke, index) => (
    <CardPokemon data={poke} key={index} pokedex={pokedex} setPokedex={setPokedex}/>
  ));

  return (
    <>
      <h1>
        <img src={logo} alt="logo" width="100%" height="100%"/>
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex}/>
        <main>{helloList}</main>
      </div>
    </>
  );
}
export default App;
