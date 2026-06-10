import { Facebook, Play, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-logo" to="/">
          <span />
          Plansvel
        </Link>

        <p>
          Não Demore, É Hora De Você Viajar
          <br />
          Pelo Mundo E Descobrir Outras Coisas
          <br />
          Novas E Interessantes.
        </p>

        <div className="footer-bar">
          <strong>
            Plansvel <b>@2024</b>
          </strong>

          <div className="footer-social" aria-label="Redes sociais">
            <a href="#facebook" aria-label="Facebook">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <Twitter size={18} fill="currentColor" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              ◎
            </a>
            <a href="#youtube" aria-label="YouTube">
              <Play size={16} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
