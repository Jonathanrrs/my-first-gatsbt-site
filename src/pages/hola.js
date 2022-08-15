import React from "react";
import { Helmet } from "react-helmet";

const Hola = ({ serverData }) => {
  return (
    <div>
      <Helmet>
      <title>Pokemon</title>
      <meta name="description" content={serverData.name} />
      <meta property="og:image" content="https://myfirstgatsbysitemaster63551.gatsbyjs.io/Background.png" />
      </Helmet>
      <h1>Welcome</h1>
      <h1>Nueva página hola</h1>
      <h1>{serverData.name}</h1>
      <p>ID: {serverData.id}</p>
      <b>Peso: ${serverData.height}</b>
      {/* <img src="./Background.png" alt="Background" /> */}
    </div>
  );
};

export default Hola;

export async function getServerData() {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/raichu");
    const dataToJson = await data.json();
    return {
      props: dataToJson
    }
  } catch (error) {
    console.log(error);
  }
}
