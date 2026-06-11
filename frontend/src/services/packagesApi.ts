export type FlightLeg = {
  label: "IDA" | "VOLTA";
  airline: string;
  flight_number: string;
  origin_code: string;
  origin_city: string;
  destination_code: string;
  destination_city: string;
  departure_time: string;
  arrival_time: string;
  duration: string;
};

export type TravelPackage = {
  id: string;
  title: string;
  route: string;
  travelers: number;
  base_price: number;
  taxes: number;
  airline_reference_price: number;
  hotel_name: string;
  nights: number;
  legs: FlightLeg[];
};

const fallbackPackages: TravelPackage[] = [
  {
    id: "rio-campinas-weekend",
    title: "Rio de Janeiro + Campinas Express",
    route: "GIG -> VCP",
    travelers: 1,
    base_price: 418,
    taxes: 92,
    airline_reference_price: 657,
    hotel_name: "Hotel Atlantico Prime",
    nights: 3,
    legs: [
      {
        label: "IDA",
        airline: "GOL",
        flight_number: "G3-1960",
        origin_code: "GIG",
        origin_city: "Rio de Janeiro",
        destination_code: "VCP",
        destination_city: "Campinas",
        departure_time: "21:55",
        arrival_time: "23:15",
        duration: "01h 20m",
      },
      {
        label: "VOLTA",
        airline: "GOL",
        flight_number: "G3-1960",
        origin_code: "VCP",
        origin_city: "Campinas",
        destination_code: "GIG",
        destination_city: "Rio de Janeiro",
        departure_time: "21:55",
        arrival_time: "23:15",
        duration: "01h 20m",
      },
    ],
  },
  {
    id: "sp-salvador-praia",
    title: "Sao Paulo + Salvador Praia",
    route: "CGH -> SSA",
    travelers: 2,
    base_price: 764,
    taxes: 146,
    airline_reference_price: 980,
    hotel_name: "Bahia Coast Hotel",
    nights: 5,
    legs: [
      {
        label: "IDA",
        airline: "LATAM",
        flight_number: "LA-3312",
        origin_code: "CGH",
        origin_city: "Sao Paulo",
        destination_code: "SSA",
        destination_city: "Salvador",
        departure_time: "08:10",
        arrival_time: "10:35",
        duration: "02h 25m",
      },
      {
        label: "VOLTA",
        airline: "LATAM",
        flight_number: "LA-3313",
        origin_code: "SSA",
        origin_city: "Salvador",
        destination_code: "CGH",
        destination_city: "Sao Paulo",
        departure_time: "18:40",
        arrival_time: "21:05",
        duration: "02h 25m",
      },
    ],
  },
  {
    id: "rio-recife-cultura",
    title: "Rio de Janeiro + Recife Cultural",
    route: "SDU -> REC",
    travelers: 1,
    base_price: 589,
    taxes: 118,
    airline_reference_price: 790,
    hotel_name: "Marco Zero Boutique",
    nights: 4,
    legs: [
      {
        label: "IDA",
        airline: "AZUL",
        flight_number: "AD-4020",
        origin_code: "SDU",
        origin_city: "Rio de Janeiro",
        destination_code: "REC",
        destination_city: "Recife",
        departure_time: "06:45",
        arrival_time: "09:35",
        duration: "02h 50m",
      },
      {
        label: "VOLTA",
        airline: "AZUL",
        flight_number: "AD-4021",
        origin_code: "REC",
        origin_city: "Recife",
        destination_code: "SDU",
        destination_city: "Rio de Janeiro",
        departure_time: "19:10",
        arrival_time: "22:00",
        duration: "02h 50m",
      },
    ],
  },
];

export async function fetchFeaturedPackages(): Promise<TravelPackage[]> {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

  try {
    const response = await fetch(`${apiBaseUrl}/api/packages/featured/`);

    if (!response.ok) {
      return fallbackPackages;
    }

    const payload = (await response.json()) as { results: TravelPackage[] };
    return payload.results;
  } catch {
    return fallbackPackages;
  }
}

export { fallbackPackages };
