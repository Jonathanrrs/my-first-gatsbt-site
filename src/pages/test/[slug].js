import React from "react";
import { Helmet } from "react-helmet";

const Test = ({ serverData }) => {
  console.log(serverData);
  return (
    <div>
      <Helmet>
        <title>{serverData.name}</title>
        <meta name="description" content={serverData.id} />
        <meta
          property="og:image"
          content="https://myfirstgatsbysitemaster63551.gatsbyjs.io/Background.png"
        />
      </Helmet>
      <p>{serverData.name}</p>
      <h1>SSR con dirección dinamica</h1>
    </div>
  );
};

export default Test;

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
