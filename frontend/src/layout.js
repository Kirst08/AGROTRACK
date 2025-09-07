import { Link, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <div>
      <h1>Hello Baby</h1>
      <Link to="/Register">Registrarse</Link>
      <br />
      <button type="button" onClick={handleLogout}>
        Desloguearse
      </button>
    </div>
  );
}

export default Layout;
