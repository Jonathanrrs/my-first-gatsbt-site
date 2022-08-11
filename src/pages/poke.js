import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Poke = ({ serverData }) => {
  // const [pokemon, setPokemon] = useState({});
  // const getPikachu = async () => {
  //   const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  //   const dataToJson = await data.json();
  //   setPokemon({
  //     name: dataToJson.name,
  //     id: dataToJson.id,
  //     height: dataToJson.height,
  //   });
  // };

  // useEffect(() => {
  //   getPikachu();
  // }, []);
  // console.log(serverData, "SSR");
  return (
    <div>
      <Helmet>
      <title>Pokemon</title>
      <meta name="description" content={serverData.name} />
      <meta property="og:image" content="https://myfirstgatsbysitemaster63551.gatsbyjs.io/Background.png" />
      </Helmet>
      <h1>Welcome</h1>
      <h1>{serverData.name}</h1>
      <p>ID: {serverData.id}</p>
      <b>Peso: ${serverData.height}</b>
      {/* <img src="./Background.png" alt="Background" /> */}
    </div>
  );
};

export default Poke;

export async function getServerData() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const dataToJson = await data.json();
    return {
      props: dataToJson
    }
  } catch (error) {
    console.log(error);
  }
}
