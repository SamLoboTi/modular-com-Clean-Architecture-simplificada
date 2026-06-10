# Projeto

## Nome

SmartTravel Booking Engine

## Marca

Plansvel

## Descricao

Marketplace full stack de turismo para busca, comparacao e reserva de hoteis, voos, pacotes e experiencias. O projeto foi pensado para demonstrar arquitetura, qualidade de codigo, testes, documentacao, produto visual e capacidade de evoluir para escala.

## Decisoes

- Comecar com monolito modular em vez de microsservicos.
- Usar Django + DRF no backend por produtividade, ORM maduro e ecossistema robusto.
- Usar React + TypeScript no frontend.
- Usar Recharts para graficos por ser popular, simples e bem integrado ao React.
- Usar CI/CD simples no inicio para reduzir friccao tecnica.

## Pontos criticos

- Evitar escopo grande demais na primeira versao.
- Priorizar um fluxo demonstravel: buscar hotel, ver resultado, reservar.
- Manter documentacao atualizada a cada iteracao.
- Separar regras de negocio de detalhes de framework sempre que fizer sentido.

## Ciberseguranca

Pontos obrigatorios em fases futuras:

- JWT com expiracao curta e refresh token.
- Hash seguro de senhas com algoritmos padrao do Django.
- Validacao de entrada em todos os endpoints.
- CORS configurado por ambiente.
- Rate limiting em login e busca.
- Protecao contra IDOR em reservas e perfis.
- Secrets fora do repositorio.
- Logs sem dados sensiveis.

## Roadmap resumido

1. Fundacao tecnica e visual.
2. Usuarios e autenticacao.
3. Hoteis e busca.
4. Reservas.
5. Dashboard.
6. Voos.
7. IA.
8. Deploy publico.

