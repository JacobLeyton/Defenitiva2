export const HeroesCard = ({ id, nombre, tipo, origen, descripcion }) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img src={imgSrc} alt={nombre} className="card-img-top"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Origen: {origen}</p>
            <p className="card-text">Descripción: {descripcion}</p>
            <link to={`/hero/:${id}`}>ver más...</link>
          </div>
        </div>
      </div>
    </div>
  );
};

