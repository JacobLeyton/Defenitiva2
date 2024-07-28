import { NavLink } from "react-router-dom";
import "../../../styles/neonBackground.css";

export const LoginPage = () => {
  return (
    <>
      <div className="neon-lines">
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        <div className="line left" style={{ left: '25%' }}></div>
        <div className="line left" style={{ left: '75%' }}></div>
        <div className="line top" style={{ top: '25%' }}></div>
        <div className="line top" style={{ top: '75%' }}></div>
      </div>
      <section className="h-100 gradient-form" style={{ backgroundColor: 'transparent' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div
                    className="col-lg-12"
                    style={{
                      backgroundImage: 'url(https://wallpapers.com/images/hd/red-darling-in-the-franxx-76cmmswlqtnsmf7h.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://images6.alphacoders.com/131/thumb-1920-1313754.png"
                          style={{ width: '185px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Bienvenido</h4>
                        <h5 className="mt-1 mb-5 pb-1">Por Favor Registrate o Inicia sesión para Continuar</h5>
                      </div>
                      <form>
                        <p>Iniciar sesión</p>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Numero de Telefono O Correo de Usuario"
                          />
                          <label className="form-label" htmlFor="form2Example11">
                            Nombre De Usuario
                          </label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control" />
                          <label className="form-label" htmlFor="form2Example22">
                            Contraseña
                          </label>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <NavLink className="btn btn-primary" to="/home">
                            Login
                          </NavLink>
                          <a className="text-muted" href="#!">
                            ¿Has olvidado tu contraseña?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">
                            ¿No tienes una Cuenta? Entonces preciona aqui
                          </p>
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-danger"
                          >
                            Crear Cuenta
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

