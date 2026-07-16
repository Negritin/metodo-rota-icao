import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  Gauge,
  Headphones,
  Map,
  Mic,
  Plane,
  Play,
  Radio,
  Route,
  ShieldCheck,
  Target,
  Volume2,
} from "lucide-react";
import { useEffect } from "react";

const price = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(297);

const painSignals = [
  {
    icon: Gauge,
    title: "Você entende palavras soltas, mas trava para montar resposta.",
    text: "Na hora da pergunta, o desafio não é lembrar uma lista de termos. É organizar ideia, tempo verbal, vocabulário e contexto sem virar silêncio.",
  },
  {
    icon: Radio,
    title: "Você estuda inglês comum para uma exigência específica.",
    text: "A aviação não cobra o mesmo inglês da escola tradicional. O contexto muda: operação, ocorrência, clima, decisão, comunicação e segurança.",
  },
  {
    icon: Clock3,
    title: "Você adia porque não sabe exatamente por onde recomeçar.",
    text: "Aplicativo, aula solta, vídeo avulso, gramática, tradução. Sem rota, a sensação é sempre voltar para a estaca zero.",
  },
];

const frameworkSteps = [
  {
    letter: "R",
    title: "Reconhecer",
    text: "Identificar onde sua comunicação trava: escuta, vocabulário, estrutura de resposta, fluidez ou confiança para falar.",
  },
  {
    letter: "O",
    title: "Organizar",
    text: "Transformar pensamento solto em resposta com começo, contexto, ação e conclusão, sem depender de frase decorada.",
  },
  {
    letter: "T",
    title: "Treinar",
    text: "Praticar inglês de aviação com vocabulário, situações, perguntas e estruturas que fazem sentido para pilotos.",
  },
  {
    letter: "A",
    title: "Aplicar",
    text: "Levar o treino para cenários de prova e comunicação real, ajustando o estudo conforme o que ainda precisa evoluir.",
  },
];

const routeSteps = [
  {
    title: "Mapear",
    label: "01 / diagnóstico",
    text: "Saber seu ponto de partida e separar o que é lacuna de base, trava de fala ou falta de treino em contexto.",
    bullets: ["nível atual", "travas", "prioridade"],
  },
  {
    title: "Treinar",
    label: "02 / construção",
    text: "Criar repertório funcional para escutar, responder, explicar situações e sustentar uma fala mais clara.",
    bullets: ["escuta", "fala", "repertório"],
  },
  {
    title: "Simular",
    label: "03 / aplicação",
    text: "Praticar perguntas e cenários para diminuir improviso e aproximar o estudo da pressão real da aviação.",
    bullets: ["perguntas", "cenários", "clareza"],
  },
];

const transformations = [
  "Sair de estudo solto para uma rotina com prioridade clara.",
  "Trocar resposta decorada por resposta organizada em contexto.",
  "Entender o que treinar quando falta vocabulário, fluidez ou escuta.",
  "Chegar ao estudo com plano, não com culpa por ter adiado de novo.",
];

const modules = [
  "Diagnóstico de Rota: onde seu inglês trava hoje",
  "Base funcional para pilotos: estruturas que ajudam a responder",
  "Inglês de aviação na prática: vocabulário com contexto",
  "Escuta e resposta: como entender a pergunta e organizar a fala",
  "Preparação ICAO: tipos de situação e treino direcionado",
  "Plano de voo de 30 dias: rotina objetiva de estudo",
];

const included = [
  "Framework R.O.T.A. ICAO: reconhecer, organizar, treinar e aplicar",
  "Método Rota ICAO: mapear, treinar e simular",
  "Checklist de preparação ICAO",
  "Banco de perguntas para treino",
  "Guia de respostas estruturadas",
  "Plano de estudo de 30 dias",
  "Acesso imediato e garantia de 7 dias",
];

const guidance = [
  {
    title: "Não é inglês genérico",
    text: "O foco é inglês aplicado ao piloto: escuta, fala, resposta, vocabulário e contexto de aviação.",
  },
  {
    title: "Não é macete vazio",
    text: "Você não depende de resposta pronta para decorar. Você aprende uma rota para responder melhor em situações diferentes.",
  },
  {
    title: "Não promete aprovação",
    text: "A proposta é preparação objetiva. Resultado depende do nível atual, prática, dedicação e avaliação oficial.",
  },
];

const faq = [
  {
    q: "Esse treinamento garante nível específico no ICAO?",
    a: "Não. Ele entrega uma rota objetiva de preparação. Resultado de prova depende do nível atual, prática, dedicação e avaliação oficial.",
  },
  {
    q: "Serve para piloto que já tentou inglês antes?",
    a: "Sim. A proposta é sair da aula solta e organizar uma rota com base, treino e simulação de contexto.",
  },
  {
    q: "Preciso estar avançado para começar?",
    a: "Não necessariamente. O primeiro passo é mapear seu ponto de partida e entender o que precisa ser treinado com prioridade.",
  },
  {
    q: "Isso substitui aula particular?",
    a: "Não precisa substituir. O treinamento cria rota e repertório. Aula individual pode complementar quem quer correção personalizada.",
  },
];

