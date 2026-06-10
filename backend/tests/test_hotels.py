import pytest


@pytest.mark.django_db
def test_featured_hotels_returns_initial_catalog(client):
    response = client.get("/api/hotels/featured/")

    assert response.status_code == 200
    payload = response.json()
    assert len(payload["results"]) == 3
    assert payload["results"][0]["name"] == "Itajuba Hotel"

