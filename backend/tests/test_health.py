import pytest


@pytest.mark.django_db
def test_health_check_returns_service_status(client):
    response = client.get("/api/health/")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["brand"] == "Plansvel"

