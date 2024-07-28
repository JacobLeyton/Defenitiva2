
import { Link } from 'react-router-dom';

const InfoPages = () => {
    return (
        <div>
            <h2>Páginas Disponibles</h2>
            <ul>
                <li><Link to="/anime"><strong>Animé:</strong></Link> Página donde encontrarás información sobre personajes de animé.</li>
                <li><Link to="/comics"><strong>Cómics:</strong></Link> Página donde encontrarás información sobre personajes de cómics.</li>
                <li><Link to="/login"><strong>Login:</strong></Link> Página para iniciar sesión en el sitio.</li>
                <li><Link to="/logout"><strong>Logout:</strong></Link> Página para cerrar sesión del sitio.</li>
            </ul>
        </div>
    );
};

export default InfoPages;

