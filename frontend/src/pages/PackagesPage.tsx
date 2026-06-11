import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeftRight,
  CalendarDays,
  Plane,
  PlaneTakeoff,
  UserRound,
} from "lucide-react";

import { Button } from "../components/ui/Button";
import {
  fallbackPackages,
  fetchFeaturedPackages,
  type TravelPackage,
} from "../services/packagesApi";

function money(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

export function PackagesPage() {
  const [packages, setPackages] = useState<TravelPackage[]>(fallbackPackages);
  const [selectedPackageId, setSelectedPackageId] = useState(fallbackPackages[0].id);

  useEffect(() => {
    fetchFeaturedPackages().then((results) => {
      setPackages(results);
      setSelectedPackageId(results[0]?.id ?? fallbackPackages[0].id);
    });
  }, []);

  const selectedPackage = useMemo(
    () =>
      packages.find((travelPackage) => travelPackage.id === selectedPackageId) ??
      packages[0],
    [packages, selectedPackageId],
  );

  return (
    <section className="packages-page">
      <div className="packages-hero">
        <div>
          <span>Embarque internacional</span>
          <h1>Pacotes para descobrir novos paises</h1>
          <p>Voos, hospedagem e roteiro em uma experiencia Plansvel.</p>
        </div>
      </div>

      <div className="flight-search-card">
        <div className="flight-search-head">
          <h1>PASSAGENS AEREAS</h1>
          <div className="trip-toggle" aria-label="Tipo de viagem">
            <button className="is-active">Ida e volta</button>
            <button>Somente ida</button>
          </div>
        </div>

        <div className="flight-search-grid">
          <label className="flight-field">
            <span>De onde voce esta saindo?</span>
            <strong>
              <PlaneTakeoff size={17} />
              Busque por aeroporto
            </strong>
          </label>

          <button className="swap-button" aria-label="Inverter origem e destino">
            <ArrowLeftRight size={24} />
          </button>

          <label className="flight-field">
            <span>Para onde voce vai?</span>
            <strong>
              <Plane size={17} />
              Busque por aeroporto
            </strong>
          </label>

          <label className="flight-field dates-field">
            <span>Escolha as datas</span>
            <strong>
              <CalendarDays size={17} />
              Ida
              <em>Volta</em>
            </strong>
          </label>

          <label className="flight-field">
            <span>Passageiros</span>
            <strong>
              <UserRound size={17} />1 Passageiro
            </strong>
          </label>

          <Button className="flight-search-button">Buscar Voos</Button>
        </div>
      </div>

      <div className="packages-content">
        <aside className="package-selector" aria-label="Modelos de pacotes">
          <h2>Pacotes Plansvel</h2>
          {packages.map((travelPackage) => (
            <button
              className={travelPackage.id === selectedPackageId ? "is-selected" : ""}
              key={travelPackage.id}
              onClick={() => setSelectedPackageId(travelPackage.id)}
              type="button"
            >
              <span>{travelPackage.title}</span>
              <strong>{money(travelPackage.base_price)}</strong>
              <small>
                {travelPackage.nights} noites · {travelPackage.hotel_name}
              </small>
            </button>
          ))}
        </aside>

        <div className="flight-results">
          {packages.map((travelPackage) => (
            <article
              className={`flight-package ${
                travelPackage.id === selectedPackage.id ? "is-highlighted" : ""
              }`}
              key={travelPackage.id}
            >
              <div className="flight-itinerary">
                <div className="airport-head">
                  <span />
                  <div>
                    <h3>({travelPackage.legs[0].origin_code}) Galeao</h3>
                    <strong>{travelPackage.legs[0].origin_city}</strong>
                  </div>
                  <div>
                    <h3>({travelPackage.legs[0].destination_code}) Viracopos</h3>
                    <strong>{travelPackage.legs[0].destination_city}</strong>
                  </div>
                </div>

                {travelPackage.legs.map((leg, index) => (
                  <div className="flight-leg" key={`${travelPackage.id}-${leg.label}`}>
                    <h2>{leg.label}</h2>
                    <div className="leg-row">
                      <span
                        className={`route-dot ${index === 1 ? "is-muted" : ""}`}
                        aria-hidden="true"
                      />
                      <p>
                        <strong>{leg.airline}</strong>
                        voo {leg.flight_number}
                      </p>
                      <p>
                        <strong>{leg.departure_time}</strong>
                        {leg.origin_code}
                      </p>
                      <p>
                        <strong>Direto</strong>
                        {leg.duration}
                      </p>
                      <p>
                        <strong>{leg.arrival_time}</strong>
                        {leg.destination_code}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="price-summary">
                <div className="price-summary-head">
                  <strong>{money(travelPackage.base_price)}</strong>
                  <span>por adulto, sem taxas</span>
                  <small>Na cia aerea {money(travelPackage.airline_reference_price)}</small>
                </div>
                <dl>
                  <div>
                    <dt>{travelPackage.travelers} Adulto:</dt>
                    <dd>{money(travelPackage.base_price)}</dd>
                  </div>
                  <div>
                    <dt>Valor das taxas</dt>
                    <dd>{money(travelPackage.taxes)}</dd>
                  </div>
                  <div className="total-row">
                    <dt>TOTAL</dt>
                    <dd>{money(travelPackage.base_price + travelPackage.taxes)}</dd>
                  </div>
                </dl>
                <p>Em ate 12x com juros no cartao de credito</p>
                <Button>Realizar Pedido</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
