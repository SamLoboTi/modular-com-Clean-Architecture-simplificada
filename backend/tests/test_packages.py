import pytest


@pytest.mark.django_db
def test_featured_packages_returns_flight_package_catalog(client):
    response = client.get("/api/packages/featured/")

    assert response.status_code == 200
    payload = response.json()
    assert len(payload["results"]) == 3
    assert payload["results"][0]["title"] == "Rio de Janeiro + Campinas Express"
    assert payload["results"][0]["legs"][0]["label"] == "IDA"
    assert payload["results"][0]["base_price"] == 418
