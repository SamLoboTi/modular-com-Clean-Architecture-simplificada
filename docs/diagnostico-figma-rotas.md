# Diagnostico Figma, Rotas e Navegacao

Data: 2026-06-10

## Acesso ao Figma

Status: **BLOQUEADO**

Link testado:

```txt
https://www.figma.com/design/UnDTgsIu4hGU83r4C50KnZ/Plansvel?node-id=31-1271&m=dev&t=WN5iu6ExITBM2YZD-1
```

Resultado:

```txt
HTTP/1.1 403 Forbidden
Server: CloudFront
```

Diagnostico:

- Nao consegui acessar diretamente o projeto Figma por esta sessao.
- O retorno `403 Forbidden` indica bloqueio de acesso, link privado, necessidade de login/cookies ou restricao do Figma/CloudFront.
- A implementacao anterior foi feita a partir das imagens enviadas na conversa, nao a partir de inspecao completa do arquivo Figma.

Acao necessaria:

- Compartilhar o Figma com acesso publico de visualizacao/dev mode para "Anyone with the link".
- Alternativa: exportar os frames principais em PNG/SVG e anexar aqui.

## Sistema atual

Base testada:

```txt
http://127.0.0.1:5180
```

Build:

```txt
npm run build: PASS
```

Backend:

```txt
python -m pytest -q: 3 passed
```

## O que abre hoje

| URL ou acao | Resultado tecnico | Resultado real para usuario |
| --- | --- | --- |
| `/` | `200 OK` | Abre a SPA atual |
| `/hotels` | `200 OK` | Retorna o mesmo `index.html`; nao existe pagina React dedicada |
| `/packages` | `200 OK` | Retorna o mesmo `index.html`; nao existe pagina React dedicada |
| `/destinations` | `200 OK` | Retorna o mesmo `index.html`; nao existe pagina React dedicada |
| `/profile` | `200 OK` | Retorna o mesmo `index.html`; nao existe pagina React dedicada |
| `/login` | `200 OK` | Retorna o mesmo `index.html`; nao existe pagina React dedicada |
| `#home` | Funciona | Rola para a hero/home |
| `#destinations` | Funciona | Rola para destinos |
| `#hotels` | Funciona no desktop/tablet | Rola para secao de hoteis |
| `#packages` | Quebrado | Nao existe elemento com `id="packages"` |
| `#about` | Quebrado | Nao existe elemento com `id="about"` |
| `#map` | Quebrado | Nao existe elemento com `id="map"` |

## Problemas encontrados

### 1. Nao existem rotas reais

Status: **CRITICO**

O app atual esta inteiro em `frontend/src/App.tsx`. Ele usa links de ancora como `#home`, `#destinations` e `#hotels`, mas nao usa `react-router-dom` nem estrutura de paginas.

Impacto:

- `Hotéis`, `Pacotes`, `Destinos`, `Sobre Nós`, `Login` e `Perfil` nao abrem como paginas independentes.
- URLs como `/hotels` e `/packages` parecem responder `200 OK`, mas mostram a mesma aplicacao sem roteamento real.

### 2. Links do menu apontam para secoes inexistentes

Status: **CRITICO**

Links quebrados:

```txt
#packages
#about
#map
```

Impacto:

- O clique nao leva o usuario a lugar nenhum.
- A navegacao parece desfuncional.

### 3. A pagina de hoteis some no Android

Status: **CRITICO**

No CSS existe:

```css
@media (max-width: 480px) {
  .hotels-page {
    display: none;
  }
}
```

Impacto:

- A area de hoteis desaparece em celulares pequenos.
- Isso contradiz a necessidade de pagina mobile funcional.

### 4. Textos com encoding quebrado

Status: **ALTO**

Exemplos encontrados:

```txt
ItajubÃ¡ Hotel
avaliaÃ§Ãµes
vocÃª
HOTÃ‰IS
CafÃ© da manhÃ£
```

Impacto:

- A interface perde qualidade visual e credibilidade.
- Isso provavelmente ocorreu por leitura/salvamento com encoding incorreto em algum ponto.

### 5. Botoes sem fluxo funcional

Status: **ALTO**

Elementos sem fluxo completo:

- Login: nao abre modal nem pagina.
- Carrinho do header: nao abre painel/lista.
- Buscar Hotéis: nao executa busca.
- Pesquisar mobile: nao navega para resultados.
- Mostrar no mapa: nao abre mapa.
- Ver disponibilidade: apenas incrementa carrinho, sem pagina de reserva.
- Menu mobile: nao abre menu.

### 6. Arquitetura frontend ainda nao segue estrutura de projeto

Status: **MEDIO**

Hoje:

```txt
frontend/src/App.tsx
frontend/src/styles/global.css
```

Necessario:

```txt
frontend/src
├── app
├── pages
│   ├── HomePage.tsx
│   ├── HotelsPage.tsx
│   ├── PackagesPage.tsx
│   ├── DestinationsPage.tsx
│   ├── AboutPage.tsx
│   └── LoginPage.tsx
├── components
│   ├── layout
│   ├── hotels
│   ├── search
│   └── ui
├── data
├── services
└── types
```

## Conclusao

Status geral: **NAO CONFORME COM FIGMA / FUNCIONALIDADE INCOMPLETA**

O sistema compila e abre a home, mas ainda nao esta funcional como produto com paginas. A implementacao atual e uma tela unica com secoes e alguns estados locais. Para ficar de acordo com o Figma e com a ideia original do projeto, a proxima iteracao deve transformar o frontend em uma aplicacao com rotas reais, componentes separados e fluxos de navegacao funcionais.

## Proxima iteracao recomendada

1. Corrigir encoding dos textos.
2. Instalar e configurar `react-router-dom`.
3. Criar rotas reais:
   - `/`
   - `/hotels`
   - `/packages`
   - `/destinations`
   - `/about`
   - `/login`
4. Separar componentes:
   - `Header`
   - `Footer`
   - `HomePage`
   - `HotelsPage`
   - `HotelCard`
   - `HotelSearchBox`
   - `MobileSearch`
5. Implementar menu mobile funcional.
6. Implementar fluxo minimo:
   - busca na home -> `/hotels`
   - buscar hoteis -> atualiza resultados
   - ver disponibilidade -> adiciona ao carrinho ou abre detalhe
   - login -> abre pagina/modal

