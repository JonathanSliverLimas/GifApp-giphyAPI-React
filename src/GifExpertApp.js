import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["La casa de papel"]);

  return (
    <>
      <h2>Gif App <a target="_blank" href="http://jonathanlimas.com/">by @jonacodes</a></h2>
      <AddCategory setCategories={setCategories} />
      {
          categories.map(category => 
            <GifGrid key={category} 
            category={category} />
          )
      }

      <p>Desarrollado por <a target="_blank" href="http://jonathanlimas.com/">@jonacodes</a></p>
    </>
  );
};

export default GifExpertApp;
