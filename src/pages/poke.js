import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Poke = () => {
  const [pokemon, setPokemon] = useState({});
  const getPikachu = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const dataToJson = await data.json();
    setPokemon({
      name: dataToJson.name,
      id: dataToJson.id,
      height: dataToJson.height,
    });
  };

  useEffect(() => {
    getPikachu();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{pokemon.name}</title>
        <meta name="description" content={pokemon.id} />
      </Helmet>
      <h1>{pokemon.name}</h1>
      <p>ID: {pokemon.id}</p>
      <b>Peso: ${pokemon.height}</b>
    </div>
  );
};

export default Poke;
