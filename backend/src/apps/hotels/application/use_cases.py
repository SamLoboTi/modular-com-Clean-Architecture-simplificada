from apps.hotels.domain.entities import Hotel


def list_featured_hotels() -> list[Hotel]:
    return [
        Hotel(
            id="hotel-itajuba",
            name="Itajuba Hotel",
            city="Rio de Janeiro",
            country="Brasil",
            rating=4.7,
            price_per_night=380,
            image_url="https://images.unsplash.com/photo-1566073771259-6a8506099945",
        ),
        Hotel(
            id="hotel-almirante-prime",
            name="Hotel Almirante Prime",
            city="Salvador",
            country="Brasil",
            rating=4.6,
            price_per_night=455,
            image_url="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        ),
        Hotel(
            id="resort-nusa-dua",
            name="Nusa Dua Resort",
            city="Bali",
            country="Indonesia",
            rating=4.9,
            price_per_night=920,
            image_url="https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        ),
    ]

