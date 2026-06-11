export type Destination = {
  name: string;
  location: string;
  country: string;
  price: string;
  rating: string;
  image: string;
  description: string;
};

export const destinations: Destination[] = [
  {
    name: "Nusa Dua",
    location: "Bali",
    country: "Indonesia",
    price: "R$ 4.280",
    rating: "4.8",
    image: "/assets/plansvel/destination-bali.jpg",
    description: "Templos, praias tranquilas e resorts para uma viagem tropical completa.",
  },
  {
    name: "Atol Ari",
    location: "Maldivas",
    country: "Oceano Indico",
    price: "R$ 8.940",
    rating: "4.9",
    image: "/assets/plansvel/destination-maldives.jpg",
    description: "Ilhas privativas, agua cristalina e hospedagens sobre o mar.",
  },
  {
    name: "Roma Antica",
    location: "Roma",
    country: "Italia",
    price: "R$ 5.760",
    rating: "4.7",
    image: "/assets/plansvel/destination-rome.jpg",
    description: "Historia, gastronomia e rotas culturais em uma capital iconica.",
  },
  {
    name: "Paris Luz",
    location: "Paris",
    country: "Franca",
    price: "R$ 6.180",
    rating: "4.8",
    image: "/assets/plansvel/destination-paris.jpg",
    description: "Museus, arquitetura classica e experiencias romanticas pela cidade.",
  },
  {
    name: "Tokyo Neon",
    location: "Tokyo",
    country: "Japao",
    price: "R$ 7.420",
    rating: "4.9",
    image: "/assets/plansvel/destination-tokyo.jpg",
    description: "Tecnologia, cultura pop, templos e gastronomia em ritmo intenso.",
  },
  {
    name: "Dubai Skyline",
    location: "Dubai",
    country: "Emirados Arabes",
    price: "R$ 6.890",
    rating: "4.7",
    image: "/assets/plansvel/destination-dubai.jpg",
    description: "Arquitetura futurista, compras, deserto e hotelaria de alto padrao.",
  },
  {
    name: "Santorini",
    location: "Ciclades",
    country: "Grecia",
    price: "R$ 6.540",
    rating: "4.8",
    image: "/assets/plansvel/destination-santorini.jpg",
    description: "Casas brancas, mar Egeu e por do sol entre vilas costeiras.",
  },
  {
    name: "Nova York",
    location: "Nova York",
    country: "Estados Unidos",
    price: "R$ 5.980",
    rating: "4.6",
    image: "/assets/plansvel/destination-new-york.jpg",
    description: "Arte, negocios, skyline e entretenimento em todos os bairros.",
  },
];
