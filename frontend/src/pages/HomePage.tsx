import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  MapPin,
  Search,
  Star,
  UserRound,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import { destinations } from "../data/destinations";

export function HomePage() {
  return (
    <>
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

      <section className="destinations-block" id="destinations">
        <div className="section-title">
          <h2>Destinos</h2>
          <strong>Populares</strong>
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
          {destinations.slice(0, 4).map((destination) => (
            <article className="destination-card" key={destination.name}>
              <img src={destination.image} alt={destination.name} />
              <div className="destination-card-panel">
                <p>
                  <span>
                    <MapPin size={15} />
                    {destination.location}, {destination.country}
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
    </>
  );
}
