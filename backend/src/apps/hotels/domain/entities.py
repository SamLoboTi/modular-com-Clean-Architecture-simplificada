from dataclasses import dataclass


@dataclass(frozen=True)
class Hotel:
    id: str
    name: str
    city: str
    country: str
    rating: float
    price_per_night: int
    image_url: str

