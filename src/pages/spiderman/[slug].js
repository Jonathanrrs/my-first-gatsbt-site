import React from "react";
import { Helmet } from "react-helmet";

const Spiderman = ({ serverData }) => {
  console.log(serverData);
  return (
    <div>
      <Helmet>
        <title>{serverData.name}</title>
        <meta name="description" content={serverData.id} />
        <meta property="og:title" content={serverData.name} />
        <meta
          property="og:image"
          content="https://elaborate-sorbet-a7b9bf.netlify.app/Background4.png"
        />
      </Helmet>
      <p>{serverData.name}</p>
      <h1>SSR con dirección dinamica</h1>
    </div>
  );
};

export default Spiderman;

export async function getServerData(context) {
  // console.log(context);
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${context.params.slug}`
    );
    console.log(data);
    const dataToJson = await data.json();
    return {
      props: dataToJson,
    };
  } catch (error) {
    return {
      props: "No existe",
    };
  }
}
