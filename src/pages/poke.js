import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{pokemon.name}</title>
          <meta name="description" content={pokemon.id} />
        </Helmet>
        <h1>{pokemon.name}</h1>
        <p>ID: {pokemon.id}</p>
        <b>Peso: ${pokemon.height}</b>
      </div>
    </HelmetProvider>
  );
};

export default Poke;
