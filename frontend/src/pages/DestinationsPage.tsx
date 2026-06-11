import { ArrowRight, MapPin, Star } from "lucide-react";

import { destinations } from "../data/destinations";

export function DestinationsPage() {
  return (
    <section className="destinations-page">
      <div className="destinations-hero">
        <div>
          <span>Destinos Plansvel</span>
          <h1>Explore paises que combinam com o seu proximo momento.</h1>
          <p>
            Uma curadoria visual de lugares populares para inspirar pacotes,
            hospedagens e roteiros completos.
          </p>
        </div>
      </div>

      <section className="destinations-showcase">
        <div className="destinations-page-title">
          <span>Inspirado em grandes marketplaces de viagem</span>
          <h2>Destinos Populares</h2>
          <p>
            Cards preparados para futura automacao com busca, filtros, favoritos,
            comparacao de preco e recomendacoes inteligentes.
          </p>
        </div>

        <div className="destinations-page-grid">
          {destinations.map((destination) => (
            <article className="destination-feature-card" key={destination.name}>
              <img src={destination.image} alt={destination.name} />
              <div>
                <p>
                  <span>
                    <MapPin size={15} />
                    {destination.location}, {destination.country}
                  </span>
                  <strong>
                    <Star size={16} fill="currentColor" />
                    {destination.rating}
                  </strong>
                </p>
                <h3>{destination.name}</h3>
                <small>{destination.description}</small>
                <footer>
                  <b>{destination.price}</b>
                  <button type="button" aria-label={`Explorar ${destination.name}`}>
                    <ArrowRight size={20} />
                  </button>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