function scrollToOffer() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById("oferta")
    ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function App() {
  useEffect(() => {
    if (!window.location.hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.prepend(bar);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <div className="sky-noise" aria-hidden="true" />
        <div className="runway-perspective" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <nav className="topbar" aria-label="Navegação principal">
          <span className="brand-mark" translate="no">
            <Plane aria-hidden="true" />
            Método Rota ICAO
          </span>
          <button type="button" onClick={scrollToOffer} className="nav-cta">
            Ver Oferta
          </button>
        </nav>

        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Preparação ICAO Para Pilotos</span>
            <h1 id="hero-title">Você sabe voar. O inglês ainda segura sua próxima rota?</h1>
            <p>
              Não é inglês genérico. Não é macete de prova. Assista e entenda a rota para
              treinar escuta, fala e resposta no contexto que a aviação cobra.
            </p>
          </div>

          <div className="vsl-console" aria-label="Apresentação em vídeo do Método Rota ICAO">
            <div className="console-top">
              <span>Radio check / ICAO route</span>
              <span>Listen · Speak · Respond</span>
            </div>

            <div className="video-stage">
              <div className="video-copy">
                <span className="video-label">Cena real do problema</span>
                <strong>“Describe what happened during the flight.”</strong>
                <p>
                  Você entende a pergunta, mas precisa transformar cabine em resposta clara,
                  em inglês.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToOffer}
                className="play-button"
                aria-label="Assistir à apresentação e ver a oferta"
              >
                <Play aria-hidden="true" />
              </button>

              <div className="radio-stack" aria-hidden="true">
                <div>
                  <Radio />
                  <span>TOWER</span>
                  <strong>Explain the situation</strong>
                </div>
                <div>
                  <Mic />
                  <span>PILOT</span>
                  <strong>Organize the answer</strong>
                </div>
                <div>
                  <Volume2 />
                  <span>ICAO</span>
                  <strong>Communication in context</strong>
                </div>
              </div>
            </div>

            <div className="console-bottom">
              <span>Mapear</span>
              <span>Treinar</span>
              <span>Simular</span>
            </div>
          </div>

          <div className="hero-actions">
            <button type="button" onClick={scrollToOffer} className="primary-btn">
              Quero Construir Minha Rota ICAO
              <ArrowRight aria-hidden="true" />
            </button>
            <span className="proof-pill">
              <ShieldCheck aria-hidden="true" />
              {price} · Acesso Imediato · Garantia de 7 Dias
            </span>
          </div>
        </div>
      </section>

      <div className="stats-bar" aria-hidden="true">
        <div className="container">
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Módulos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30</span>
            <span className="stat-label">Dias de Plano</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Dias de Garantia</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">R.O.T.A.</span>
            <span className="stat-label">Framework Exclusivo</span>
          </div>
        </div>
      </div>

      <section id="conteudo" className="section tension-section">
        <div className="container section-lead">
          <span className="eyebrow">O Ponto Cego</span>
          <h2>Seu inglês não deveria ser o item pendente entre você e uma nova oportunidade.</h2>
          <p>
            Promoção, processo seletivo, voo internacional, aviação executiva e comunicação
            operacional podem exigir mais do que vontade de estudar. Eles exigem preparo em
            contexto, com linguagem, rotina e prática próximas da realidade de quem pilota.
          </p>
        </div>

        <div className="container cards-grid">
          {painSignals.map((item) => {
            const Icon = item.icon;
            return (
              <article className="signal-card reveal" key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section belief-section">
        <div className="container belief-grid reveal">
          <div>
            <span className="eyebrow">A Rota Certa</span>
            <h2>O problema pode não ser incapacidade. Pode ser estudar pelo caminho errado.</h2>
          </div>
          <div className="belief-copy">
            <p>
              Inglês genérico ensina idioma. O ICAO exige comunicação funcional em uma
              situação específica: ouvir, interpretar, organizar pensamento e responder com
              clareza dentro da realidade da aviação.
            </p>
            <p>
              Por isso, a pergunta não é apenas “quantos anos você estudou inglês?”. A
              pergunta é: você treinou o inglês que aparece quando um piloto precisa explicar
              uma ocorrência, descrever uma decisão ou sustentar uma resposta?
            </p>
          </div>
        </div>
      </section>

      <section id="metodo" className="section method-section" aria-labelledby="method-title">
        <div className="container section-lead centered">
          <span className="eyebrow">O Método</span>
          <h2 id="method-title">Método Rota ICAO</h2>
          <p>
            Um plano de voo para estudar inglês de aviação com mais direção: primeiro você
            entende onde trava, depois organiza resposta, treina em contexto e aplica em
            situações próximas da prova e da comunicação real.
          </p>
        </div>

        <div className="container framework-strip" aria-label="Framework R.O.T.A. ICAO">
          {frameworkSteps.map((step) => (
            <article className="framework-card reveal" key={step.letter}>
              <span className="framework-letter">{step.letter}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="container route-board">
          {routeSteps.map((step) => (
            <article className="route-step reveal" key={step.title}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <ul>
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section transformation-section">
        <div className="container transformation-layout reveal">
          <div className="radar-panel" aria-hidden="true">
            <div className="radar-screen">
              <Route />
              <span>FROM</span>
              <strong>Inglês Solto</strong>
              <span>TO</span>
              <strong>Rota ICAO</strong>
            </div>
          </div>
          <div>
            <span className="eyebrow">Transformação Palpável</span>
            <h2>Não é sobre virar fluente do dia para a noite. É sobre saber o próximo treino.</h2>
            <div className="check-list">
              {transformations.map((item) => (
                <div key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section authority-section">
        <div className="container authority-layout reveal">
          <div>
            <span className="eyebrow">Quem Conhece a Cabine</span>
            <h2>Inglês de aviação ensinado por quem entende a diferença entre sala de aula e operação.</h2>
            <p>
              Você aprende inglês aplicado à realidade do piloto: procedimento, contexto,
              pressão, comunicação, carreira e rotina operacional. A proposta é estudar o
              idioma do jeito que a aviação pede, não como uma aula genérica sem direção.
            </p>
          </div>

          <div className="authority-points">
            <span>
              <Plane aria-hidden="true" />
              Ex-piloto com experiência internacional
            </span>
            <span>
              <Headphones aria-hidden="true" />
              Inglês aplicado à comunicação aeronáutica
            </span>
            <span>
              <BookOpenCheck aria-hidden="true" />
              Clareza sem excesso de teoria genérica
            </span>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="oferta" aria-labelledby="offer-title">
        <div className="container offer-layout">
          <div className="offer-copy">
            <span className="eyebrow">Treinamento Online</span>
            <h2 id="offer-title">Construa Sua Rota ICAO</h2>
            <p>
              Um treinamento gravado para pilotos que querem parar de estudar inglês no
              improviso e começar uma preparação com rota, contexto e prática direcionada
              para o ICAO e para a aviação real.
            </p>

            <div className="module-list" aria-label="Módulos do treinamento">
              {modules.map((module, index) => (
                <div className="module-row" key={module}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{module}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="price-panel reveal" aria-label="Resumo da oferta">
            <span className="price-label">Acesso Imediato</span>
            <div className="price">{price}</div>
            <p>
              Para pilotos que querem saber o que estudar, como treinar e por onde continuar
              com mais clareza.
            </p>
            <ul>
              {included.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <button type="button" onClick={scrollToOffer} className="primary-btn full">
              Quero Entrar na Rota ICAO
              <CircleDollarSign aria-hidden="true" />
            </button>
          </aside>
        </div>
      </section>

      <section className="section guidance-section">
        <div className="container section-lead centered">
          <span className="eyebrow">Antes de Começar</span>
          <h2>Preparação específica, promessa responsável.</h2>
          <p>
            O treinamento entrega uma rota objetiva para estudar melhor. Ele não substitui
            prática individual, dedicação nem avaliação oficial.
          </p>
        </div>

        <div className="container cards-grid">
          {guidance.map((item) => (
            <article className="signal-card reveal" key={item.title}>
              <BadgeCheck aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section guarantee-section">
        <div className="container guarantee-box reveal">
          <ClipboardCheck aria-hidden="true" />
          <div>
            <span className="eyebrow">Garantia de 7 Dias</span>
            <h2>Assista às primeiras aulas. Se a rota não fizer sentido, você pode pedir reembolso.</h2>
            <p>
              A promessa é simples e honesta: uma rota de preparação. Se você perceber que
              esse caminho não conversa com seu momento como piloto, existe o prazo de
              garantia para decidir com calma.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>Dúvidas frequentes antes de entrar.</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>
                  <FileText aria-hidden="true" />
                  {item.q}
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-panel">
          <Map aria-hidden="true" />
          <h2>A prova não começa no dia do exame. Ela começa na forma como você treina.</h2>
          <p>
            Saia do inglês solto e construa uma rota para estudar, responder e praticar com
            mais contexto.
          </p>
          <button type="button" onClick={scrollToOffer} className="primary-btn">
            Quero Construir Minha Rota ICAO
            <Target aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
