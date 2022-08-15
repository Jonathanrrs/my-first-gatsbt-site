import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import {Helmet} from "react-helmet";

const Pokemon = ({ pageContext: { pokemon } }) => {
  const [raichu, setRaichu] = useState()

  useEffect(() => {
    getRaichu()
  }, [])

  const getRaichu = async() => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/raichu')
    const toJson = await data.json()
    setRaichu(toJson)
  }
  
  return (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <Helmet>
    <title>Pokemon</title>
    <meta name="description" content={pokemon.name} />
    </Helmet>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>Abilities</h2>
    <ul>
      {pokemon.abilities.map((ability) => (
        <li key={ability.name}>
          <Link to={`/pokemon/${pokemon.name}/ability/${ability.name}`}>
            {ability.name}
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/">Back to all Pokémon</Link>
    <h1>Esto es utilizando fetch</h1>
    <b>{raichu?.name}</b>
  </div>

  )
      };

export default Pokemon;

