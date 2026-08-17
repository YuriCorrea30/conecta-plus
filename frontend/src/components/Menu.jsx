import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <div className="logo">
        <h2>Conecta Plus</h2>
        <span>Informação e conexão</span>
      </div>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/alertas">Alertas</Link>
        </li>

        <li>
          <Link to="/informacoes">Informações</Link>
        </li>

        <li>
          <Link to="/orientacoes">Orientações</Link>
        </li>

        <li>
          <Link to="/usuarios">Usuários</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;