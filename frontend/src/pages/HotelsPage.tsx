import { useMemo, useState } from "react";
import {
  BedDouble,
  CalendarDays,
  ChevronRight,
  Heart,
  MapPin,
  SlidersHorizontal,
  Star,
} from "lucide-react";

import { Button } from "../components/ui/Button";

const hotels = [
  {
    id: "itajuba-centro",
    name: "Itajubá Hotel",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Triplo Standard",
    details: "2 camas (1 de solteiro, 1 de casal)",
    distance: "1,2 km do centro",
    beach: "1,3 km da praia",
    reviews: "7.384 avaliações",
    score: "7,3",
    scoreLabel: "Bom",
    price: 380,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=88",
  },
  {
    id: "atlantico-prime",
    name: "Hotel Atlantico Prime",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Duplo Econômico",
    details: "Camas: 1 de casal ou 2 de solteiro",
    distance: "1,6 km do centro",
    beach: "2,1 km da praia",
    reviews: "25.868 avaliações",
    score: "7,1",
    scoreLabel: "Bom",
    price: 518,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=88",
  },
  {
    id: "itajuba-praia",
    name: "Itajubá Hotel",
    location: "Centro, Rio de Janeiro",
    room: "Quarto Triplo Standard",
    details: "2 camas (1 de solteiro, 1 de casal)",
    distance: "1,2 km do centro",
    beach: "1,3 km da praia",
    reviews: "7.384 avaliações",
    score: "7,3",
    scoreLabel: "Bom",
    price: 380,
    breakfast: true,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=88",
  },
  {
    id: "studio-catete",
    name: "Studio completo no Catete, em andar alto, com vista livre, próximo Metrô e praia do Flamengo, ar, wifi, tv, pauloangerami RC214",
    location: "Catete, Rio de Janeiro",
    room: "Apartamento de 1 Quarto",
    details: "Apartamento inteiro · 1 quarto · 1 sala · 1 banheiro · 40m²",
    distance: "3 km do centro",
    beach: "600 m da praia",
    reviews: "6 avaliações",
    score: "8,8",
    scoreLabel: "Fabuloso",
    price: 477,
    breakfast: false,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=88",
  },
];

export function HotelsPage() {
  const [budget, setBudget] = useState(650);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

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
    <>
      <section className="hotels-hero">
        <h1>Plansvel</h1>
      </section>

      <section className="hotels-content">
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
                <MapPin size={38} fill="currentColor" />
              </div>
              <Button>Mostrar na mapa</Button>
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
            </div>
          </aside>

          <div className="hotel-list">
            {filteredHotels.map((hotel) => (
              <article className="result-card" key={hotel.id}>
                <div className="result-image-wrap">
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
                    <Heart size={24} />
                  </button>
                </div>

                <div className="hotel-copy">
                  <div className="hotel-name-row">
                    <h3>{hotel.name}</h3>
                    <span className="stars">
                      <Star size={15} fill="currentColor" />
                      <Star size={15} fill="currentColor" />
                      <Star size={15} fill="currentColor" />
                      <Star size={15} fill="currentColor" />
                    </span>
                  </div>
                  <p className="hotel-location">
                    <a href="#">{hotel.location}</a>
                    <a href="#">Mostrar no mapa</a>
                    <span>{hotel.distance}</span>
                  </p>
                  <p className="beach">Perto do metrô · Perto da praia</p>
                  <p className="room">
                    <BedDouble size={15} />
                    {hotel.beach}
                  </p>
                  <p className="room-title">{hotel.room}</p>
                  <p className="room-detail">{hotel.details}</p>
                  {hotel.breakfast && (
                    <>
                      <p className="green-line">Café da manhã incluído</p>
                      <p className="red-line">
                        Resta 1 quarto por esse preço no nosso site
                      </p>
                    </>
                  )}
                </div>

                <div className="booking-column">
                  <div className="score">
                    <span>
                      {hotel.scoreLabel}
                      <small>{hotel.reviews}</small>
                    </span>
                    <strong>{hotel.score}</strong>
                  </div>
                  <small>13 diárias, 2 adultos</small>
                  <strong className="price">US${hotel.price}</strong>
                  <Button>
                    Ver disponibilidade
                    <ChevronRight size={16} />
                  </Button>
                  {hotel.breakfast && <button className="cart-button">Carrinho</button>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
