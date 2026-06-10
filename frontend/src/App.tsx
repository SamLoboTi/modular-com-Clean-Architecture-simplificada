import {
  BarChart3,
  CalendarDays,
  Heart,
  Hotel,
  MapPin,
  Menu,
  Plane,
  Search,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "./components/ui/Button";

const destinations = [
  {
    name: "Itajuba Hotel",
    location: "Rio de Janeiro",
    price: "R$ 380",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nusa Dua Resort",
    location: "Bali, Indonesia",
    price: "R$ 920",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Almirante Prime",
    location: "Salvador",
    price: "R$ 455",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  },
];

const bookingData = [
  { month: "Jan", reservas: 42 },
  { month: "Fev", reservas: 58 },
  { month: "Mar", reservas: 75 },
  { month: "Abr", reservas: 91 },
  { month: "Mai", reservas: 123 },
  { month: "Jun", reservas: 148 },
];

export function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-mark" />
          <span>Plansvel</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegacao principal">
          <a href="#home">Home</a>
          <a href="#hotels">Hoteis</a>
          <a href="#packages">Pacotes</a>
          <a href="#dashboard">Dashboard</a>
        </nav>

        <div className="topbar-actions">
          <Button variant="ghost">
            <Heart size={18} />
            Favoritos
          </Button>
          <Button>
            <UserRound size={18} />
            Login
          </Button>
          <button className="icon-button" aria-label="Abrir menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">SmartTravel Booking Engine</p>
          <h1>Plansvel</h1>
          <p>
            Busque hoteis, compare experiencias e organize sua proxima viagem
            com uma plataforma moderna de turismo.
          </p>
        </div>
      </section>

      <section className="search-panel" aria-label="Busca de hospedagem">
        <div className="field">
          <MapPin size={18} />
          <div>
            <span>Destino</span>
            <strong>Rio de Janeiro ou aeroporto</strong>
          </div>
        </div>
        <div className="field">
          <CalendarDays size={18} />
          <div>
            <span>Periodo</span>
            <strong>12 jun - 18 jun</strong>
          </div>
        </div>
        <div className="field">
          <UserRound size={18} />
          <div>
            <span>Hospedes</span>
            <strong>2 adultos, 1 quarto</strong>
          </div>
        </div>
        <Button className="search-button">
          <Search size={18} />
          Buscar hoteis
        </Button>
      </section>

      <section className="content-grid" id="hotels">
        <div className="section-heading">
          <p>Destinos populares</p>
          <h2>Hospedagens em destaque</h2>
        </div>

        <div className="cards-grid">
          {destinations.map((destination) => (
            <article className="hotel-card" key={destination.name}>
              <img src={destination.image} alt={destination.name} />
              <div className="hotel-card-body">
                <div>
                  <p>
                    <MapPin size={14} />
                    {destination.location}
                  </p>
                  <h3>{destination.name}</h3>
                </div>
                <div className="rating">
                  <Star size={15} fill="currentColor" />
                  {destination.rating}
                </div>
                <footer>
                  <span>A partir de</span>
                  <strong>{destination.price}</strong>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="operations" id="dashboard">
        <div className="section-heading">
          <p>Operacao</p>
          <h2>Dashboard da plataforma</h2>
        </div>

        <div className="metrics">
          <article>
            <Hotel size={22} />
            <span>Hoteis ativos</span>
            <strong>128</strong>
          </article>
          <article>
            <Plane size={22} />
            <span>Rotas simuladas</span>
            <strong>42</strong>
          </article>
          <article>
            <ShieldCheck size={22} />
            <span>Reservas seguras</span>
            <strong>98%</strong>
          </article>
          <article>
            <BarChart3 size={22} />
            <span>Receita mensal</span>
            <strong>R$ 84k</strong>
          </article>
        </div>

        <div className="chart-panel">
          <h3>Reservas por mes</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={bookingData} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="bookingFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#ff4d12" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#ff4d12" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                dataKey="reservas"
                fill="url(#bookingFill)"
                stroke="#ff4d12"
                strokeWidth={3}
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
}

