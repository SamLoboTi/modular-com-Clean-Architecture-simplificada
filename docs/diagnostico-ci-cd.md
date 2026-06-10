# Diagnostico CI/CD - Plansvel

Data: 2026-06-10

## Pipeline local

| Stage | Status | Evidencia |
| --- | --- | --- |
| Repository checkout | PASS | Branch local `main` acompanhando `origin/main` |
| Frontend dev server | PASS | Vite respondendo localmente em `http://127.0.0.1:5180` |
| Public tunnel | PASS | Cloudflare Tunnel ativo em `https://donated-ali-williams-described.trycloudflare.com/` |
| Public smoke test | PASS | `curl -I` retornou `HTTP/1.1 200 OK` |
| Backend tests | PASS | `python -m pytest -q` retornou `3 passed` |
| Frontend production build | PASS_WITH_WARNING | `npm run build` concluido; bundle JS com aviso de tamanho acima de 500 kB |
| Backend runtime background | ATTENTION | Backend valida por testes/checks, mas nesta sessao nao permaneceu ativo em background via `Start-Process` |

## CD temporario

O sistema esta publicado temporariamente por Cloudflare Tunnel:

```txt
https://donated-ali-williams-described.trycloudflare.com/
```

Este endpoint aponta para o frontend Vite local na porta `5180`.

## Diagnostico por camada

### Frontend

Status: **PASS**

- Aplicacao Plansvel sobe localmente.
- Build de producao concluido.
- Interface publica acessivel pelo tunnel.
- Recharts aumenta o tamanho do bundle, gerando aviso do Vite.

Risco:

- Bundle principal em torno de 601 kB apos minificacao.

Acao recomendada:

- Em uma proxima iteracao, aplicar code splitting no dashboard ou carregar graficos sob demanda.

### Backend

Status: **PASS_WITH_ATTENTION**

- Testes automatizados passam.
- Health check e catalogo inicial de hoteis estao cobertos por testes.
- Django `check` passou em validacao anterior sem issues.

Atencao:

- O servidor Django nao permaneceu ativo em background nesta sessao usando `Start-Process`, embora o comando em primeiro plano permaneca rodando ate timeout.

Acao recomendada:

- Criar scripts oficiais `scripts/start-backend.ps1` e `scripts/start-frontend.ps1`.
- Avaliar Docker Compose para subir frontend/backend/postgres de forma padronizada.

### CI

Status: **PASS**

- Workflow `.github/workflows/ci.yml` existe.
- Backend executa instalacao de dependencias e `pytest`.
- Frontend executa `npm ci` e `npm run build`.

Acao recomendada:

- Adicionar etapa de lint/format em backend e frontend.
- Adicionar cache de pip/npm para reduzir tempo de pipeline.

### CD

Status: **TEMPORARY_PASS**

- Deploy temporario via Cloudflare Tunnel esta ativo.
- Ainda nao existe deploy persistente em Render, Railway ou Azure.

Acao recomendada:

- Criar pipeline de deploy real quando o MVP tiver login e busca integrada.

## Resultado final

Status geral: **PASS_WITH_ATTENTION**

O sistema esta no ar para demonstracao visual pelo tunnel publico. A base tecnica esta saudavel para continuar o desenvolvimento. Os principais pontos a resolver nas proximas iteracoes sao padronizacao de runtime local, reducao do bundle frontend e criacao de um deploy persistente.

