import { Carousel } from "@/components/Carousel";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { Roseta } from "@/components/Roseta";
import { asset } from "@/lib/config";

/* Copy v1 aprovada em paginas/ttt-pagina-v1.md (2026-11-01). */

function Check({ className = "text-primary" }: { className?: string }) {
  return (
    <svg
      className={`mt-[3px] shrink-0 ${className}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
      <path d="M8 12.5l2.6 2.6L16 9.5" />
    </svg>
  );
}

function Heading({
  children,
  accent,
  eyebrow,
  center = true,
}: {
  children: React.ReactNode;
  accent?: string;
  eyebrow?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-[26px] font-medium leading-tight text-ink md:text-[33px]">
        {children}
        {accent ? (
          <>
            {" "}
            <span className="display text-[30px] text-accent-1 md:text-[38px]">{accent}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}

const fases = [
  {
    letra: "A",
    cor: "text-accent-1",
    fundo: "bg-accent-1/15",
    titulo: "Organizar as mamadas do dia",
    texto: "O seu filho aprende, de um jeito leve, que o peito não está o tempo todo à disposição.",
    itens: [
      "Você escolhe as mamadas que ficam.",
      "Cada mamada ganha um momento certo da rotina.",
      "Vocês montam juntos o quadro do tetê.",
      "A técnica do adiamento e a da distração entram em ação.",
      "O dia passa a ter ritmo, sem pedido o tempo todo.",
    ],
  },
  {
    letra: "B",
    cor: "text-accent-2",
    fundo: "bg-accent-2/15",
    titulo: "Acabar com as mamadas da madrugada",
    texto: "A noite vira um tempo só de descanso, e o seu filho aprende a dormir de outro jeito.",
    itens: [
      "Vocês decidem juntos os rumos da noite.",
      "Ele aprende a diferença entre sol e lua.",
      "O quadro de dia e noite entra na rotina.",
      "A corujinha acompanha cada despertar.",
      "Você começa com um plano claro para a madrugada.",
    ],
  },
  {
    letra: "C",
    cor: "text-dark",
    fundo: "bg-dark/10",
    titulo: "Dar o tchau, tchau para o tetê",
    texto: "O encerramento acontece com carinho, uma mamada de cada vez.",
    itens: [
      "Você descobre a ordem certa das mamadas que saem.",
      "A rotina se ajusta para cada despedida.",
      "Uma mamada sai de cada vez.",
      "O calendário de despedida mostra a data.",
      "A festinha de despedida fecha o ciclo e deixa uma memória linda.",
    ],
  },
];

const paraQuem = [
  {
    t: "Você quer um desmame cheio de carinho",
    d: "Seja para reduzir as mamadas do dia, parar as da madrugada ou encerrar de vez, você escolhe o que faz sentido para vocês.",
  },
  {
    t: "Você já tentou e sentiu que faltava um caminho",
    d: "Voltar atrás não é fracasso. Quase sempre falta um passo a passo que respeite o seu filho e você.",
  },
  {
    t: "Você quer o vínculo inteiro depois do desmame",
    d: "Vocês fazem tudo juntos, com quadros, rituais e uma despedida bonita, e você continua presente em cada etapa.",
  },
];

const modulos = [
  {
    n: "01",
    t: "Introdução ao desmame gentil",
    d: "Como saber se é a hora, o que preparar na rotina e na casa, e como o Método ABC funciona do começo ao fim.",
  },
  {
    n: "02",
    t: "Fase A: Regulamentação de demanda",
    d: "Como escolher as mamadas que ficam, ligar cada uma a um momento da rotina e montar o quadro do tetê junto com o seu filho. Com a técnica do adiamento e a da distração, para os momentos em que ele pedir fora de hora.",
  },
  {
    n: "03",
    t: "Fase B: Desmame noturno",
    d: "O quadro de dia e noite, a corujinha, ajustes de rotina e de ambiente de sono, e como acolher cada despertar. Com estratégias para a cama compartilhada, se for o seu caso.",
  },
  {
    n: "04",
    t: "Fase C: Desmame total",
    d: "Como ordenar as mamadas que saem, retirar uma de cada vez, usar o calendário de despedida e fazer uma festinha de encerramento. Com a técnica da antecipação para a mamada da manhã.",
  },
];

const extras = [
  "Dúvidas das alunas, com as perguntas mais comuns respondidas pela Duda.",
  "Material de apoio em slides, com o resumo visual de cada fase, indicações de livros e de brinquedos.",
  "Grupo de apoio exclusivo no WhatsApp.",
  "2 anos de acesso, para rever as aulas sempre que precisar.",
];

const depoimentos = [
  {
    src: asset("/img/depo-1.jpg"),
    quote: "Terminamos nossa história de forma natural, sem traumas.",
    alt: "Mensagem de uma aluna da mentoria de desmame agradecendo à Duda",
  },
  {
    src: asset("/img/depo-2.jpg"),
    quote: "Cada problema que eu vinha, você tinha uma solução!",
    alt: "Mensagem de uma aluna elogiando a metodologia da Duda",
  },
  {
    src: asset("/img/depo-3.jpg"),
    quote: "Segui os passos certinho, dei a última mamada, dormiu às 21h",
    alt: "Conversa de uma cliente contando como foi a primeira noite do desmame noturno",
  },
  {
    src: asset("/img/depo-4.webp"),
    quote: "Ontem ela não acordou.",
    alt: "Notificação de uma cliente contando como a filha dormiu",
  },
];

const oferta = [
  "Método ABC do desmame, em 4 módulos de aulas gravadas",
  "Quadro do tetê, corujinha, calendário de despedida e as outras ferramentas, passo a passo",
  "Respostas da Duda para as dúvidas mais comuns das alunas",
  "Material de apoio em slides",
  "Grupo de apoio exclusivo no WhatsApp",
  "2 anos de acesso, para rever quando precisar",
];

const perguntas = [
  {
    q: "Já tentei desmamar e não consegui. Esse curso vai ser diferente?",
    a: "Se você já tentou e voltou atrás, isso não significa que falhou. Quase sempre faltava um passo a passo que respeitasse o seu filho e você. No Tchau, tchau, tetê eu te mostro um caminho em fases, com ferramentas simples, para você avançar sem precisar voltar.",
  },
  {
    q: "O Tchau, tchau, tetê é para mim?",
    a: "É para você se o seu filho já completou 14 meses e você quer reduzir as mamadas do dia, parar as da madrugada ou encerrar de vez, com muito cuidado e respeito.",
  },
  {
    q: "Eu não quero o desmame total. O curso serve para mim?",
    a: "Serve. Você escolhe até onde ir, e pode ficar na fase que fizer sentido pelo tempo que quiser. Se um dia decidir seguir, o caminho já está aqui.",
  },
  {
    q: "Meu filho mama muito de noite e só dorme no peito. Funciona?",
    a: "Funciona. As fases foram pensadas para isso, começando pelo dia e só depois chegando na noite. E se você quiser manter a mamada para dormir, pode.",
  },
  {
    q: "A rotina do meu filho muda durante a semana. Consigo aplicar?",
    a: "Consegue. Você aprende a escolher as mamadas pensando nos dias úteis e no fim de semana, e a ligar cada uma a um momento da rotina.",
  },
  {
    q: "O meu filho vai entender os combinados?",
    a: "A partir dos 14 meses, as crianças entendem bem o tom de voz e a repetição. E o curso usa quadros com imagens, porque a criança aprende melhor vendo.",
  },
  {
    q: "Como assisto às aulas? Posso ir no meu ritmo?",
    a: "O curso é 100% online. Depois da compra você recebe acesso imediato e assiste pelo celular ou pelo computador, no horário que preferir. As aulas ficam disponíveis por 2 anos.",
  },
  {
    q: "Como tiro minhas dúvidas?",
    a: "Você terá acesso a um grupo de apoio exclusivo no WhatsApp.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não for para você, é só pedir o reembolso pela Hotmart.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* 1. Topo */}
      <section className="container-lp pt-5 md:pt-8">
        <div className="grid items-center gap-8 rounded-[19px] bg-bg-alt px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-14 md:py-14">
          <Reveal>
            <p className="eyebrow mb-4">Tchau, tchau, tetê</p>
            <h1 className="text-[32px] font-medium leading-[1.12] text-ink md:text-[46px]">
              Desmamar com{" "}
              <span className="display text-[38px] text-accent-1 md:text-[54px]">carinho</span> é
              possível, e o vínculo de vocês continua inteiro.
            </h1>
            <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-muted md:text-[16px]">
              Vou te guiar por um caminho em fases, no ritmo do seu filho. Você escolhe até onde ir,
              do desmame noturno ao desmame total.
            </p>
            <div className="mt-7">
              <Cta
                label="Quero começar"
                micro="Acesso imediato e garantia de 7 dias"
                center={false}
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-first md:order-last">
            <div className="float-soft mx-auto max-w-[420px] overflow-hidden rounded-[19px] bg-[#fdeaf3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/img/mae-bebe.jpg")}
                alt="Mãe sorrindo enquanto amamenta o bebê no colo"
                width={1852}
                height={1704}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Lead */}
      <section className="section-lp">
        <div className="container-lp">
          <Reveal className="mx-auto max-w-[640px]">
            <p className="display text-[25px] leading-snug text-dark md:text-[30px]">
              Pense no dia em que o seu filho vai dormir sem o peito e, de manhã, corre para o seu
              colo mesmo assim.
            </p>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink/90 md:text-[16px]">
              <p>Esse dia existe. E quase sempre ele chega mais perto do que a mãe imagina.</p>
              <p>
                O que atrasa tudo isso é uma dúvida que quase toda mãe me faz, de um jeito ou de
                outro. “Se eu tirar o peito, a gente se afasta?”
              </p>
              <p>
                O problema nunca foi o desmame. Foi a ordem em que ele costuma ser feito. Muita
                gente começa pelo fim, e é natural, porque é o que costuma ser ensinado.
              </p>
              <p>
                No Tchau, tchau, tetê eu faço ao contrário. O seu filho aprende a se sentir seguro
                de outros jeitos. O peito só sai quando ele já não precisa dele para isso.
              </p>
              <p className="font-medium text-ink">
                Por isso o desmame deixa de ser uma despedida e vira uma mudança. Vocês não perdem o
                vínculo. Ele ganha um lugar novo para morar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Método ABC */}
      <section className="section-lp bg-bg-alt">
        <div className="container-lp">
          <Reveal>
            <Heading accent="ABC" eyebrow="Como funciona">
              O Método
            </Heading>
            <p className="mx-auto -mt-4 mb-10 max-w-[560px] text-center text-[15px] leading-relaxed text-muted">
              Três fases, cada uma com pequenas conquistas, para você sentir o avanço e saber sempre
              qual é o próximo passo.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {fases.map((f, i) => (
              <Reveal key={f.letra} delay={i * 110}>
                <article className={`h-full rounded-[19px] border border-line p-6 md:p-7 ${f.fundo}`}>
                  <p className={`display text-[62px] leading-none ${f.cor}`}>{f.letra}</p>
                  <h3 className="mt-3 text-[19px] font-bold leading-snug text-ink">{f.titulo}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{f.texto}</p>
                  <ul className="mt-5 space-y-3">
                    {f.itens.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[14px] leading-snug text-ink/90">
                        <Check className={f.cor} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Cta label="Quero o Método ABC" micro="Passo a passo, no ritmo do seu filho" />
          </Reveal>
        </div>
      </section>

      {/* 4. Para quem é */}
      <section className="section-lp">
        <div className="container-lp">
          <Reveal>
            <Heading accent="para você se...">Esse curso é</Heading>
          </Reveal>
          <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="grid gap-5">
                {paraQuem.map((p, i) => (
                  <Reveal key={p.t} delay={i * 90}>
                    <div className="rounded-[19px] border border-line bg-white p-6">
                      <h3 className="text-[17px] font-bold text-ink">{p.t}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-8">
                <div className="rounded-[19px] border border-dashed border-line p-6">
                  <p className="text-[15px] font-bold text-ink">Esse curso não é para você se...</p>
                  <ul className="mt-3 space-y-2.5 text-[14px] leading-relaxed text-muted">
                    <li className="flex gap-2.5">
                      <span aria-hidden="true" className="text-dark">
                        ✕
                      </span>
                      Você quer um desmame de um dia para o outro. Aqui o ritmo é do seu filho.
                    </li>
                    <li className="flex gap-2.5">
                      <span aria-hidden="true" className="text-dark">
                        ✕
                      </span>
                      Seu filho ainda não completou 14 meses. Você pode começar quando ele chegar
                      nessa idade, e o acesso dura 2 anos.
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="mx-auto w-full max-w-[320px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/img/crianca.jpg")}
                alt="Criança estendendo a mão para a câmera durante a mamada"
                loading="lazy"
                className="h-auto w-full rotate-[2deg]"
              />
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <Cta label="Quero esse caminho" micro="Acesso imediato" />
          </Reveal>
        </div>
      </section>

      {/* 5. O que você recebe */}
      <section className="section-lp bg-bg-alt">
        <div className="container-lp">
          <Reveal>
            <Heading accent="receber">O que você vai</Heading>
          </Reveal>
          <div className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            {modulos.map((m, i) => (
              <Reveal key={m.n} delay={(i % 2) * 100}>
                <div className="border-t border-line pt-5">
                  <div className="flex gap-4">
                    <span className="display text-[44px] leading-none text-accent-2">{m.n}</span>
                    <div>
                      <h3 className="text-[18px] font-bold leading-snug text-ink">{m.t}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{m.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="mx-auto max-w-[680px] rounded-[19px] border border-line bg-white p-6 md:p-8">
              <p className="eyebrow mb-4">E também</p>
              <ul className="space-y-3">
                {extras.map((e) => (
                  <li key={e} className="flex gap-2.5 text-[14.5px] leading-snug text-ink/90">
                    <Check />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <Cta label="Quero entrar agora" micro="2 anos de acesso" />
          </Reveal>
        </div>
      </section>

      {/* 6. Autoridade */}
      <section className="section-lp">
        <div className="container-lp">
          <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <Reveal className="mx-auto w-full max-w-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/img/duda.jpg")}
                alt="Duda Bertocco, psicóloga e consultora de amamentação"
                loading="lazy"
                className="h-auto w-full rounded-[8px]"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mb-3">Prazer</p>
              <h2 className="text-[26px] font-medium leading-tight md:text-[33px]">
                Eu sou a{" "}
                <span className="display text-[30px] text-accent-1 md:text-[38px]">
                  Duda Bertocco
                </span>
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/90">
                <p>
                  Sou psicóloga, formada pela Universidade Federal Fluminense, e consultora de
                  amamentação.
                </p>
                <p>
                  Há 7 anos eu caminho ao lado de mães na amamentação, e já atendi mais de 1000
                  delas. Quando o desafio passou a ser o fim dessa história, eu me aprofundei para
                  que ela terminasse com o mesmo cuidado com que começou.
                </p>
                <p>
                  Por isso o Método ABC olha para duas coisas ao mesmo tempo, o que o seu filho
                  sente e o que você sente. É assim que o desmame vira uma mudança bonita, e não
                  uma perda.
                </p>
                <p className="font-medium">
                  A minha missão é que você e o seu filho saiam dessa experiência com um vínculo
                  ainda mais forte.
                </p>
              </div>
              <div className="mt-7">
                <Cta label="Começar com a Duda" micro="Garantia de 7 dias" center={false} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Depoimentos */}
      <section className="section-lp bg-bg-alt">
        <div className="container-lp">
          <Reveal>
            <Heading accent="para o tetê" eyebrow="Depoimentos">
              Quem já deu tchau, tchau
            </Heading>
            <p className="mx-auto -mt-4 mb-8 max-w-[520px] text-center text-[15px] text-muted">
              Mães que viveram esse caminho contam como foi.
            </p>
          </Reveal>
          <Reveal>
            <Carousel items={depoimentos} />
          </Reveal>
          <Reveal className="mt-10">
            <Cta label="Quero começar" micro="Acesso imediato e garantia de 7 dias" />
          </Reveal>
        </div>
      </section>

      {/* 8. Oferta */}
      <section id="oferta" className="section-lp scroll-mt-4">
        <div className="container-lp">
          <Reveal>
            <div className="rounded-[19px] bg-dark px-6 py-10 text-white md:px-14 md:py-14">
              <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="eyebrow mb-3 !text-accent-2">Sua oferta</p>
                  <h2 className="text-[26px] font-medium leading-tight md:text-[33px]">
                    Tudo isso para você{" "}
                    <span className="display text-[30px] text-accent-2 md:text-[38px]">
                      começar hoje
                    </span>
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {oferta.map((o) => (
                      <li key={o} className="flex gap-2.5 text-[14.5px] leading-snug text-white/90">
                        <Check className="text-primary-arrow" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[19px] bg-white/10 p-6 text-center md:p-8">
                  <p className="text-[13px] leading-relaxed text-white/80">
                    Consultorias de desmame costumam custar por volta de{" "}
                    <strong className="text-white">R$697</strong>. Aqui você tem o Método ABC
                    completo, para aplicar no ritmo do seu filho, por:
                  </p>
                  <p className="display mt-5 text-[44px] leading-none text-white md:text-[52px]">
                    12x de R$15,20
                  </p>
                  <p className="mt-2 text-[14px] text-white/85">ou R$147 à vista</p>
                  <div className="mt-6">
                    <Cta label="Garantir meu acesso" micro="Garantia de 7 dias" tone="dark" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 rounded-[19px] border border-line bg-white p-6 text-center md:flex-row md:text-left md:p-8">
              <Roseta />
              <div>
                <h3 className="text-[19px] font-bold text-ink">
                  Garantia de 7 dias, e o risco é meu
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  Entre no curso, assista às aulas e veja se faz sentido para você e para o seu
                  filho. Se nesses 7 dias você sentir que não é o caminho, é só pedir o reembolso
                  pela Hotmart e eu devolvo o valor.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Perguntas frequentes */}
      <section className="section-lp bg-bg-alt">
        <div className="container-lp max-w-[820px]">
          <Reveal>
            <Heading accent="dúvidas?">Ainda está com</Heading>
          </Reveal>
          <Reveal>
            <Faq items={perguntas} />
          </Reveal>
          <Reveal className="mt-10">
            <Cta label="Quero começar" micro="Acesso imediato e garantia de 7 dias" />
          </Reveal>
        </div>
      </section>

      {/* 10. Fechamento */}
      <section className="section-lp">
        <div className="container-lp">
          <Reveal>
            <div className="grid items-center gap-8 rounded-[19px] bg-bg-alt px-6 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-14 md:py-14">
              <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[19px] bg-[#fdeaf3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/img/mae-bebe.jpg")}
                  alt="Mãe sorrindo enquanto amamenta o bebê no colo"
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <div>
                <h2 className="display text-[28px] leading-snug text-dark md:text-[36px]">
                  Cada história de amamentação merece um final bonito.
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/90">
                  <p>
                    Eu estou aqui para você viver esse momento com leveza, sem pressa e sem perder o
                    que vocês construíram juntos.
                  </p>
                  <p>
                    Você já sabe que o seu filho tem o ritmo dele. Eu te mostro o passo a passo para
                    caminhar nesse ritmo, uma fase de cada vez, com quadros, rituais e uma despedida
                    bonita no final.
                  </p>
                  <p>
                    E se, no meio do caminho, você sentir que já está bom do jeito que está, tudo
                    bem. Você escolhe até onde ir.
                  </p>
                  <p>Quando você quiser começar, eu te espero lá dentro.</p>
                </div>
                <p className="mt-6 font-bold text-ink">Duda Bertocco</p>
                <p className="text-[13px] text-muted">Psicóloga e consultora de amamentação</p>
                <div className="mt-7">
                  <Cta
                    label="Quero começar"
                    micro="12x de R$15,20 ou R$147 à vista. Garantia de 7 dias."
                    center={false}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-[12px] text-muted">
        <p>Copyright © 2026 Duda Bertocco. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
