from dataclasses import dataclass


@dataclass(frozen=True)
class FlightLeg:
    label: str
    airline: str
    flight_number: str
    origin_code: str
    origin_city: str
    destination_code: str
    destination_city: str
    departure_time: str
    arrival_time: str
    duration: str


@dataclass(frozen=True)
class TravelPackage:
    id: str
    title: str
    route: str
    travelers: int
    base_price: int
    taxes: int
    airline_reference_price: int
    hotel_name: str
    nights: int
    legs: list[FlightLeg]
