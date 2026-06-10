from pytest_bdd import scenarios, then, when


scenarios("features/platform_health.feature")


@when("the client checks the platform health", target_fixture="health_response")
def check_platform_health(client):
    return client.get("/api/health/")


@then("the API should report Plansvel as available")
def api_reports_plansvel_available(health_response):
    assert health_response.status_code == 200
    assert health_response.json()["brand"] == "Plansvel"
    assert health_response.json()["status"] == "ok"

