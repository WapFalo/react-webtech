import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/style.css'
import logo from '../assets/logo.png'
import data from '../data/data.json'
import Spinner from './Spinner/Spinner'
import CardPokemon from './CardPokemon/CardPokemon.jsx'
import Sidebar from './Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

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
        <Link to={'/'}><img src={logo} alt="logo" width="100%" height="100%"/></Link>
      </h1>
      {/* <Navigation />
      <div id='detail'>
        <Outlet />
      </div> */}
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex}/>
        <main>
          { loading ? (
            [helloList]
          ) : (
            <Spinner />
          )}
          <Footer />
          </main>
      </div>
    </>
  );
}
export default App;
