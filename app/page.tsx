"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";


const projects = [
{
number: "01",
category: "AI INFERENCE INFRASTRUCTURE",
name: "Nexora",
description:
"Production AI inference infrastructure platform with provider routing, retries, circuit breakers, rate limiting, authentication, observability, and FastAPI serving.",
architecture:
"CLIENT → API → AUTH / RATE LIMIT → ROUTING → PROVIDER → RELIABILITY → OBSERVABILITY",
stack: [
"Python",
"FastAPI",
"Provider Routing",
"Retry",
"Circuit Breaker",
"Prometheus",
"Docker",
"Pytest",
],
github: "https://github.com/syed-ashar-raza/Nexora",
},
{
number: "02",
category: "ML / MLOps PLATFORM",
name: "ModelOpsForge",
description:
"Production-oriented ML lifecycle covering reproducible training, evaluation, acceptance gates, model versioning, serving, and monitoring.",
architecture:
"DATA → VALIDATION → TRAINING → EVALUATION → GATES → REGISTRY → CHAMPION → API → MONITORING",
stack: [
"Python",
"Scikit-learn",
"MLflow",
"FastAPI",
"Prometheus",
"Joblib",
"Pytest",
],
github: "https://github.com/syed-ashar-raza/ModelOpsForge",
},
{
number: "03",
category: "AI AGENT SYSTEM",
name: "AgentForge",
description:
"Production-oriented AI agent framework with LLM planning, tool execution, persistent memory, local inference, and FastAPI.",
architecture:
"USER → FASTAPI → AGENT ORCHESTRATOR → LLM → PLANNER → TOOLS → MEMORY → RESPONSE",
stack: [
"Python",
"FastAPI",
"Ollama",
"LLMs",
"Tool Calling",
"Pytest",
],
github: "https://github.com/syed-ashar-raza/AgentForge",
},
{
number: "04",
category: "RETRIEVAL SYSTEM",
name: "RAGForge",
description:
"Production-oriented local RAG system for document ingestion, semantic retrieval, grounded generation, attribution, and evaluation.",
architecture:
"DOCUMENT → INGESTION → CHUNKING → EMBEDDING → VECTOR DB → RETRIEVAL → CONTEXT → LLM",
stack: [
"Python",
"FastAPI",
"PostgreSQL",
"pgvector",
"Ollama",
"Embeddings",
"Docker",
],
github: "https://github.com/syed-ashar-raza/RAGForge",
},
{
number: "05",
category: "AI AUTOMATION",
name: "fargo-solve",
description:
"Production-oriented AI automation and workflow execution platform integrating AI capabilities with executable workflows and voice interaction.",
architecture:
"INPUT ? AI INTERPRETATION ? WORKFLOW ? TOOLS / SERVICES ? EXECUTION ? RESULT",
stack: ["AI", "Automation", "Workflows", "Voice AI", "APIs"],
github: "https://github.com/syed-ashar-raza/fargo-solve",
},
{
number: "06",
category: "LANGUAGE AI",
name: "UrduLLM-Lab",
description:
"Applied Urdu LLM adaptation and evaluation research pipeline focused on language-specific experimentation and analysis.",
architecture:
"DATA → PREPARATION → LLM ADAPTATION → EVALUATION → ANALYSIS",
stack: [
"LLMs",
"NLP",
"Urdu Language AI",
"Evaluation",
"Research",
],
github: "https://github.com/syed-ashar-raza/UrduLLM-Lab",
},
{
number: "07",
category: "SOFTWARE ENGINEERING",
name: "Bank Management System",
description:
"Professional Python CLI system demonstrating object-oriented design, persistence, validation, custom exceptions, transactions, and automated testing.",
architecture:
"USER → CLI → BUSINESS LOGIC → VALIDATION → PERSISTENCE",
stack: ["Python", "OOP", "JSON", "Pytest", "Validation"],
github:
"https://github.com/syed-ashar-raza/bank-management-system",
},
];

