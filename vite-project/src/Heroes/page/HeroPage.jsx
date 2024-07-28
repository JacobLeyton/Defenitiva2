import { useNavigate, useParams } from "react-router-dom";
import { getHeroesByid } from "../helpers/getHeroByid";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroesByid(id);
  const url = useNavigate();

  if (!hero) {
    return <div>Hero not found</div>;
  }
const handleReturn = () => {
    if (hero.tipo === "anime") {
        url("/anime");
    }else {
        url("/comics");
    }
};

  return (
    <>
    {
        hero ? (    <div className="card">
            <img src={`/assets/Heroes/${hero.id}.jpg`} alt={hero.nombre} className="card-img-top"/>
            <div className="card-body"/>
            <p className="card-text">Nombre: {hero.nombre}</p>
            <p className="card-text">Tipo: {hero.tipo}</p>
            <p className="card-text">Origen: {hero.origen}</p>
            <p className="card-text">Descripcion: {hero.descripcion}</p>
            <div className="button-container">
                <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
            </div>
        </div>) : (
            <h1>El Heroe No Existe</h1>

        )
    }
    </>

  );
};