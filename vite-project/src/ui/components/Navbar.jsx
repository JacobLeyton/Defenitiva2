
import { NavLink } from "react-router-dom";
import LogoutButton from './LogoutButton';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img 
            src="https://fastpng.com/images/high/anime-logo-png-1ttjn59vwgp8oa4d.webp" 
            alt="Logo" 
            style={{ width: '50px', height: '50px' }}
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/anime">Anime</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comics">Comics</NavLink>
            </li>
            <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

