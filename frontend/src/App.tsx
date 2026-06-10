import { useMemo, useState, type ReactNode } from "react";
import {
  BedDouble,
  CalendarDays,
  ChevronRight,
  Heart,
  LogIn,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
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
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Taman Bunaken",
    location: "Sulawesi Utara",
    price: "R$ 000.000",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gunung Rinjani",
    location: "Lombok, NTB",
    price: "R$ 000.000",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const hotels = [
  {
    id: "itajuba-centro",
    name: "Itajubá Hotel",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Triplo Standard",
    details: "2 camas (1 de solteiro, 1 de casal)",
    distance: "1,2 km do centro",
    reviews: "7.384 avaliações",
    score: "7,3",
    price: 380,
    oldPrice: null,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "atlantico-prime",
    name: "Hotel Atlantico Prime",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Duplo Econômico",
    details: "Camas: 1 de casal ou 2 de solteiro",
    distance: "1,6 km do centro",
    reviews: "25.868 avaliações",
    score: "7,1",
    price: 518,
    oldPrice: null,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "itajuba-praia",
    name: "Itajubá Hotel",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Triplo Standard",
    details: "2 camas (1 de solteiro, 1 de casal)",
    distance: "1,2 km do centro",
    reviews: "7.384 avaliações",
    score: "7,3",
    price: 380,
    oldPrice: null,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  },
];

export function App() {
  const [budget, setBudget] = useState(650);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(2);

  const filteredHotels = useMemo(
    () => hotels.filter((hotel) => hotel.price <= budget),
    [budget],
  );

  function toggleFavorite(id: string) {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  }

  return (
    <main className="app-shell">
      <Header cartCount={cartCount} />

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Plansvel</h1>
          <p>
            Este texto apresenta o meu percurso de investigação sobre o tema
            imaginários da Música e do Turismo e contextualiza a publicação deste
            número especial da Via Tourism Review.
          </p>
          <Button className="about-button">Sobre Nós</Button>
        </div>
      </section>

      <section className="mobile-search-panel" aria-label="Busca rápida">
        <SearchField icon={<BedDouble size={22} />} label="Para onde você vai?" />
        <SearchField icon={<CalendarDays size={22} />} label="Data de check in" />
        <SearchField icon={<UserRound size={22} />} label="Quantidade de pessoas" />
        <Button className="mobile-search-button">
          <Search size={20} />
          Pesquisar
        </Button>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="destinations-title">
          <span>Destinatinos</span>
          <strong>Populares</strong>
        </div>
        <div className="carousel-controls" aria-label="Controles de destinos">
          <button aria-label="Destino anterior">←</button>
          <button aria-label="Próximo destino">→</button>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <img src={destination.image} alt={destination.name} />
              <div className="destination-info">
                <p>
                  <MapPin size={14} />
                  {destination.location}
                  <Star size={14} fill="currentColor" />
                  {destination.rating}
                </p>
                <h3>{destination.name}</h3>
                <span>{destination.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hotels-page" id="hotels">
        <div className="hotel-search-card">
          <h2>HOTÉIS</h2>
          <div className="hotel-search-grid">
            <label className="input-control destination-input">
              <span>Para onde você vai?</span>
              <strong>
                <MapPin size={18} />
                Busque cidade ou aeroporto
              </strong>
            </label>
            <label className="input-control">
              <span>Escolha o período</span>
              <strong>
                <CalendarDays size={18} />
                Check in
                <em>Checkout</em>
              </strong>
            </label>
            <label className="input-control">
              <span>Quartos e hóspedes</span>
              <strong>
                <BedDouble size={18} />1 quarto, 2 hóspedes
              </strong>
            </label>
            <Button className="hotel-search-button">Buscar Hotéis</Button>
          </div>
        </div>

        <div className="hotel-results-layout">
          <aside className="filters-column" aria-label="Filtros de hotéis">
            <div className="map-card">
              <div className="map-pin">
                <MapPin size={30} fill="currentColor" />
              </div>
              <Button>Mostrar no mapa</Button>
            </div>

            <div className="filter-card">
              <h3>
                <SlidersHorizontal size={16} />
                Filtrar resultados por:
              </h3>
              <label htmlFor="budget">Seu orçamento (por diária)</label>
              <input
                id="budget"
                max="950"
                min="300"
                onChange={(event) => setBudget(Number(event.target.value))}
                type="range"
                value={budget}
              />
              <strong>Até R$ {budget}</strong>
            </div>
          </aside>

          <div className="hotel-list">
            {filteredHotels.map((hotel) => (
              <article className="result-card" key={hotel.id}>
                {hotel.breakfast && (
                  <div className="breakfast-badge">Café da manhã incluído</div>
                )}
                <img src={hotel.image} alt={hotel.name} />
                <button
                  aria-label="Favoritar hotel"
                  className={`favorite-button ${
                    favoriteIds.includes(hotel.id) ? "is-favorite" : ""
                  }`}
                  onClick={() => toggleFavorite(hotel.id)}
                >
                  <Heart size={21} fill="currentColor" />
                </button>
                <div className="hotel-copy">
                  <div className="hotel-name-row">
                    <h3>{hotel.name}</h3>
                    <span className="stars">
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                      <Star size={13} fill="currentColor" />
                    </span>
                  </div>
                  <p className="hotel-location">
                    {hotel.location}
                    <a href="#map">Mostrar no mapa</a>
                    <span>{hotel.distance}</span>
                  </p>
                  <p className="beach">Perto do metrô · Perto da praia</p>
                  <p className="room">
                    <BedDouble size={15} />
                    {hotel.room}
                  </p>
                  <p className="room-detail">{hotel.details}</p>
                  <p className="green-line">Café da manhã incluído</p>
                  <p className="red-line">
                    Resta 1 quarto por esse preço no nosso site
                  </p>
                </div>
                <div className="booking-column">
                  <div className="score">
                    <span>
                      Bom
                      <small>{hotel.reviews}</small>
                    </span>
                    <strong>{hotel.score}</strong>
                  </div>
                  <small>13 diárias, 2 adultos</small>
                  <strong className="price">US${hotel.price}</strong>
                  <Button onClick={() => setCartCount((count) => count + 1)}>
                    Ver disponibilidade
                    <ChevronRight size={16} />
                  </Button>
                  <button className="cart-button">Carrinho</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Plansvel Home">
        <span className="brand-mark" />
        <span>
          Plansvel<b>|</b>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#home">Home</a>
        <a href="#packages">Pacotes</a>
        <a href="#destinations">Destinos</a>
        <a href="#about">Sobre Nós</a>
        <a href="#hotels">Serviços</a>
      </nav>

      <div className="topbar-actions">
        <button className="cart-icon" aria-label="Abrir carrinho">
          <ShoppingCart size={27} />
          <span>{cartCount}</span>
        </button>
        <Button className="login-button">
          Login
          <LogIn size={18} />
        </Button>
        <button className="icon-button" aria-label="Abrir menu">
          <Menu size={34} />
        </button>
      </div>
    </header>
  );
}

function SearchField({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <label className="mobile-field">
      {icon}
      <span>{label}</span>
    </label>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">
          <span />
          Plansvel
        </a>
        <p>
          Não Demore, É Hora De Você Viajar
          <br />
          Pelo Mundo E Descobrir Outras Coisas
          <br />
          Novas E Interessantes.
        </p>
        <div className="footer-bottom">
          <strong>Plansvel @2024</strong>
          <div className="social-icons" aria-label="Redes sociais">
            <a href="#facebook">f</a>
            <a href="#twitter">t</a>
            <a href="#instagram">◎</a>
            <a href="#youtube">▶</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
