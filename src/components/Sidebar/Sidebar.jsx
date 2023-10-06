import './Sidebar.scss'
import pokeball from '../../assets/pokeball.png'
import { useState } from 'react'

function Sidebar(props, pokedex) {
    const [isOpen, setIsOpen] = useState(false)
    let pokedexInfo;
    if(props.pokedex.length === 0){
        pokedexInfo = <p>Votre Pokédex semble être vide</p>
    } else {
        pokedexInfo = <div>{props.pokedex.map((poke, index) => (
            <ul key={index}>
                <li>{poke.name}</li>
            </ul>
        ))}</div>
    }
  
    return isOpen ? (
      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <h2>
          <img src={pokeball} alt="" />
          <p>Pokédex({props.pokedex.length})</p>
        </h2>
            {pokedexInfo}
      </div>
    ) : (
      <div className="lmj-cart-closed">
        <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
          <img src={pokeball} alt=""/>
          <p>Pokédex({props.pokedex.length})</p>
        </button>
      </div>
    )
  }
  
  export default Sidebar
  