const domains = [
  {
    number: "01",
    title: "SOFTWARE ENGINEERING",
    description: "The foundation behind every system I build.",
    items: [
      "Python",
      "Testing",
      "Git",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Pydantic",
      "Software Architecture",
    ],
  },
  {
    number: "02",
    title: "AI ENGINEERING",
    description:
      "Building intelligent systems around modern AI models.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "NLP",
      "Embeddings",
      "RAG",
      "Vector Search",
      "LLM Evaluation",
    ],
  },
  {
    number: "03",
    title: "PRODUCTION AI",
    description:
      "Engineering AI systems for reliability, evaluation, and operation.",
    items: [
      "AI Agents",
      "Evaluation",
      "Security",
      "Reliability",
      "MLOps",
      "Observability",
      "Monitoring",
      "AI Automation",
    ],
  },
];

const evidence = [
  [
    "01",
    "TESTED",
    "Automated tests support core system behavior.",
  ],
  [
    "02",
    "EVALUATED",
    "Model performance is measured using explicit evaluation metrics.",
  ],
  [
    "03",
    "VERSIONED",
    "ML workflows include experiment tracking and model versioning.",
  ],
  [
    "04",
    "SERVED",
    "AI and ML systems expose application and inference APIs.",
  ],
  [
    "05",
    "MONITORED",
    "Operational health and metrics are treated as part of the system.",
  ],
  [
    "06",
    "HARDENED",
    "Reliability patterns address timeouts, failures, retries, and degraded states.",
  ],
];

const principles = [
  [
    "01",
    "BUILD FOR USE",
    "Solve a defined engineering problem instead of building features for demonstration alone.",
  ],
  [
    "02",
    "MEASURE",
    "Tests, evaluation, metrics, and observability should support engineering decisions.",
  ],
  [
    "03",
    "DESIGN FOR FAILURE",
    "AI systems need explicit handling for unreliable dependencies, timeouts, and degraded states.",
  ],
  [
    "04",
    "KEEP IT MODULAR",
    "Clear boundaries make systems easier to test, replace, operate, and extend.",
  ],
  [
    "05",
    "EVIDENCE OVER CLAIMS",
    "Working systems, source code, documentation, tests, and measurable results should support technical claims.",
  ],
];

const stackGroups: [string, string[]][] = [
  ["LANGUAGES", ["Python", "SQL", "TypeScript"]],
  [
    "AI / ML",
    [
      "PyTorch",
      "Scikit-learn",
      "LLMs",
      "Deep Learning",
      "Embeddings",
      "RAG",
      "AI Agents",
      "NLP",
    ],
  ],
  [
    "BACKEND",
    [
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "PostgreSQL",
      "pgvector",
    ],
  ],
  [
    "MLOps / OBSERVABILITY",
    [
      "MLflow",
      "Model Registry",
      "Prometheus",
      "Joblib",
      "Monitoring",
    ],
  ],
  [
    "INFRASTRUCTURE",
    ["Docker", "Git", "GitHub", "Linux", "CLI"],
  ],
  [
    "LOCAL AI",
    ["Ollama", "Local LLM Inference", "Local Embeddings"],
  ],
  [
    "DEVELOPMENT",
    ["Pytest", "Ruff", "VS Code", "PowerShell"],
  ],
];

