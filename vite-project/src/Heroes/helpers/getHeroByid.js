import { Heroes } from "../data/Heroes";


export const getHeroesByid = (id) => {
  return Heroes.find(hero => hero.id === id);
};
