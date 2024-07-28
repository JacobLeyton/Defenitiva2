
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const handleLogout = (navigate) => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡Estás a punto de cerrar sesión!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Sesión cerrada!",
        text: "Has cerrado sesión correctamente.",
        icon: "success"
      }).then(() => {
        navigate("/login");
      });
    }
  });
};

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <button className="nav-link btn btn-link" onClick={() => handleLogout(navigate)}>
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