const experience = [
  [
    "01",
    "AI ENGINEER",
    "fargo-solve",
    "AI engineering, automation, workflow execution, and intelligent system development.",
    "PRESENT",
  ],
  [
    "02",
    "AI RESEARCH",
    "FAST NUCES",
    "AI research, experimentation, language models, evaluation, and technical investigation.",
    "RESEARCH",
  ],
  [
    "03",
    "AI INTERN",
    "TECHCRAFT LABS",
    "AI development, software engineering, practical implementation, and collaborative technical work.",
    "INTERNSHIP",
  ],
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.25em] text-white/35">
      <span>{number}</span>
      <span className="h-px w-10 bg-white/10" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] =
    useState<number | null>(null);

  const [portraitRotation, setPortraitRotation] = useState({
    x: 0,
    y: 0,
  });

  const reduceMotion = useReducedMotion();

  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  const portraitDrag = useRef({
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const inspectProject = (index: number) => {
    setSelectedProject(index);

    if (!reduceMotion) {
      window.setTimeout(() => {
        projectRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    }
  };

  const nextProject = () => {
    const nextIndex =
      selectedProject === null
        ? 0
        : (selectedProject + 1) % projects.length;

    setSelectedProject(nextIndex);

    if (!reduceMotion) {
      window.setTimeout(() => {
        projectRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    }
  };

  const handlePortraitPointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);

    portraitDrag.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: portraitRotation.y,
      originY: portraitRotation.x,
    };
  };

  const handlePortraitPointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!portraitDrag.current.active) return;

    const dx = event.clientX - portraitDrag.current.startX;
    const dy = event.clientY - portraitDrag.current.startY;

    setPortraitRotation({
      y: Math.max(
        -70,
        Math.min(
          70,
          portraitDrag.current.originX + dx * 0.45
        )
      ),
      x: Math.max(
        -35,
        Math.min(
          35,
          portraitDrag.current.originY - dy * 0.35
        )
      ),
    });
  };

  const handlePortraitPointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    portraitDrag.current.active = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const resetPortrait = () => {
    setPortraitRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-white selection:text-black"
    >
      {/* NAVIGATION */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="text-xs font-semibold tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          >
            ASHAR.
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {[
              ["SYSTEMS", "#systems"],
              ["DOMAINS", "#domains"],
              ["EXPERIENCE", "#experience"],
              ["STACK", "#stack"],
              ["ABOUT", "#about"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] tracking-[0.18em] text-white/45 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-[9px] tracking-[0.18em] text-white/35 sm:block">
              OPEN TO AI ENGINEERING
            </span>

            <a
              href="https://github.com/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] tracking-[0.15em] text-white/70 transition-colors hover:text-white"
            >
              GITHUB ←
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center border-b border-white/[0.06] px-5 pt-24 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02]" />
        </div>

        <div className="mx-auto grid w-full max-w-[1500px] gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.22em] text-white/40"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.35, 1, 0.35],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />

              SYSTEM ONLINE
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mb-4 text-3xl font-medium tracking-[-0.045em] text-white/85 sm:text-4xl lg:text-5xl"
            >
              SYED ASHAR RAZA
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="max-w-5xl text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]"
            >
              AI ENGINEER
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-2xl font-light leading-tight tracking-[-0.04em] text-white/80 sm:text-4xl">
                Engineering intelligent systems
                <br />
                for the real world.
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                I build production-oriented AI systems across machine
                learning, deep learning, LLMs, retrieval, agents,
                automation, and reliable software infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-8 flex max-w-xl flex-wrap gap-x-5 gap-y-3"
            >
              {[
                "LLMs",
                "RAG",
                "AI AGENTS",
                "MACHINE LEARNING",
                "MLOps",
                "AI AUTOMATION",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.55 + index * 0.06,
                  }}
                  className="text-[10px] tracking-[0.16em] text-white/35"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#systems"
                className="group border border-white/20 px-5 py-3 text-[10px] tracking-[0.18em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                EXPLORE SYSTEMS
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com/syed-ashar-raza"
                target="_blank"
                rel="noreferrer"
                className="border border-white/[0.08] px-5 py-3 text-[10px] tracking-[0.18em] text-white/55 transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                VIEW GITHUB ←
              </a>
            </motion.div>

            <div className="mt-12 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/25">
              <span className="h-px w-8 bg-white/15" />
              AVAILABLE FOR AI ENGINEERING OPPORTUNITIES
            </div>
          </div>

          {/* INTERACTIVE PORTRAIT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
            }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div
              onPointerDown={handlePortraitPointerDown}
              onPointerMove={handlePortraitPointerMove}
              onPointerUp={handlePortraitPointerUp}
              onPointerCancel={handlePortraitPointerUp}
              onDoubleClick={resetPortrait}
              className="relative aspect-[4/5] cursor-grab touch-none overflow-hidden border border-white/[0.08] bg-white/[0.015] active:cursor-grabbing"
              style={{
                perspective: "1200px",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:45px_45px]" />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: ["-20%", "120%"],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 right-0 h-px bg-white/10"
              />

              <div className="absolute left-6 top-6 z-20 text-[9px] tracking-[0.2em] text-white/60">
                PROFILE / 001
              </div>

              <div className="absolute right-6 top-6 z-20 text-[9px] tracking-[0.2em] text-white/60">
                2026
              </div>

              <div
                className="absolute inset-0 transition-transform duration-75 ease-out"
                style={{
                  transform: `rotateX(${portraitRotation.x}deg) rotateY(${portraitRotation.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src="/portrait.png"
                  alt="Syed Ashar Raza â€” AI Engineer"
                  draggable={false}
                  className="h-full w-full select-none object-contain object-center"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),transparent_25%,transparent_65%,rgba(0,0,0,0.72))]" />

              <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-5 border-t border-white/[0.15] pt-5">
                <div>
                  <div className="text-[8px] tracking-[0.2em] text-white/45">
                    DISCIPLINE
                  </div>

                  <div className="mt-2 text-[10px] tracking-[0.14em] text-white/85">
                    AI ENGINEERING
                  </div>
                </div>

                <div>
                  <div className="text-[8px] tracking-[0.2em] text-white/45">
                    STATUS
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-[10px] tracking-[0.14em] text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    BUILDING
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-[7px] tracking-[0.18em] text-white/20">
                DRAG TO ROTATE Â· DOUBLE CLICK TO RESET
              </div>
            </div>

            <div className="absolute -left-5 top-1/4 border border-white/[0.08] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.2em] text-white/30">
              AI / SYS
            </div>

            <div className="absolute -right-5 bottom-1/4 border border-white/[0.08] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.2em] text-white/30">
              06 SYSTEMS
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="01" children="ENGINEERING" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              I build systems,
              <br />
              <span className="text-white/35">
                not just demos.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
              <p className="max-w-2xl text-base leading-8 text-white/45">
                My work focuses on applied AI engineering: turning
                models, data, APIs, and infrastructure into systems
                that can be evaluated, deployed, monitored, and
                maintained.
              </p>

              <div className="border-l border-white/[0.08] pl-6">
                <div className="text-[9px] tracking-[0.2em] text-white/25">
                  SYSTEM FLOW
                </div>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] tracking-[0.14em] text-white/55">
                  {[
                    "MODEL",
                    "SYSTEM",
                    "EVALUATION",
                    "RELIABILITY",
                    "PRODUCTION",
                  ].map((item, index) => (
                    <span
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span>{item}</span>

                      {index < 4 && (
                        <span className="text-white/20">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-20 border-t border-white/[0.08] pt-8 text-xl tracking-[-0.02em] text-white/55 sm:text-2xl">
              AI is only useful when the system around the model
              works.
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOMAINS */}
      <section
        id="domains"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="02"
              children="ENGINEERING DOMAINS"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              What I engineer.
            </h2>
          </Reveal>

          <div className="mt-20 grid border-t border-white/[0.08] lg:grid-cols-3">
            {domains.map((domain, index) => (
              <Reveal
                key={domain.number}
                delay={index * 0.08}
                className="group border-b border-white/[0.08] p-6 transition-colors duration-500 hover:bg-white/[0.025] lg:border-b-0 lg:border-r lg:p-8 last:border-r-0"
              >
                <div className="flex items-center justify-between text-[10px] text-white/25">
                  <span>{domain.number}</span>

                  <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ←
                  </span>
                </div>

                <h3 className="mt-14 text-xl font-medium tracking-[-0.03em]">
                  {domain.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {domain.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/[0.07] px-2.5 py-1.5 text-[9px] tracking-[0.08em] text-white/40 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.18em] text-white/30">
              <span>SOFTWARE ENGINEERING</span>
              <span>→</span>
              <span>AI ENGINEERING</span>
              <span>→</span>
              <span>PRODUCTION AI</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEMS */}
      <section
        id="systems"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="03"
              children="SELECTED SYSTEMS"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Engineering systems
                <br />
                <span className="text-white/35">
                  I've built.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-6 text-white/35">
                Different systems. Different engineering problems.
                One consistent focus: building usable AI software.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-20">
            <AnimatePresence>
              {selectedProject !== null && (
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                        }
                  }
                  animate={{
                    opacity: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                        }
                  }
                  className="pointer-events-none absolute -inset-3 border border-white/[0.04]"
                />
              )}
            </AnimatePresence>

            <div className="grid gap-px bg-white/[0.08] lg:grid-cols-2">
              {projects.map((project, index) => {
                const isSelected = selectedProject === index;
                const hasSelection = selectedProject !== null;

                return (
                  <motion.article
                    key={project.name}
                    ref={(element) => {
                      projectRefs.current[index] = element;
                    }}
                    layout
                    animate={{
                      opacity:
                        hasSelection && !isSelected ? 0.45 : 1,
                      scale:
                        isSelected && !reduceMotion ? 1.008 : 1,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`group relative overflow-hidden bg-[#050505] ${
                      isSelected ? "z-10" : "z-0"
                    }`}
                  >
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isSelected ? 1 : 0,
                        scaleX: isSelected ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 right-0 top-0 h-px origin-left bg-white"
                    />

                    <button
                      type="button"
                      onClick={() => inspectProject(index)}
                      aria-expanded={isSelected}
                      className="block w-full cursor-pointer p-6 text-left outline-none focus-visible:ring-1 focus-visible:ring-white/50 sm:p-8 lg:p-10"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] tracking-[0.18em] text-white/25">
                            {project.number}
                          </span>

                          <AnimatePresence>
                            {isSelected && (
                              <motion.span
                                initial={{
                                  opacity: 0,
                                  width: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  width: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  width: 0,
                                }}
                                className="overflow-hidden whitespace-nowrap text-[8px] tracking-[0.18em] text-white/45"
                              >
                                ACTIVE SYSTEM
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>

                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  rotate: isSelected ? 45 : 0,
                                }
                          }
                          transition={{
                            duration: 0.3,
                          }}
                          className="text-xl font-light text-white/40"
                        >
                          +
                        </motion.span>
                      </div>

                      <div className="mt-12 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/25">
                        <span>{project.category}</span>

                        {isSelected && (
                          <motion.span
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scaleX: 0,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              scaleX: 1,
                            }}
                            className="h-px w-8 origin-left bg-white/25"
                          />
                        )}
                      </div>

                      <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                        {project.name}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                        {project.description}
                      </p>

                      <div className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-white/60">
                        <span>
                          {isSelected
                            ? "SYSTEM INSPECTED"
                            : "CLICK TO INSPECT SYSTEM"}
                        </span>

                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  x: isSelected ? 3 : 0,
                                }
                          }
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  height: 0,
                                  opacity: 0,
                                }
                          }
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={
                            reduceMotion
                              ? undefined
                              : {
                                  height: 0,
                                  opacity: 0,
                                }
                          }
                          transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden border-t border-white/[0.07]"
                        >
                          <div className="p-6 sm:p-8 lg:p-10">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] tracking-[0.22em] text-white/20">
                                INTERACTIVE SYSTEM VIEW
                              </span>

                              <span className="text-[8px] tracking-[0.2em] text-white/20">
                                {project.number} / 06
                              </span>
                            </div>

                            <div className="relative mt-8 overflow-x-auto pb-4">
                              <div className="absolute left-0 right-0 top-[17px] h-px bg-white/[0.04]" />

                              <div className="relative flex min-w-max items-center gap-2">
                                {project.architecture
                                  .split(" → ")
                                  .map(
                                    (
                                      step,
                                      stepIndex,
                                      steps
                                    ) => (
                                      <div
                                        key={`${project.name}-${step}`}
                                        className="flex items-center gap-2"
                                      >
                                        <motion.div
                                          initial={
                                            reduceMotion
                                              ? false
                                              : {
                                                  opacity: 0,
                                                  x: -10,
                                                }
                                          }
                                          animate={{
                                            opacity: 1,
                                            x: 0,
                                          }}
                                          transition={{
                                            delay: reduceMotion
                                              ? 0
                                              : stepIndex * 0.07,
                                            duration: 0.35,
                                          }}
                                          className="relative z-10 border border-white/[0.1] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.12em] text-white/55 transition-colors hover:border-white/25 hover:text-white/75"
                                        >
                                          {step}
                                        </motion.div>

                                        {stepIndex <
                                          steps.length - 1 && (
                                          <motion.span
                                            initial={
                                              reduceMotion
                                                ? false
                                                : {
                                                    opacity: 0,
                                                    x: -4,
                                                  }
                                            }
                                            animate={{
                                              opacity: 1,
                                              x: 0,
                                            }}
                                            transition={{
                                              delay: reduceMotion
                                                ? 0
                                                : stepIndex * 0.07 +
                                                  0.05,
                                            }}
                                            className="text-white/25"
                                          >
                                            →
                                          </motion.span>
                                        )}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>

                            <div className="mt-8 border-t border-white/[0.06] pt-6">
                              <div className="text-[8px] tracking-[0.2em] text-white/20">
                                SYSTEM STACK
                              </div>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {project.stack.map(
                                  (item, stackIndex) => (
                                    <motion.span
                                      key={item}
                                      initial={
                                        reduceMotion
                                          ? false
                                          : {
                                              opacity: 0,
                                              y: 6,
                                            }
                                      }
                                      animate={{
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      transition={{
                                        delay: reduceMotion
                                          ? 0
                                          : stackIndex * 0.04,
                                        duration: 0.3,
                                      }}
                                      className="border border-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/40 transition-colors hover:border-white/20 hover:text-white/65"
                                    >
                                      {item}
                                    </motion.span>
                                  )
                                )}
                              </div>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) =>
                                  event.stopPropagation()
                                }
                                className="group border border-white/15 px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                              >
                                VIEW SOURCE
                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  ←
                                </span>
                              </a>

                              <button
                                type="button"
                                onClick={nextProject}
                                className="group border border-white/[0.07] px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/35 transition-all duration-300 hover:border-white/20 hover:text-white"
                              >
                                NEXT SYSTEM
                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  →
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedProject(null)
                                }
                                className="px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/25 transition-colors hover:text-white"
                              >
                                CLOSE
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 text-[9px] tracking-[0.2em] text-white/20">
              CLICK ANY SYSTEM TO INSPECT THE ARCHITECTURE
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGINEERING PATH */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="04"
              children="ENGINEERING PATH"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              One engineering
              <br />
              <span className="text-white/35">
                progression.
              </span>
            </h2>
          </Reveal>

          <div className="mt-20 border-t border-white/[0.08]">
            {[
              "SOFTWARE ENGINEERING",
              "PYTHON / APIS / DATABASES / TESTING",
              "MACHINE LEARNING",
              "DEEP LEARNING",
              "LLMs",
              "RAG",
              "AI AGENTS",
              "MLOps",
              "EVALUATION / SECURITY / RELIABILITY",
              "PRODUCTION AI",
            ].map((item, index, items) => (
              <Reveal key={item} delay={index * 0.025}>
                <div className="group flex items-center border-b border-white/[0.06] py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:py-6">
                  <span className="w-12 text-[9px] tracking-[0.15em] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm tracking-[0.08em] text-white/55 transition-colors group-hover:text-white sm:text-base">
                    {item}
                  </span>

                  {index < items.length - 1 && (
                    <span className="ml-auto text-white/15 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-white/35">
              My projects represent different engineering layers
              rather than repeated versions of the same AI
              application.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="05"
              children="SYSTEM ARCHITECTURE"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Models are components.
              <br />
              <span className="text-white/35">
                Systems are the product.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-20 overflow-x-auto pb-4">
              <div className="flex min-w-[950px] items-center">
                {[
                  ["01", "CLIENT"],
                  ["02", "API"],
                  ["03", "ROUTING / LOGIC / SECURITY"],
                  ["04", "AI / ML CORE"],
                  ["05", "DATABASE / TOOLS / MEMORY"],
                  ["06", "OBSERVABILITY"],
                ].map(
                  ([number, label], index, items) => (
                    <div
                      key={number}
                      className="flex flex-1 items-center"
                    >
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -5,
                              }
                        }
                        className="min-w-0 flex-1 border border-white/[0.08] bg-white/[0.015] p-5 transition-colors duration-300 hover:border-white/20"
                      >
                        <div className="text-[8px] tracking-[0.2em] text-white/20">
                          {number}
                        </div>

                        <div className="mt-4 text-[9px] leading-4 tracking-[0.1em] text-white/55">
                          {label}
                        </div>
                      </motion.div>

                      {index < items.length - 1 && (
                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  x: [0, 4, 0],
                                  opacity: [0.2, 0.6, 0.2],
                                }
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="px-3 text-white/20"
                        >
                          →
                        </motion.span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-5 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/20">
              <span className="h-px w-8 bg-white/10" />
              PRODUCTION
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="06"
              children="ENGINEERING EVIDENCE"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Built. Tested.
              <br />
              <span className="text-white/35">
                Evaluated.
              </span>
            </h2>
          </Reveal>

          <div className="mt-20 grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {evidence.map(
              ([number, title, description], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <div className="group border-b border-white/[0.08] p-6 transition-colors duration-500 hover:bg-white/[0.02] sm:p-8 lg:p-10">
                    <div className="text-[9px] tracking-[0.18em] text-white/20">
                      {number}
                    </div>

                    <h3 className="mt-12 text-xl font-medium tracking-[-0.03em]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/35">
                      {description}
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="07"
              children="PRINCIPLES"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              How I engineer.
            </h2>
          </Reveal>

          <div className="mt-20 border-t border-white/[0.08]">
            {principles.map(
              ([number, title, description], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="grid gap-5 border-b border-white/[0.07] py-8 transition-colors duration-300 hover:bg-white/[0.015] lg:grid-cols-[80px_0.7fr_1.3fr] lg:items-center">
                    <span className="text-[9px] tracking-[0.18em] text-white/20">
                      {number}
                    </span>

                    <h3 className="text-lg font-medium tracking-[-0.02em]">
                      {title}
                    </h3>

                    <p className="max-w-2xl text-sm leading-6 text-white/35">
                      {description}
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section
        id="stack"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="08"
              children="TECHNOLOGY STACK"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Engineering stack.
            </h2>
          </Reveal>

          <div className="mt-20 grid border-t border-white/[0.08] md:grid-cols-2">
            {stackGroups.map(
              ([group, items], index) => (
                <Reveal key={group} delay={index * 0.04}>
                  <div className="border-b border-white/[0.07] p-6 sm:p-8">
                    <div className="text-[9px] tracking-[0.2em] text-white/25">
                      {group}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="border border-white/[0.07] px-3 py-2 text-[9px] text-white/45 transition-colors duration-300 hover:border-white/20 hover:text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="09"
              children="EXPERIENCE"
            />
          </Reveal>

          <div className="mt-16 border-t border-white/[0.08]">
            {experience.map(
              (
                [
                  number,
                  title,
                  company,
                  description,
                  status,
                ],
                index
              ) => (
                <Reveal key={company} delay={index * 0.06}>
                  <div className="grid gap-8 border-b border-white/[0.07] py-10 lg:grid-cols-[70px_0.8fr_1.3fr_120px] lg:items-center">
                    <span className="text-[9px] tracking-[0.18em] text-white/20">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-lg font-medium tracking-[-0.02em]">
                        {title}
                      </h3>

                      <div className="mt-2 text-[10px] tracking-[0.15em] text-white/30">
                        {company}
                      </div>
                    </div>

                    <p className="max-w-2xl text-sm leading-6 text-white/35">
                      {description}
                    </p>

                    <span className="text-[8px] tracking-[0.18em] text-white/20 lg:text-right">
                      {status}
                    </span>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <SectionLabel
              number="10"
              children="ABOUT"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Engineering at the intersection of software and intelligence.
              </h2>

              <div className="mt-14 max-w-3xl space-y-7 text-sm leading-7 text-white/40 sm:text-base">
                <p>
                  I'm Syed Ashar Raza, an AI Engineer focused on
                  building intelligent software systems.
                </p>

                <p>
                  My foundation is software engineering: Python,
                  APIs, databases, testing, version control, and
                  system architecture.
                </p>

                <p>
                  From there, I moved into machine learning and
                  modern generative AI, working with language
                  models, retrieval systems, AI agents, evaluation,
                  automation, and production-oriented
                  infrastructure.
                </p>

                <p>
                  My focus is building AI systems that go beyond
                  model demonstrations â€” systems that can be
                  evaluated, served, monitored, secured, and
                  improved.
                </p>

                <p className="pt-3 text-lg tracking-[-0.02em] text-white/65 sm:text-xl">
                  I build where AI meets software engineering.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFILE */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="11"
              children="PROFESSIONAL PROFILE"
            />
          </Reveal>

          <div className="mt-16 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <Reveal delay={0.08}>
              <div>
                <h2 className="text-6xl font-medium tracking-[-0.065em] sm:text-8xl lg:text-[10rem]">
                  AI ENGINEER
                </h2>

                <div className="mt-8 flex max-w-3xl flex-wrap gap-x-4 gap-y-3">
                  {[
                    "LLMs",
                    "MACHINE LEARNING",
                    "GENERATIVE AI",
                    "RAG",
                    "AI AGENTS",
                    "MLOps",
                    "AI AUTOMATION",
                    "BACKEND ENGINEERING",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-[9px] tracking-[0.14em] text-white/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col items-start gap-5">
                <div className="flex items-center gap-2 text-[9px] tracking-[0.18em] text-white/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  REMOTE
                </div>

                <div className="text-[9px] tracking-[0.18em] text-white/30">
                  OPEN TO OPPORTUNITIES
                </div>

                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="/Syed_Ashar_Raza_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/15 px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/55 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    VIEW RESUME
                  </a>

                  <a
                    href="https://www.linkedin.com/in/syed-ashar-raza"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/[0.07] px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/35 transition-colors hover:border-white/20 hover:text-white"
                  >
                    LINKEDIN ←
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOURCE */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="12"
              children="SOURCE"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                The code is
                <br />
                <span className="text-white/35">
                  the evidence.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/35">
                My GitHub contains the systems, experiments,
                documentation, and engineering work behind this
                portfolio.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid border-t border-white/[0.08] md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.04}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-b border-white/[0.07] p-6 transition-colors duration-500 hover:bg-white/[0.02] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.18em] text-white/20">
                      {project.category}
                    </span>

                    <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ←
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/30">
                    {project.description}
                  </p>

                  <div className="mt-6 text-[9px] tracking-[0.16em] text-white/25 transition-colors group-hover:text-white/60">
                    VIEW SOURCE →
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-20 border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="13"
              children="CONTACT"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.07em] sm:text-7xl lg:text-9xl">
              Let's build
              <br />
              <span className="text-white/35">
                something intelligent.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
              Open to conversations around AI engineering,
              machine learning, LLM systems, AI infrastructure,
              automation, and production-oriented software.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 border-t border-white/[0.08] pt-8 sm:grid-cols-3">
            <Reveal>
              <a
                href="mailto:syedasharraza512725@gmail.com"
                className="group block"
              >
                <div className="text-[8px] tracking-[0.2em] text-white/20">
                  EMAIL
                </div>

                <div className="mt-3 text-sm text-white/45 transition-colors group-hover:text-white">
                  syedasharraza512725@gmail.com
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href="https://www.linkedin.com/in/syed-ashar-raza"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="text-[8px] tracking-[0.2em] text-white/20">
                  LINKEDIN
                </div>

                <div className="mt-3 text-sm text-white/45 transition-colors group-hover:text-white">
                  LinkedIn ←
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="https://github.com/syed-ashar-raza"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="text-[8px] tracking-[0.2em] text-white/20">
                  GITHUB
                </div>

                <div className="mt-3 text-sm text-white/45 transition-colors group-hover:text-white">
                  syed-ashar-raza ←
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="relative overflow-hidden px-5 py-32 sm:px-8 lg:px-12 lg:py-48">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.8] tracking-[-0.08em]">
              INTELLIGENCE
              <br />
              <span className="text-white/30">
                NEEDS
              </span>
              <br />
              ENGINEERING.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-end">
              <div>
                <div className="text-lg font-medium tracking-[-0.03em]">
                  SYED ASHAR RAZA
                </div>

                <div className="mt-2 text-[9px] tracking-[0.2em] text-white/25">
                  AI ENGINEER
                </div>
              </div>

              <div className="text-[9px] tracking-[0.18em] text-white/25">
                LLMs / RAG / AGENTS / ML / MLOps / AUTOMATION
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 text-[8px] tracking-[0.18em] text-white/20 sm:flex-row">
          <div>
            SYED ASHAR RAZA / AI ENGINEER
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/60"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/60"
            >
              LINKEDIN
            </a>

            <a
              href="/Syed_Ashar_Raza_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/60"
            >
              RESUME
            </a>

            <a
              href="mailto:syedasharraza512725@gmail.com"
              className="transition-colors hover:text-white/60"
            >
              EMAIL
            </a>
          </div>

          <div>
            Â© 2026 SYED ASHAR RAZA Â· BUILT WITH NEXT.JS
          </div>
        </div>
      </footer>
    </main>
  );
}


