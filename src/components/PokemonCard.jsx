function PokemonCard({pokemon}) {
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
  
    const pokemonCard =
    
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
        </article>

    return (
        <>
        {pokemonCard}
        </>
    )

}

export default PokemonCard