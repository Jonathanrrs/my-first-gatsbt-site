import React from "react";
import { Link } from "gatsby";

const getName = (ability) =>
  ability.names.find(({ language }) => language.name === "en").name;

const ability = ({ pageContext: { pokemon, ability } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>
      {pokemon.name}
      {getName(ability)} ability prueba
    </h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p>{ability.effect_entries[0].effect}</p>
    <Link to={`/pokemon/${pokemon.name}`}>Back to {pokemon.name}</Link>
  </div>
);

export default ability;
