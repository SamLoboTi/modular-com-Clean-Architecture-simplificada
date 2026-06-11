# Benchmark Booking - Pacotes e passagens

Data: 2026-06-10

## Contexto

O objetivo desta analise foi usar o Booking apenas como inspiracao de produto para a pagina de Pacotes/Passagens da Plansvel, sem copiar marca, textos proprietarios ou fluxos completos.

O acesso automatizado direto ao site informado nao ficou confiavel nesta sessao. Por isso, a referencia principal aplicada foi o corte visual enviado pelo usuario e padroes comuns de marketplaces de viagem.

## Padroes observados na referencia

- Busca compacta no topo com titulo forte.
- Alternancia entre "Ida e volta" e "Somente ida".
- Campos de origem, destino, datas e passageiros.
- Botao principal verde para busca.
- Resultado com itinerario dividido em IDA e VOLTA.
- Colunas de origem, destino, horario, duracao e companhia aerea.
- Resumo de preco destacado em bloco laranja.
- Separacao clara entre valor base, taxas e total.
- CTA direto para realizar pedido.

## Decisao para Plansvel

A pagina `/packages` usa a mesma logica visual geral, mas com identidade Plansvel:

- Laranja `#ff450d` como cor principal.
- Verde apenas para acao de busca.
- Pacotes ficticios realistas fornecidos por API interna.
- Cards extras de pacotes para dar escala ao produto.
- Fluxo preparado para futura automacao de busca, selecao e reserva.
