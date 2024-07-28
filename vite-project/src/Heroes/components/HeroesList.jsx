import { getHeroesByTipo } from "../helpers/getHeroesByTipo";
import { HeroesCard } from "./HeroesCard";
import { useEffect, useState } from "react";

export const HeroesList = ({ tipo }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    console.log("Tipo recibido en HeroesList:", tipo); // Log para verificar tipo
    try {
      const heroesData = getHeroesByTipo(tipo);
      setHeroes(heroesData);
    } catch (error) {
      console.error(error.message);
    }
  }, [tipo]);

  return (
    <>
      <h1>Heroes List</h1>
      <div className="container">
        <div className="row">
          {heroes.map((hero) => (
            <div key={hero.id} className="col-md-4 mb-3">
              <HeroesCard {...hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
