import { LogIn, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Plansvel Home">
        <span className="brand-dot" />
        <span>
          Plansvel<b>|</b>
        </span>
      </Link>

      <nav className="main-nav" aria-label="Navegacao principal">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/packages">Pacotes</Link>
        <Link to="/destinations">Destinos</Link>
        <Link to="/about">Sobre Nos</Link>
        <Link to="/hotels">Servicos</Link>
      </nav>

      <Button className="login-button">
        Login
        <LogIn size={18} />
      </Button>

      <button className="menu-button" aria-label="Abrir menu">
        <Menu size={38} />
      </button>
    </header>
  );
}
