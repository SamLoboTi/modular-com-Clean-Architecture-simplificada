# Arquitetura

## Decisao principal

O SmartTravel Booking Engine com marca Plansvel usa um **monolito modular com Clean Architecture simplificada**.

Essa decisao permite entregar um produto funcional mais rapido, mantendo separacao por dominio e preparando o projeto para evoluir para microsservicos quando houver necessidade real.

## Por que nao microsservicos agora

Microsservicos seriam interessantes em um cenario de alta escala, equipes separadas e dominios ja maduros. Para o inicio do projeto, eles criariam complexidade em autenticacao distribuida, comunicacao entre servicos, deploy separado, observabilidade, versionamento de APIs e bancos independentes.

O monolito modular mantem o codigo organizado e demonstravel para recrutadores sem sacrificar velocidade de entrega.

## Camadas simplificadas

Cada modulo de dominio pode seguir esta estrutura:

```txt
apps/<dominio>
├── domain
├── application
├── infrastructure
└── presentation
```

- `domain`: entidades, regras de negocio e contratos principais.
- `application`: casos de uso e orquestracao das regras.
- `infrastructure`: models Django, repositorios concretos e integracoes externas.
- `presentation`: serializers, views e rotas HTTP.

Nem todo modulo precisa ter todas as pastas desde o primeiro dia. A regra e criar somente o que for necessario.

## Backend

O backend fica em `backend/src` e usa Django + Django REST Framework.

Dominios planejados:

- `users`
- `hotels`
- `flights`
- `bookings`
- `payments`
- `reviews`
- `recommendations`

## Frontend

O frontend fica em `frontend/src` e usa React + TypeScript.

Organizacao planejada:

```txt
src
├── app
├── components
├── features
├── services
├── store
├── styles
└── types
```

## Banco de dados

Banco principal: PostgreSQL.

Tabelas planejadas:

- users
- hotels
- rooms
- flights
- bookings
- payments
- reviews
- destinations
- packages
- wishlists

## Mensageria e cache

Redis e Celery entram em fases futuras para:

- envio de emails
- processamento de reservas
- recomendacoes assincornas
- cache de buscas

RabbitMQ pode ser avaliado em uma fase posterior se o projeto evoluir para eventos mais complexos.

## IA

O modulo `recommendations` deve concentrar recursos de IA:

- sugestao de destinos
- roteiro automatico
- chat de viagem
- explicacao de recomendacoes

Inicialmente, a IA pode funcionar com dados mockados e depois evoluir para integracao com LLMs.

## Tunneling para demonstracao

Durante o desenvolvimento local, a demonstracao publica deve usar **Cloudflare Tunnel** apontando para o frontend Vite em `http://127.0.0.1:5173`.

Motivos da decisao:

- nao exige deploy completo para mostrar a interface em andamento;
- permite validar rapidamente o visual da Plansvel em outros dispositivos;
- mantem o backend local separado, reduzindo exposicao desnecessaria nesta fase inicial;
- combina bem com a fase de MVP, antes do deploy definitivo em Render, Railway ou Azure.

Quando a API precisar ser acessada externamente pelo frontend publicado via tunnel, criar uma segunda URL temporaria para `http://127.0.0.1:8000` ou configurar um proxy no frontend.
