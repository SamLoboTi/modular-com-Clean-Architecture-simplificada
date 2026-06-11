import {
  BriefcaseBusiness,
  Building2,
  FileWarning,
  Handshake,
  Headphones,
  Leaf,
  LineChart,
  Megaphone,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

const supportSections = [
  {
    icon: Headphones,
    title: "Suporte ao viajante",
    text: "Atendimento antes, durante e depois da viagem, com priorizacao para remarcacao, documentos, bagagem e hospedagem emergencial.",
  },
  {
    icon: ShieldCheck,
    title: "Como trabalhamos?",
    text: "Comparamos dados de voos, hoteis e pacotes, simulamos disponibilidade e organizamos cada etapa em jornadas simples para o cliente.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    text: "Priorizamos fornecedores com politicas ambientais, incentivo a estadias responsaveis e metricas de impacto em futuras reservas.",
  },
  {
    icon: Newspaper,
    title: "Assessoria de imprensa",
    text: "Central de relacionamento para imprensa, materiais institucionais, dados de turismo digital e posicionamentos da marca Plansvel.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Trabalhe conosco",
    text: "Times de produto, engenharia, suporte, dados e operacoes trabalhando em uma plataforma de turismo digital moderna.",
  },
  {
    icon: LineChart,
    title: "Relacao com investidores",
    text: "Visao de crescimento, indicadores operacionais, governanca, expansao regional e estrategia de parcerias B2B.",
  },
  {
    icon: Building2,
    title: "Contato corporativo",
    text: "Canal para agencias, hoteis, companhias aereas, operadoras, eventos, afiliados e integracoes comerciais.",
  },
  {
    icon: FileWarning,
    title: "Diretrizes e denuncia",
    text: "Politicas de conteudo, combate a fraude, uso inadequado, anuncios suspeitos e protecao da experiencia do viajante.",
  },
];

const partners = [
  "Google Cloud",
  "Microsoft Azure",
  "Visa",
  "Mastercard",
  "Amadeus",
  "Sabre",
  "LATAM",
  "GOL",
];

export function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span>Sobre a Plansvel</span>
          <h1>Turismo digital com suporte humano em cada etapa.</h1>
          <p>
            A Plansvel conecta pessoas a paises, culturas e experiencias com uma
            plataforma pensada para busca, comparacao, reserva e assistencia.
          </p>
        </div>
      </div>

      <section className="about-intro">
        <div>
          <span className="section-kicker">Nossa operacao</span>
          <h2>Uma marca criada para transformar planejamento em viagem real.</h2>
        </div>
        <p>
          Unimos tecnologia, curadoria e suporte para simular uma operacao de
          turismo de ponta: pacotes, passagens, hospedagens, atendimento
          corporativo e governanca de conteudo em uma unica experiencia.
        </p>
      </section>

      <section className="about-metrics" aria-label="Indicadores Plansvel">
        <div>
          <strong>24h</strong>
          <span>monitoramento de jornadas criticas</span>
        </div>
        <div>
          <strong>360</strong>
          <span>visao de voos, hoteis e pacotes</span>
        </div>
        <div>
          <strong>8</strong>
          <span>frentes institucionais de suporte</span>
        </div>
      </section>

      <section className="support-grid">
        {supportSections.map((item) => {
          const Icon = item.icon;

          return (
            <article className="support-card" key={item.title}>
              <span>
                <Icon size={24} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="about-partners">
        <div>
          <span className="section-kicker">Ecossistema de parceiros</span>
          <h2>Integramos a Plansvel com empresas que inspiram escala global.</h2>
          <p>
            A vitrine abaixo representa parceiros e provedores estrategicos que
            ajudam a dar realismo ao produto: pagamentos, nuvem, distribuicao
            aerea, dados e operacao de viagem.
          </p>
        </div>
        <div className="partner-wall" aria-label="Parceiros de referencia">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="about-contact-band">
        <div>
          <Megaphone size={35} />
          <h2>Canais corporativos e denuncias</h2>
          <p>
            Para suporte institucional, imprensa, investidores, parcerias ou
            denuncia de uso inadequado, a Plansvel centraliza os fluxos por
            prioridade e rastreabilidade.
          </p>
        </div>
        <a href="mailto:corporativo@plansvel.example">corporativo@plansvel.example</a>
      </section>

      <section className="about-process">
        <div>
          <Handshake size={31} />
          <h2>Como trabalhamos com confianca</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <strong>Escutamos o objetivo da viagem</strong>
            <p>Negocio, lazer, familia, evento ou emergencia.</p>
          </li>
          <li>
            <span>02</span>
            <strong>Comparamos opcoes com transparencia</strong>
            <p>Preco, taxas, horario, reputacao e flexibilidade.</p>
          </li>
          <li>
            <span>03</span>
            <strong>Acompanhamos o viajante</strong>
            <p>Alertas, suporte, remarcacao e canal de denuncia.</p>
          </li>
        </ol>
      </section>
    </section>
  );
}
