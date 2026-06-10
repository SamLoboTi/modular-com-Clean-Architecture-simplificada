import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Facebook,
  LogIn,
  MapPin,
  Menu,
  Play,
  Search,
  Star,
  Twitter,
  UserRound,
} from "lucide-react";

import { Button } from "./components/ui/Button";

const destinations = [
  {
    name: "Nusa Dua",
    location: "Bali, Indonesia",
    price: "R$ 000.000",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=88",
  },
  {
    name: "Taman Bunaken",
    location: "Sulawesi Utara",
    price: "R$ 000.000",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=88",
  },
  {
    name: "Gunung Rinjani",
    location: "Lombok, NTB",
    price: "R$ 000.000",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=88",
  },
  {
    name: "Danau Toba",
    location: "Sumatera Utara",
    price: "R$ 000.000",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=88",
  },
];

export function App() {
  return (
    <main className="app-shell">
      <Header />
      <HomeHero />
      <HomeSearch />
      <Destinations />
      <TravelNeeds />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Plansvel Home">
        <span className="brand-dot" />
        <span>
          Plansvel<b>|</b>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#packages">Pacotes</a>
        <a href="#destinations">Destinos</a>
        <a href="#about">Sobre Nós</a>
        <a href="#services">Serviços</a>
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

function HomeHero() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero-copy">
        <h1>Plansvel</h1>
        <p>
          Este texto apresenta o meu percurso de investigação sobre o tema
          Imaginários da Música e do Turismo e contextualiza a publicação deste
          número especial da Via Tourism Review.
        </p>
        <Button className="about-button">Sobre Nós</Button>
      </div>
    </section>
  );
}

function HomeSearch() {
  return (
    <section className="home-search" aria-label="Busca de viagem">
      <label className="search-box search-destination">
        <BedDouble size={26} />
        <span>Para onde você vai?</span>
      </label>

      <label className="search-box">
        <span>Data de check in</span>
      </label>

      <label className="search-box search-guests">
        <UserRound size={20} />
        <span>Quantidade de...</span>
      </label>

      <button className="search-submit" type="button">
        Pesquisar
      </button>

      <button className="calendar-button" aria-label="Abrir calendário">
        <CalendarDays size={42} />
      </button>
    </section>
  );
}

function Destinations() {
  return (
    <section className="destinations-block" id="destinations">
      <div className="section-title">
        <h2>Destinatinos</h2>
        <strong>Polulares</strong>
      </div>

      <div className="slider-buttons" aria-label="Controles de destinos">
        <button type="button" aria-label="Destino anterior">
          ←
        </button>
        <button type="button" aria-label="Próximo destino">
          →
        </button>
      </div>

      <div className="destination-cards">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.name}>
            <img src={destination.image} alt={destination.name} />
            <div className="destination-card-panel">
              <p>
                <span>
                  <MapPin size={15} />
                  {destination.location}
                </span>
                <span>
                  <Star size={16} fill="currentColor" />
                  {destination.rating}
                </span>
              </p>
              <h3>{destination.name}</h3>
              <small>{destination.price}</small>
              <button type="button" aria-label={`Abrir ${destination.name}`}>
                <ArrowRight size={20} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TravelNeeds() {
  return (
    <section className="travel-needs" id="services">
      <div className="needs-images">
        <img
          className="santorini-img"
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1100&q=88"
          alt="Casas brancas em destino costeiro"
        />
        <img
          className="resort-img"
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1100&q=88"
          alt="Resort sobre águas cristalinas"
        />
      </div>

      <div className="needs-copy">
        <h2>
          Coisas Que Você Precisa
          <br />
          Prepare-Se <span>Antes De Viajar</span>
        </h2>

        <ol>
          <li>
            <span>01.</span>
            <div>
              <h3>Melhor Comida</h3>
              <p>Nós Fornecemos A Melhor Qualidade Alimentos Aos Nossos Clientes.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Melhor Plano De Viagem</h3>
              <p>Oferecemos As Melhores Viagens Pacotes Para Você.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Melhores Voos</h3>
              <p>
                Nós Fornecemos O Melhor Voo Experiência De Nossa Companhia Aérea
                Confiável.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-logo" href="#home">
          <span />
          Plansvel
        </a>

        <p>
          Não Demore, É Hora De Você Viajar
          <br />
          Pelo Mundo E Descobrir Outras
          <br />
          Coisas Novas E Interessantes.
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
