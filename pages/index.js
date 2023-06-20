// this is the home page of site
import React from "react";
import client from "./api/client";
import Home from "./../components/Home/Home";
import Animator from "../components/UI/Animator";
import Products from "../components/Products/Products";
const style = {};

const App = (props) => {
  
  return (
    <Animator>
      <Home  />
    </Animator>
  );
};

export default App;
// export async function getServerSideProps() {
//   const p = await client.fetch(`*[_type == "featuredProduct"]`);
//   return {
//     props: { data: p },
//   };
// }
