import { Heroes } from "../data/Heroes";

export const getHeroesByTipo = (tipo) => {
  console.log("Tipo recibido en getHeroesByTipo:", tipo); // Log para verificar tipo
  const aux = ['anime', 'comics'];
  if (!aux.includes(tipo)) {
    throw new Error(`el Personaje no esta aun en la Lista: "${tipo}"`);
  }
  return Heroes.filter(hero => hero.tipo === tipo);
};
