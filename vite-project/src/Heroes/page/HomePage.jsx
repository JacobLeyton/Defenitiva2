
import '../../../styles/HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Bienvenido a nuestro sitio web de Anime y Comic</h1>
            <p>Aquí Encontraras Lo Siguiente :</p>
            <ul className="list-group">
              <li className="list-group-item">Anime: Información sobre tus héroes de anime favoritos.</li>
              <li className="list-group-item">Comics: Explora los héroes de los comics.</li>
              <li className="list-group-item">Login: Accede a tu cuenta.</li>
              <li className="list-group-item">Logout: Cierra tu sesión de forma segura.</li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {/* Carta 1 */}
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img
                src="/assets/heroes/anime-himari.jpg"
                className="card-img-top"
                alt="Himari de Omamori Himari"
              />
              <div className="card-body">
                <h5 className="card-title">Himari de Omamori Himari</h5>
                <p className="card-text">Recomendado para los amantes del anime.</p>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://redirect.veoh.com/flash/p/2/v19571551CrNRK83S/h19571551.mp4?ct=773d599af7c2632938ab4a3b355f00c2490d834bc9da30e2"
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Carta 2 */}
          <div className="col-md-6 mb-4">
            <div className="card custom-card">
              <img
                src="/assets/heroes/anime-cid.jpg"
                className="card-img-top"
                alt="Shadow Garden de Cid"
              />
              <div className="card-body">
                <h5 className="card-title">Cid Kagenou</h5>
                <p className="card-text">Un personaje que quiere ser Un Dios pero que no quiere destacar mucho.</p>
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.kwai.com/@SENSEI_777/video/5200681772930147592"
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
