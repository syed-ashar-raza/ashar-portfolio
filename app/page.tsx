"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";


const projects = [
  {
    number: "01",
    category: "AI INFERENCE INFRASTRUCTURE",
    name: "Nexora",
    description:
      "Production-oriented AI inference infrastructure gateway with provider routing, bounded retries, circuit breakers, rate limiting, authentication, streaming, and operational observability.",
    architecture:
      "CLIENT → → API → → AUTH / RATE LIMIT → → ROUTING → → PROVIDER → → RELIABILITY → → OBSERVABILITY",
    stack: [
      "Python",
      "FastAPI",
      "Provider Routing",
      "Retry Budgets",
      "Circuit Breaker",
      "Prometheus",
      "Docker",
      "Kubernetes",
      "Pytest",
    ],
    github: "https://github.com/syed-ashar-raza/Nexora",
  },
  {
    number: "02",
    category: "AI EVALUATION & REGRESSION",
    name: "Verity",
    description:
      "Reproducible AI evaluation and regression platform with deterministic metrics, per-case thresholds, latency budgets, baseline regression gates, persisted reports, and CLI/API interfaces.",
    architecture:
      "DATASET → → EVALUATION RUNNER → → METRICS → → THRESHOLDS → → REGRESSION GATE → → REPORT",
    stack: [
      "Python",
      "FastAPI",
      "CLI",
      "Evaluation Metrics",
      "Regression Testing",
      "Pytest",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/syed-ashar-raza/Verity",
  },
  {
    number: "03",
    category: "MCP & AGENT ARCHITECTURE",
    name: "Orion",
    description:
      "Modern agent architecture focused on structured tool integration, controlled interactions, modular components, and interoperable AI workflows.",
    architecture:
      "AGENT → → CONTEXT → → TOOL INTERFACE → → EXECUTION → → RESULT",
    stack: [
      "Python",
      "MCP",
      "Agent Architecture",
      "Tool Integration",
      "Structured Interfaces",
      "Testing",
    ],
    github: "https://github.com/syed-ashar-raza/Orion",
  },
  {
    number: "04",
    category: "MULTIMODAL ML / PEFT",
    name: "Syntrix",
    description:
      "Reproducible ML engineering platform covering model training, evaluation, inference benchmarking, serving, observability, and a verified PEFT/LoRA smoke test.",
    architecture:
      "DATA → → TRAINING → → EVALUATION → → INFERENCE → → BENCHMARKING → → OBSERVABILITY",
    stack: [
      "Python",
      "PyTorch",
      "PEFT",
      "LoRA",
      "Inference Benchmarking",
      "Prometheus",
      "FastAPI",
      "Pytest",
      "Docker",
    ],
    github: "https://github.com/syed-ashar-raza/Syntrix",
  },
  {
    number: "05",
    category: "RETRIEVAL SYSTEM",
    name: "RAGForge",
    description:
      "Production-oriented local RAG system for document ingestion, semantic retrieval, grounded generation, evidence attribution, and continuous evaluation.",
    architecture:
      "DOCUMENT → → INGESTION → → CHUNKING → → EMBEDDING → → VECTOR DB → → RETRIEVAL → → CONTEXT → → LLM",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Ollama",
      "Embeddings",
      "RAG Evaluation",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/syed-ashar-raza/RAGForge",
  },
  {
    number: "06",
    category: "AI SECURITY EVALUATION",
    name: "Sentinel",
    description:
      "AI security evaluation platform with deterministic security test cases, input inspection, PII-related controls, and reproducible evaluation reports.",
    architecture:
      "INPUT → → SECURITY CONTROLS → → DETECTION → → EVALUATION → → RESULTS → → REPORT",
    stack: [
      "Python",
      "AI Security",
      "PII Protection",
      "Security Evaluation",
      "FastAPI",
      "CLI",
      "Pytest",
      "Docker",
    ],
    github: "https://github.com/syed-ashar-raza/Sentinel",
  },
  {
    number: "07",
    category: "AI AGENT SYSTEM",
    name: "AgentForge",
    description:
      "Production-oriented AI agent framework with LLM-driven tool selection, bounded execution, persistent memory, local inference, and a FastAPI interface.",
    architecture:
      "USER → → FASTAPI → → AGENT ORCHESTRATOR → → LLM → → TOOL DECISION → → EXECUTION → → CONTEXT → → RESPONSE",
    stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "LLMs",
      "Tool Calling",
      "Bounded Execution",
      "Persistent Memory",
      "Pytest",
    ],
    github: "https://github.com/syed-ashar-raza/AgentForge",
  },
  {
    number: "08",
    category: "ML / MLOps PLATFORM",
    name: "ModelOpsForge",
    description:
      "Production-oriented ML lifecycle covering reproducible training, model evaluation, acceptance gates, experiment tracking, model versioning, serving, and monitoring.",
    architecture:
      "DATA → → VALIDATION → → TRAINING → → EVALUATION → → GATES → → REGISTRY → → CHAMPION → → API → → MONITORING",
    stack: [
      "Python",
      "Scikit-learn",
      "MLflow",
      "FastAPI",
      "Prometheus",
      "Joblib",
      "Pytest",
      "Docker",
      "CI/CD",
    ],
    github: "https://github.com/syed-ashar-raza/ModelOpsForge",
  },
  {
    number: "09",
    category: "AI AUTOMATION",
    name: "fargo-solve",
    description:
      "AI automation and workflow engineering involving intelligent workflows, voice interaction, API integration, and business-process execution.",
    architecture:
      "INPUT → → AI INTERPRETATION → → WORKFLOW → → TOOLS / SERVICES → → EXECUTION → → RESULT",
    stack: [
      "AI",
      "Automation",
      "Workflows",
      "Voice AI",
      "APIs",
    ],
    github: "https://github.com/syed-ashar-raza/fargo-solve",
  },
  {
    number: "10",
    category: "LANGUAGE AI",
    name: "UrduLLM-Lab",
    description:
      "Applied Urdu LLM adaptation and evaluation research pipeline focused on language-specific experimentation and analysis.",
    architecture:
      "DATA → → PREPARATION → → LLM ADAPTATION → → EVALUATION → → ANALYSIS",
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
    number: "11",
    category: "SOFTWARE ENGINEERING",
    name: "Bank Management System",
    description:
      "Python CLI application demonstrating object-oriented design, persistence, validation, custom exceptions, transaction handling, and automated testing.",
    architecture:
      "USER → → CLI → → BUSINESS LOGIC → → VALIDATION → → PERSISTENCE",
    stack: [
      "Python",
      "OOP",
      "JSON",
      "Pytest",
      "Validation",
    ],
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
    "JUL 2024",
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
    <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.25em] text-white/70">
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
      {/* ASHAR_CINEMATIC_INTRO */}
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 1.65, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#030303]"
      >
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { scaleX: 0 }}
          animate={{ opacity: [0, 0.85, 0], scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.6, times: [0, 0.45, 1], ease: "easeInOut" }}
          className="absolute left-0 right-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(127,29,29,0.2),transparent_58%)]" />
        <div className="relative flex flex-col items-center px-5 text-center">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 14, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.24em" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-[10px] font-medium uppercase text-white/75 sm:text-xs"
          >
            ENGINEERING INTELLIGENCE
          </motion.span>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 1.04 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-nowrap text-[clamp(3.5rem,13vw,10rem)] font-semibold leading-[0.85] tracking-[-0.09em] text-white"
          >
            ASHAR<span className="text-red-600">.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.45 }}
            className="mt-7 h-px max-w-xs bg-gradient-to-r from-transparent via-red-500/80 to-transparent"
          />
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.55 }}
            className="mt-5 text-[10px] tracking-[0.38em] text-white/85 sm:text-xs"
          >
            AI ENGINEER
          </motion.p>
        </div>
        <span className="absolute bottom-8 text-[8px] tracking-[0.28em] text-white/65">
          SYSTEMS / INTELLIGENCE / ENGINEERING
        </span>
      </motion.div>
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
                className="text-[10px] tracking-[0.18em] text-white/65 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-[9px] tracking-[0.18em] text-white/70 sm:block">
              OPEN TO AI ENGINEERING
            </span>

            <a
              href="https://github.com/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] tracking-[0.15em] text-white/90 transition-colors hover:text-white"
            >
              GITHUB
            </a>
          </div>
        </div>
      </nav>

      {/* HERO: CINEMATIC ENGINEERING INTRO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_43%,rgba(153,27,27,0.20),transparent_39%),linear-gradient(110deg,#050505_0%,#080607_55%,#030303_100%)]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0.8 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-[28%] h-px w-full origin-left bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
          />
          <div className="absolute -right-40 top-[15%] h-[32rem] w-[32rem] rounded-full bg-red-950/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-x-5 top-24 flex items-center justify-between text-[9px] tracking-[0.22em] text-white/65 sm:inset-x-8 lg:inset-x-12">
          <span>ASHAR / AI SYSTEMS</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> SYSTEM ONLINE</span>
        </div>

        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 xl:gap-12">
          <div className="relative z-10 py-8">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.15 }}
              className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/65"
            >
              <span className="h-px w-8 bg-red-600" />
              SOFTWARE ENGINEERING / ARTIFICIAL INTELLIGENCE
            </motion.div>

            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.25 }}
              className="mb-3 text-sm font-medium tracking-[0.22em] text-white/85 sm:text-base"
            >
              SYED ASHAR RAZA
            </motion.p>

            <motion.h1
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-[clamp(4.2rem,10.5vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.085em] text-white"
            >
              AI
              <br />
              <span className="inline-block pt-3 text-white/[0.88]">ENGINEER<span className="text-red-600">.</span></span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.55 }}
              className="mt-8 h-px w-28 origin-left bg-red-600"
            />

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.6 }}
              className="mt-7 max-w-xl"
            >
              <p className="text-xl font-light leading-snug tracking-[-0.035em] text-white/95 sm:text-2xl lg:text-3xl">
                Intelligent systems.
                <br />
                <span className="text-white/65">Engineered for the real world.</span>
              </p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                I build production-oriented AI systems across LLMs, retrieval, intelligent agents, machine learning, and reliable software infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.75 }}
              className="mt-7 flex max-w-lg flex-wrap gap-2"
            >
              {["LLM ENGINEERING", "RAG", "AI AGENTS", "MACHINE LEARNING", "MLOps"].map((item) => (
                <span key={item} className="border border-white/[0.12] bg-white/[0.025] px-3 py-2 text-[9px] tracking-[0.14em] text-white/70 transition-colors duration-300 hover:border-red-600/60 hover:text-white">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.85 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#systems" className="group inline-flex items-center gap-5 bg-red-700 px-5 py-4 text-[10px] font-medium tracking-[0.17em] text-white transition-colors duration-300 hover:bg-red-600">
                EXPLORE MY SYSTEMS
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→ →</span>
              </a>
              <a href="https://github.com/syed-ashar-raza" target="_blank" rel="noreferrer" className="inline-flex items-center border border-white/20 px-5 py-4 text-[10px] tracking-[0.17em] text-white/90 transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04] hover:text-white">
                VIEW GITHUB
              </a>
            </motion.div>

            <div className="mt-9 flex items-center gap-3 text-[9px] tracking-[0.15em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              OPEN TO AI ENGINEERING OPPORTUNITIES
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
            className="relative mx-auto w-full max-w-md lg:ml-auto lg:translate-y-2"
          >
            <div
              onPointerDown={handlePortraitPointerDown}
              onPointerMove={handlePortraitPointerMove}
              onPointerUp={handlePortraitPointerUp}
              onPointerCancel={handlePortraitPointerUp}
              onDoubleClick={resetPortrait}
              className="group relative aspect-[4/5] cursor-grab touch-none overflow-hidden border border-white/20 bg-[#09090b] shadow-[0_24px_100px_rgba(0,0,0,0.65),0_0_80px_rgba(220,38,38,0.16)] active:cursor-grabbing"
              style={{
                perspective: "1200px",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:45px_45px]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(220,38,38,0.16),transparent_62%)]" />

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

              <div className="absolute left-6 top-6 z-20 text-[9px] tracking-[0.2em] text-white/80">
                PROFILE / 001
              </div>

              <div className="absolute right-6 top-6 z-20 text-[9px] tracking-[0.2em] text-white/80">
                2026
              </div>

              <div
                className="absolute inset-0 transition-transform duration-75 ease-out"
                style={{
                  transform: `rotateX(${portraitRotation.x}deg) rotateY(${portraitRotation.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="/portrait.png"
                  alt="Syed Ashar Raza - AI Engineer"
                  draggable={false}
                  width={800}
                  height={1000}
                  priority
                  className="h-full w-full select-none object-contain object-center"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),transparent_25%,transparent_65%,rgba(0,0,0,0.72))]" />

              <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-5 border-t border-white/[0.15] pt-5">
                <div>
                  <div className="text-[8px] tracking-[0.2em] text-white/65">
                    DISCIPLINE
                  </div>

                  <div className="mt-2 text-[10px] tracking-[0.14em] text-white/95">
                    AI ENGINEERING
                  </div>
                </div>

                <div>
                  <div className="text-[8px] tracking-[0.2em] text-white/65">
                    STATUS
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-[10px] tracking-[0.14em] text-white/95">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    BUILDING
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-[7px] tracking-[0.18em] text-white/75">
                DRAG TO ROTATE / DOUBLE CLICK TO RESET
              </div>
            </div>

            <div className="absolute -left-5 top-1/4 border border-white/[0.08] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.2em] text-white/65">
              AI / SYS
            </div>

            <div className="absolute -right-5 bottom-1/4 border border-white/[0.08] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.2em] text-white/65">
              11 SYSTEMS
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="01">ENGINEERING</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              I build systems,
              <br />
              <span className="text-white/70">
                not just demos.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
              <p className="max-w-2xl text-base leading-8 text-white/65">
                My work focuses on applied AI engineering: turning
                models, data, APIs, and infrastructure into systems
                that can be evaluated, deployed, monitored, and
                maintained.
              </p>

              <div className="border-l border-white/[0.08] pl-6">
                <div className="text-[9px] tracking-[0.2em] text-white/65">
                  SYSTEM FLOW
                </div>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[10px] tracking-[0.14em] text-white/75">
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
                        <span className="text-white/75">→ →</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-20 border-t border-white/[0.08] pt-8 text-xl tracking-[-0.02em] text-white/75 sm:text-2xl">
              AI is only useful when the system around the model
              works.
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="relative mt-16 overflow-hidden border border-white/[0.10] bg-[#070607] p-5 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.13),transparent_65%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.10] pb-5">
                <div>
                  <div className="text-[9px] tracking-[0.24em] text-red-400">ENGINEERING PIPELINE / 001</div>
                  <div className="mt-2 text-sm tracking-[0.04em] text-white/95">From model to production</div>
                </div>
                <div className="flex items-center gap-2 text-[8px] tracking-[0.18em] text-white/75">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  SYSTEM FLOW
                </div>
              </div>
              <div className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-2">
                {[
                  { id: "01", name: "MODEL", detail: "Inference" },
                  { id: "02", name: "SYSTEM", detail: "Orchestration" },
                  { id: "03", name: "EVALUATE", detail: "Quality gates" },
                  { id: "04", name: "SECURE", detail: "Guardrails" },
                  { id: "05", name: "DEPLOY", detail: "Observability" },
                ].map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.1 }}
                    className="group relative border border-white/[0.12] bg-black/70 p-4 transition-colors duration-300 hover:border-red-500/60 sm:min-h-32"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-[0.18em] text-white/70">{stage.id}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500/70 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-400" />
                    </div>
                    <div className="mt-5 text-[10px] font-medium tracking-[0.13em] text-white/95">{stage.name}</div>
                    <div className="mt-2 text-[9px] tracking-[0.04em] text-white/75">{stage.detail}</div>
                    {index < 4 && (
                      <div className="absolute -bottom-2 left-1/2 z-10 h-3 w-px bg-red-500/70 sm:-right-2 sm:bottom-auto sm:left-auto sm:top-1/2 sm:h-px sm:w-3" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
                <span className="text-[8px] tracking-[0.16em] text-white/70">BUILD → → TEST → → MEASURE → → VERIFY</span>
                <span className="text-[8px] tracking-[0.16em] text-red-400/80">ENGINEERED FOR RELIABILITY</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOMAINS */}
      <section
        id="domains"
        className="scroll-mt-20 border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="02">ENGINEERING DOMAINS</SectionLabel>
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
                <div className="flex items-center justify-between text-[10px] text-white/65">
                  <span>{domain.number}</span>

                  <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    → →
                  </span>
                </div>

                <h3 className="mt-14 text-xl font-medium tracking-[-0.03em]">
                  {domain.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {domain.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/[0.07] px-2.5 py-1.5 text-[9px] tracking-[0.08em] text-white/75 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.18em] text-white/65">
              <span>SOFTWARE ENGINEERING</span>
              <span>→ →</span>
              <span>AI ENGINEERING</span>
              <span>→ →</span>
              <span>PRODUCTION AI</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEMS */}
      <section
        id="systems"
        className="scroll-mt-20 border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel
              number="03">AI ENGINEERING LABORATORY</SectionLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Systems,
                <br />
                <span className="text-white/70">
                  built to work.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-6 text-white/70">
                Eleven engineering projects. Distinct technical challenges.
                Explore the architecture, implementation stack, and source code behind each system.
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

            <div className="flex flex-col gap-12">
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
                    className={`group relative overflow-hidden bg-[#070606] transition-colors duration-500 hover:bg-[#0b0708] ${
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
                      className="absolute left-0 right-0 top-0 h-px origin-left bg-red-600"
                    />

                    <button
                      type="button"
                      onClick={() => inspectProject(index)}
                      aria-expanded={isSelected}
                      className="grid w-full grid-cols-1 gap-x-10 gap-y-0 p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 sm:p-8 lg:grid-cols-2 lg:gap-x-12 lg:p-12 xl:gap-x-16"
                    >
                      <div className="col-span-full flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] tracking-[0.18em] text-white/65">
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
                                className="overflow-hidden whitespace-nowrap text-[8px] tracking-[0.18em] text-red-400"
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
                          className="text-xl font-light text-white/75"
                        >
                          +
                        </motion.span>
                      </div>

                      <div className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/65 lg:col-start-2 lg:row-start-2 lg:mt-0">
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

                      <h3 className="mt-4 text-4xl font-medium tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl lg:col-start-2 lg:row-start-3 lg:mt-5 xl:text-6xl">
                        {project.name}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:col-start-2 lg:row-start-4 lg:mt-5">
                        {project.description}
                      </p>
                      {["Nexora", "Verity", "Orion", "Syntrix", "RAGForge", "Sentinel", "AgentForge", "ModelOpsForge", "fargo-solve", "UrduLLM-Lab", "Bank Management System"].includes(project.name) && (
                        <motion.div
                          className="group/art relative mt-8 aspect-[16/9] overflow-hidden border border-red-500/20 bg-[#090607] lg:col-start-1 lg:row-start-2 lg:row-span-3 lg:mt-0"
                          initial={false}
                          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Image
                            src={project.name === "Bank Management System" ? "/projects/bank-management-system.png" : project.name === "UrduLLM-Lab" ? "/projects/urdullm-lab.png" : project.name === "fargo-solve" ? "/projects/fargo-solve.png" : project.name === "ModelOpsForge" ? "/projects/modelopsforge.png" : project.name === "AgentForge" ? "/projects/agentforge.png" : project.name === "Sentinel" ? "/projects/sentinel.png" : project.name === "RAGForge" ? "/projects/ragforge.png" : project.name === "Syntrix" ? "/projects/syntrix.png" : project.name === "Orion" ? "/projects/orion.png" : project.name === "Verity" ? "/projects/verity.png" : "/projects/nexora.png"}
                            alt={project.name === "Bank Management System" ? "Bank Management System secure account management and transaction processing artwork" : project.name === "UrduLLM-Lab" ? "UrduLLM-Lab Urdu language modeling and multilingual AI research artwork" : project.name === "fargo-solve" ? "Fargo Solve AI automation and connected business workflows artwork" : project.name === "ModelOpsForge" ? "ModelOpsForge industrial machine learning operations infrastructure artwork" : project.name === "AgentForge" ? "AgentForge humanoid robotics and AI agent orchestration artwork" : project.name === "Sentinel" ? "Sentinel AI security and adversarial evaluation artwork" : project.name === "RAGForge" ? "RAGForge retrieval-augmented generation artwork" : project.name === "Syntrix" ? "Syntrix multimodal machine learning artwork" : project.name === "Orion" ? "Orion MCP agent orchestration artwork" : project.name === "Verity" ? "Verity AI evaluation and regression testing artwork" : "Nexora AI inference infrastructure artwork"}
                            width={1600}
                            height={900}
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover/art:scale-[1.035]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />
                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6">
                            <div>
                              <div className="text-[8px] tracking-[0.22em] text-red-400">{project.name === "Bank Management System" ? "BANK MANAGEMENT / FINANCIAL SYSTEMS" : project.name === "UrduLLM-Lab" ? "URDULLM-LAB / LANGUAGE AI" : project.name === "fargo-solve" ? "FARGO SOLVE / AI AUTOMATION" : project.name === "ModelOpsForge" ? "MODELOPSFORGE / PRODUCTION ML" : project.name === "AgentForge" ? "AGENTFORGE / AGENT ORCHESTRATION" : project.name === "Sentinel" ? "SENTINEL / AI SECURITY" : project.name === "RAGForge" ? "RAGFORGE / RETRIEVAL INTELLIGENCE" : project.name === "Syntrix" ? "SYNTRIX / MULTIMODAL ML" : project.name === "Orion" ? "ORION / MCP ORCHESTRATION" : project.name === "Verity" ? "VERITY / AI EVALUATION" : "NEXORA / INFERENCE INFRASTRUCTURE"}</div>
                              <div className="mt-2 text-lg font-medium tracking-tight text-white sm:text-2xl">{project.name === "Bank Management System" ? "Secure accounts. Precise transactions." : project.name === "UrduLLM-Lab" ? "Urdu language. Intelligent adaptation." : project.name === "fargo-solve" ? "Connected workflows. Practical automation." : project.name === "ModelOpsForge" ? "Reproducible models. Reliable production." : project.name === "AgentForge" ? "Intelligent agents. Coordinated execution." : project.name === "Sentinel" ? "Adversarial testing. Defensible AI." : project.name === "RAGForge" ? "Relevant evidence. Grounded responses." : project.name === "Syntrix" ? "Multimodal intelligence. Efficient adaptation." : project.name === "Orion" ? "Intelligent agents. Connected tools." : project.name === "Verity" ? "Evaluate AI. Detect regressions." : "Reliable AI, routed for production."}</div>
                            </div>
                            <span className="hidden border border-white/20 bg-black/40 px-3 py-2 text-[8px] tracking-[0.18em] text-white/90 sm:inline-block">{project.name === "Bank Management System" ? "SYSTEM 11" : project.name === "UrduLLM-Lab" ? "SYSTEM 10" : project.name === "fargo-solve" ? "SYSTEM 09" : project.name === "ModelOpsForge" ? "SYSTEM 08" : project.name === "AgentForge" ? "SYSTEM 07" : project.name === "Sentinel" ? "SYSTEM 06" : project.name === "RAGForge" ? "SYSTEM 05" : project.name === "Syntrix" ? "SYSTEM 04" : project.name === "Orion" ? "SYSTEM 03" : project.name === "Verity" ? "SYSTEM 02" : "SYSTEM 01"}</span>
                          </div>
                        </motion.div>
                      )}
                      <motion.div
                        aria-label={`${project.name} architecture visualization`}
                        className="relative mt-8 overflow-hidden border border-white/[0.08] bg-[#090708] p-5 sm:p-7 lg:col-span-2"
                        initial={false}
                        whileHover={reduceMotion ? undefined : { borderColor: "rgba(239,68,68,0.35)" }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                        <div className="relative flex items-center justify-between gap-3">
                          <div>
                            <div className="text-[8px] tracking-[0.22em] text-red-400">SYSTEM ARCHITECTURE</div>
                            <div className="mt-2 text-xs tracking-[0.12em] text-white/90">{project.name}</div>
                          </div>
                          <div className="flex items-center gap-2 text-[8px] tracking-[0.16em] text-white/70">
                            <motion.span className="h-1.5 w-1.5 rounded-full bg-red-500" animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.4, repeat: Infinity }} />
                            LIVE ARCHITECTURE
                          </div>
                        </div>
                        <div className="relative mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                          {project.architecture.split(" → ").map((stage, stageIndex) => (
                            <motion.div
                              key={`${project.name}-${stageIndex}`}
                              initial={false}
                              animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
                              transition={{ duration: 3 + (stageIndex % 3) * 0.6, repeat: Infinity, ease: "easeInOut", delay: stageIndex * 0.14 }}
                              className="relative flex min-h-16 items-center gap-3 overflow-hidden border border-white/[0.09] bg-black/50 px-3 py-3"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-red-500/25 text-[9px] text-red-400">{String(stageIndex + 1).padStart(2, "0")}</span>
                              <span className="text-[9px] leading-4 tracking-[0.08em] text-white/85">{stage.trim()}</span>
                              <motion.span className="absolute bottom-0 left-0 h-px bg-red-500/70" animate={reduceMotion ? undefined : { width: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: stageIndex * 0.2 }} />
                            </motion.div>
                          ))}
                        </div>
                        <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                          <span className="text-[8px] tracking-[0.17em] text-white/65">{project.category}</span>
                          <span className="text-[8px] tracking-[0.17em] text-red-400/80">BUILD / TEST / VERIFY</span>
                        </div>
                      </motion.div>

                      <div className="mt-8 flex w-full items-center justify-center gap-4 border-t border-white/10 pt-6 text-center text-sm font-semibold tracking-[0.24em] text-white/85 transition-all duration-300 group-hover:border-white/25 group-hover:text-white lg:col-span-2 sm:text-base">
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
                          → →
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
                              <span className="text-[8px] tracking-[0.22em] text-white/75">
                                INTERACTIVE SYSTEM VIEW
                              </span>

                              <span className="text-[8px] tracking-[0.2em] text-white/75">
                                {project.number} / 11
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
                                          className="relative z-10 border border-white/[0.1] bg-[#050505] px-3 py-2 text-[8px] tracking-[0.12em] text-white/75 transition-colors hover:border-white/25 hover:text-white/90"
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
                                            className="text-white/65"
                                          >
                                            → →
                                          </motion.span>
                                        )}
                                      </div>
                                    )
                                  )}
                              </div>
                            </div>

                            {["Nexora", "Verity", "Orion", "Syntrix", "RAGForge", "Sentinel", "AgentForge", "ModelOpsForge", "fargo-solve", "UrduLLM-Lab", "Bank Management System"].includes(project.name) && (
                              <motion.section
                                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                aria-label="Nexora inference architecture visualization"
                                className="relative mt-8 overflow-hidden border border-red-500/20 bg-[#090607] p-4 sm:p-6"
                              >
                                <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                                <div className="relative flex items-center justify-between gap-3">
                                  <span className="text-[8px] tracking-[0.2em] text-red-400">NEXORA / INFERENCE PATH</span>
                                  <span className="flex items-center gap-2 text-[8px] tracking-[0.14em] text-white/70">
                                    <motion.span animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    REQUEST FLOW
                                  </span>
                                </div>
                                <div className="relative mt-7 grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-3">
                                  {[
                                    { id: "01", title: "CLIENT", detail: "Chat request" },
                                    { id: "02", title: "GATEWAY", detail: "Auth / Limits" },
                                    { id: "03", title: "ROUTER", detail: "Provider choice" },
                                    { id: "04", title: "INFERENCE", detail: "Model execution" },
                                    { id: "05", title: "RESPONSE", detail: "Stream to client" },
                                  ].map((node, nodeIndex) => (
                                    <div key={node.id} className="relative flex items-center gap-3 border border-white/[0.09] bg-[#080708]/95 p-3 sm:min-h-[100px] sm:flex-col sm:items-start sm:justify-between sm:gap-4">
                                      <span className="text-[8px] tracking-[0.15em] text-red-400/80">{node.id}</span>
                                      <div className="min-w-0 flex-1 sm:flex-none">
                                        <div className="text-[9px] font-medium tracking-[0.12em] text-white/95">{node.title}</div>
                                        <div className="mt-1 text-[10px] text-white/70">{node.detail}</div>
                                      </div>
                                      {nodeIndex < 4 && <motion.span aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25] }} transition={{ duration: 1.6, delay: nodeIndex * 0.2, repeat: Infinity }} className="ml-auto text-sm text-red-500 sm:hidden">→ →</motion.span>}
                                      {nodeIndex < 4 && <motion.span aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2], x: [0, 3, 0] }} transition={{ duration: 1.6, delay: nodeIndex * 0.2, repeat: Infinity }} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-red-500 sm:block">→</motion.span>}
                                    </div>
                                  ))}
                                </div>
                                <div className="relative mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                                  {[
                                    { label: "RETRY BUDGETS", value: "Bounded attempts" },
                                    { label: "CIRCUIT BREAKER", value: "Failure isolation" },
                                    { label: "STREAMING", value: "Incremental output" },
                                  ].map((item, itemIndex) => (
                                    <div key={item.label} className="flex items-center gap-3 border border-white/[0.07] bg-white/[0.015] px-3 py-3">
                                      <motion.span animate={reduceMotion ? undefined : { scale: [1, 1.25, 1] }} transition={{ duration: 2, delay: itemIndex * 0.35, repeat: Infinity }} className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                                      <div>
                                        <div className="text-[8px] tracking-[0.13em] text-white/85">{item.label}</div>
                                        <div className="mt-1 text-[9px] text-white/65">{item.value}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="relative mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] pt-4 text-[8px] tracking-[0.15em] text-white/65">
                                  <span>FASTAPI / PROVIDER ABSTRACTION</span>
                                  <span>METRICS / REQUEST IDs</span>
                                </div>
                              </motion.section>
                            )}
                            <div className="mt-8 border-t border-white/[0.06] pt-6">
                              <div className="text-[8px] tracking-[0.2em] text-white/75">
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
                                      className="border border-white/[0.07] px-2.5 py-1.5 text-[9px] text-white/75 transition-colors hover:border-white/20 hover:text-white/85"
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
                                className="group border border-white/15 px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                              >
                                VIEW SOURCE
                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  → →
                                </span>
                              </a>

                              <button
                                type="button"
                                onClick={nextProject}
                                className="group border border-white/[0.07] px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
                              >
                                NEXT SYSTEM
                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  → →
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedProject(null)
                                }
                                className="px-4 py-2.5 text-[9px] tracking-[0.16em] text-white/65 transition-colors hover:text-white"
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
            <div className="mt-10 text-[9px] tracking-[0.2em] text-white/75">
              CLICK ANY SYSTEM TO INSPECT THE ARCHITECTURE
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGINEERING PATH */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-red-500/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="04">ENGINEERING PATH</SectionLabel>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <Reveal delay={0.08}>
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                One engineering
                <br />
                <span className="text-white/70">progression.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="border-l border-red-500/40 pl-5 lg:mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
                  </span>
                  <span className="text-[10px] tracking-[0.22em] text-white/75">
                    ENGINEERING SYSTEM MAP
                  </span>
                </div>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                  From software fundamentals to AI systems designed for testing,
                  reliability, and production deployment.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px flex-1 overflow-hidden bg-white/10">
                    <div className="h-full w-2/3 origin-left animate-pulse bg-red-500/80 motion-reduce:animate-none" />
                  </div>
                  <span className="font-mono text-[10px] text-white/60">10 STAGES</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-16 sm:mt-20">
            <div className="pointer-events-none absolute bottom-6 left-[19px] top-6 hidden w-px bg-gradient-to-b from-red-500/70 via-white/15 to-red-500/40 sm:block" />

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                <Reveal key={item} delay={index * 0.035}>
                  <div
                    className={`group relative flex min-h-[112px] items-center gap-5 overflow-hidden border p-5 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.035] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[126px] sm:p-6 ${
                      index === items.length - 1
                        ? "border-red-500/30 bg-red-500/[0.06]"
                        : "border-white/[0.09] bg-white/[0.015]"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-red-400 transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 font-mono text-xs text-white/70 transition-colors duration-300 group-hover:border-red-400/60 group-hover:text-red-300">
                      <span
                        className={`absolute -inset-px rounded-full border border-red-400/30 motion-reduce:animate-none ${
                          index === items.length - 1 ? "animate-pulse" : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{ animationDelay: `${index * 120}ms` }}
                      />
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 font-mono text-[9px] tracking-[0.2em] text-white/50">
                        STAGE {String(index + 1).padStart(2, "0")}
                      </div>
                      <div
                        className={`text-xs font-medium leading-6 tracking-[0.07em] transition-colors duration-300 group-hover:text-white sm:text-sm ${
                          index === items.length - 1 ? "text-white" : "text-white/75"
                        }`}
                      >
                        {item}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300"
                    >
                      → →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-white/70">
                My projects represent different engineering layers rather than
                repeated versions of the same AI application.
              </p>
              <span className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-white/60">
                SOFTWARE → → INTELLIGENCE → → PRODUCTION
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ARCHITECTURE */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-red-500/[0.04] blur-[130px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="05">SYSTEM ARCHITECTURE</SectionLabel>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
            <Reveal delay={0.08}>
              <h2 className="max-w-5xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Models are components.
                <br />
                <span className="text-white/70">Systems are the product.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border-l border-red-500/40 pl-5 lg:mb-3">
                <div className="font-mono text-[10px] tracking-[0.2em] text-red-300">
                  SYSTEM DESIGN / 01
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  A production-oriented view of the layers that connect user
                  requests to AI capabilities, tools, data, and operational
                  visibility.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="mt-16 border border-white/10 bg-white/[0.015] p-4 sm:p-6 lg:mt-20 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/50 motion-reduce:animate-none" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-red-400" />
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-white/75">
                    REFERENCE ARCHITECTURE
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.12em] text-white/60">
                  REQUEST → → PROCESSING → → VISIBILITY
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                {[
                  {
                    number: "01",
                    label: "CLIENT",
                    description: "User interface and incoming requests",
                    tag: "INPUT",
                  },
                  {
                    number: "02",
                    label: "API",
                    description: "Request handling and service boundaries",
                    tag: "INTERFACE",
                  },
                  {
                    number: "03",
                    label: "ROUTING / LOGIC / SECURITY",
                    description: "Control flow, access rules, and validation",
                    tag: "CONTROL PLANE",
                  },
                  {
                    number: "04",
                    label: "AI / ML CORE",
                    description: "Models, inference, and intelligent processing",
                    tag: "INTELLIGENCE",
                  },
                  {
                    number: "05",
                    label: "DATABASE / TOOLS / MEMORY",
                    description: "Retrieval, external actions, and state",
                    tag: "CONTEXT",
                  },
                  {
                    number: "06",
                    label: "OBSERVABILITY",
                    description: "Logs, metrics, traces, and system health",
                    tag: "OPERATIONS",
                  },
                ].map((layer, index) => (
                  <motion.div
                    key={layer.number}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`group relative min-h-[178px] overflow-hidden border p-5 transition-colors duration-300 motion-reduce:transform-none motion-reduce:transition-none sm:p-6 ${
                      index === 3
                        ? "border-red-500/30 bg-red-500/[0.045]"
                        : "border-white/[0.09] bg-black/20 hover:border-white/20"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-red-400 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-white/60">
                        LAYER / {layer.number}
                      </span>
                      <span className="font-mono text-[8px] tracking-[0.14em] text-white/60">
                        {layer.tag}
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(248,113,113,0.6)] ${
                          index === 3
                            ? "bg-red-400"
                            : "bg-white/40 group-hover:bg-red-300"
                        }`}
                      />
                      <h3 className="text-xs font-medium leading-5 tracking-[0.06em] text-white/85 transition-colors duration-300 group-hover:text-white sm:text-sm">
                        {layer.label}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-xs text-xs leading-5 text-white/60">
                      {layer.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <div className="h-px flex-1 bg-white/10">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.7,
                            delay: reduceMotion ? 0 : index * 0.08,
                          }}
                          className="h-px origin-left bg-red-400/70"
                        />
                      </div>
                      <span className="font-mono text-[8px] text-white/50">
                        {String(index + 1).padStart(2, "0")} / 06
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-red-400/70" />
                  <span className="text-[9px] tracking-[0.18em] text-white/70">
                    CROSS-LAYER ENGINEERING
                  </span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.12em] text-white/60">
                  MODULAR / TESTABLE / OBSERVABLE
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* EVIDENCE */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-red-500/[0.04] blur-[130px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="06">ENGINEERING EVIDENCE</SectionLabel>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <Reveal delay={0.08}>
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Built. Tested.
                <br />
                <span className="text-white/70">Evaluated.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-sm border-l border-red-500/40 pl-5 text-sm leading-6 text-white/70 lg:mb-3">
                Engineering is more than implementation. Systems need
                measurable behavior, versioned workflows, observable operation,
                and deliberate failure handling.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-20 lg:grid-cols-3">
            {evidence.map(([number, title, description], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full min-h-[245px] flex-col overflow-hidden border border-white/[0.09] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-red-500/35 hover:bg-white/[0.03] motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-red-400 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/60">
                      EVIDENCE / {number}
                    </span>
                    <span className="relative flex h-8 w-8 items-center justify-center border border-white/15 transition-colors duration-300 group-hover:border-red-400/50">
                      <span className="absolute h-1.5 w-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-red-400 group-hover:shadow-[0_0_10px_rgba(248,113,113,0.7)]" />
                      <span className="absolute inset-0 origin-center scale-50 rounded-full border border-red-400/40 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none" />
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium tracking-[-0.035em] text-white/90 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-white/70">
                    {description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="h-px flex-1 overflow-hidden bg-white/10">
                      <div
                        className="h-full origin-left scale-x-0 bg-red-400/80 transition-transform duration-700 group-hover:scale-x-100 motion-reduce:transition-none"
                      />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/50">
                      ENGINEERING / {number}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] tracking-[0.18em] text-white/60">
                IMPLEMENTATION IS ONLY THE BEGINNING
              </span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-white/70">
                TEST → → MEASURE → → IMPROVE
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      {/* PRINCIPLES */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-red-500/[0.035] blur-[140px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="07">PRINCIPLES</SectionLabel>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-end">
            <Reveal delay={0.08}>
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                How I
                <br />
                <span className="text-white/70">engineer.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mb-2 max-w-sm border-l border-red-500/40 pl-5 lg:mb-3">
                <p className="text-sm leading-6 text-white/70">
                  A disciplined approach to building AI systems that are useful,
                  measurable, resilient, and supported by evidence.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-red-400/70" />
                  <span className="font-mono text-[9px] tracking-[0.18em] text-white/60">
                    ENGINEERING PHILOSOPHY
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-2">
            {principles.map(([number, title, description], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden border p-6 transition-colors duration-300 motion-reduce:transition-none sm:p-8 ${
                    index === 0
                      ? "border-red-500/30 bg-red-500/[0.035] lg:row-span-2 lg:min-h-[460px] lg:justify-between"
                      : "border-white/[0.09] bg-white/[0.015] hover:border-red-500/30 hover:bg-white/[0.025]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-red-400/80 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/60">
                      PRINCIPLE / {number}
                    </span>
                    <span className={`font-mono text-xs ${index === 0 ? "text-red-300/80" : "text-white/35"}`}>
                      {index === 0 ? "FOUNDATION" : "0" + (index + 1)}
                    </span>
                  </div>

                  <div className={index === 0 ? "mt-16 lg:mt-24" : "mt-12"}>
                    <h3 className={`font-medium tracking-[-0.045em] text-white/90 transition-colors duration-300 group-hover:text-white ${
                      index === 0 ? "text-3xl sm:text-4xl lg:text-5xl" : "text-xl sm:text-2xl"
                    }`}>
                      {title}
                    </h3>

                    <p className={`mt-4 max-w-xl leading-7 text-white/70 ${
                      index === 0 ? "text-base sm:text-lg" : "text-sm"
                    }`}>
                      {description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="h-px flex-1 overflow-hidden bg-white/10">
                      <div className="h-full origin-left scale-x-0 bg-red-400/80 transition-transform duration-700 group-hover:scale-x-100 motion-reduce:transition-none" />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.14em] text-white/50">
                      {index === 0 ? "PROBLEM → PURPOSE" : "PRINCIPLE / " + number}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] tracking-[0.18em] text-white/60">
                NO CLAIM WITHOUT EVIDENCE
              </span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-white/70">
                PURPOSE → MEASUREMENT → RELIABILITY
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      {/* STACK */}
      <section
        id="stack"
        className="relative scroll-mt-20 overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/[0.035] blur-[140px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="08">TECHNOLOGY STACK</SectionLabel>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <Reveal delay={0.08}>
              <h2 className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Engineering
                <br />
                <span className="text-white/70">stack.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mb-2 max-w-sm border-l border-red-500/40 pl-5 lg:mb-3">
                <p className="text-sm leading-6 text-white/70">
                  Tools and technologies used across AI development,
                  backend engineering, model operations, and local inference.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-red-400/70" />
                  <span className="font-mono text-[9px] tracking-[0.17em] text-white/60">
                    TECHNICAL TOOLKIT
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {stackGroups.map(([group, items], index) => (
              <Reveal key={group} delay={index * 0.045}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full min-h-[210px] flex-col overflow-hidden border border-white/[0.09] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-red-500/30 hover:bg-white/[0.025] motion-reduce:transition-none sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-red-400/80 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[10px] font-medium tracking-[0.17em] text-white/80 transition-colors duration-300 group-hover:text-white">
                      {group}
                    </h3>
                    <span className="font-mono text-[10px] text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-1 flex-wrap content-start gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="border border-white/[0.09] bg-white/[0.015] px-3 py-2 text-[10px] leading-4 text-white/70 transition-colors duration-300 hover:border-red-400/40 hover:bg-red-400/[0.04] hover:text-white motion-reduce:transition-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="h-px flex-1 overflow-hidden bg-white/10">
                      <div className="h-full origin-left scale-x-0 bg-red-400/70 transition-transform duration-700 group-hover:scale-x-100 motion-reduce:transition-none" />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.12em] text-white/45">
                      {String(items.length).padStart(2, "0")} TOOLS
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] tracking-[0.17em] text-white/60">
                SELECTED ENGINEERING TECHNOLOGIES
              </span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-white/70">
                BUILD / INTEGRATE / OPERATE
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-20 overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <SectionLabel number="09">EXPERIENCE</SectionLabel>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3">
            {experience.map(
              (
                [number, title, company, description, status],
                index
              ) => (
                <Reveal key={company} delay={index * 0.08}>
                  <article className="group relative flex h-full min-h-[290px] flex-col overflow-hidden border border-white/[0.09] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-red-500/40 hover:bg-white/[0.035] sm:p-8">
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-px w-0 bg-red-500 transition-all duration-500 group-hover:w-full"
                    />

                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs tracking-[0.2em] text-red-400">
                        {number.padStart(2, "0")}
                      </span>
                      <span className="border border-white/[0.12] px-2.5 py-1 text-[9px] tracking-[0.13em] text-white/70">
                        {status}
                      </span>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-medium tracking-[-0.035em] text-white sm:text-2xl">
                        {title}
                      </h3>
                      <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.17em] text-white/55">
                        {company}
                      </p>
                    </div>

                    <div className="my-6 h-px w-full bg-white/[0.09]" />

                    <p className="text-sm leading-7 text-white/75">
                      {description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-8">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-red-500/80"
                      />
                      <span className="text-[9px] tracking-[0.16em] text-white/45">
                        EXPERIENCE RECORD {number.padStart(2, "0")}
                      </span>
                    </div>
                  </article>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-20 overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel number="10">ABOUT</SectionLabel>

              <div className="mt-10 hidden h-px w-24 bg-red-500/80 lg:block" />

              <p className="mt-6 max-w-xs text-[10px] uppercase leading-6 tracking-[0.18em] text-white/50">
                SOFTWARE ENGINEERING
                <span className="mx-2 text-red-400">/</span>
                ARTIFICIAL INTELLIGENCE
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                Engineering at the intersection of{" "}
                <span className="text-white/45">software</span> and{" "}
                <span className="text-red-400">intelligence.</span>
              </h2>

              <div className="mt-10 h-px w-full bg-white/[0.12] sm:mt-14" />

              <div className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 sm:gap-y-9">
                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  I&apos;m Syed Ashar Raza, an AI Engineer focused on
                  building intelligent software systems.
                </p>

                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  My foundation is software engineering: Python,
                  APIs, databases, testing, version control, and
                  system architecture.
                </p>

                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  From there, I moved into machine learning and
                  modern generative AI, working with language
                  models, retrieval systems, AI agents, evaluation,
                  automation, and production-oriented
                  infrastructure.
                </p>

                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  My focus is building AI systems that go beyond
                  model demonstrations — systems that can be
                  evaluated, served, monitored, secured, and
                  improved.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-red-500/80 py-2 pl-5 sm:mt-16 sm:pl-7">
                <p className="text-xl font-medium leading-snug tracking-[-0.035em] text-white sm:text-2xl lg:text-3xl">
                  I build where AI meets software engineering.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* PROFILE */}
      <section
        id="profile"
        className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-500/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionLabel number="11">PROFESSIONAL PROFILE</SectionLabel>
              <span className="text-[9px] tracking-[0.2em] text-white/50">
                SOFTWARE × INTELLIGENCE
              </span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_300px] lg:items-end xl:grid-cols-[1fr_360px] xl:gap-20">
            <Reveal delay={0.08}>
              <div>
                <p className="mb-5 text-[10px] tracking-[0.24em] text-red-400">
                  ENGINEERING FOCUS / 2026
                </p>

                <h2 className="max-w-5xl text-6xl font-medium leading-[0.92] tracking-[-0.075em] sm:text-8xl lg:text-[8.5rem] xl:text-[10rem]">
                  AI
                  <br />
                  <span className="text-white/45">ENGINEER</span>
                  <span className="text-red-400">.</span>
                </h2>

                <div className="mt-10 h-px max-w-4xl bg-white/[0.14]" />

                <div className="mt-7 flex max-w-4xl flex-wrap gap-x-5 gap-y-4">
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
                      className="border-l border-red-500/70 py-1 pl-3 text-[9px] tracking-[0.13em] text-white/65 transition-colors duration-300 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-white/[0.12] bg-white/[0.02] p-6 sm:p-8 lg:p-7 xl:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="text-[10px] tracking-[0.2em] text-white/80">
                    REMOTE
                  </span>
                </div>

                <div className="mt-7 border-t border-white/[0.1] pt-6">
                  <p className="text-[9px] tracking-[0.18em] text-white/45">
                    AVAILABILITY
                  </p>
                  <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-white sm:text-2xl">
                    Open to opportunities.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    AI engineering, applied machine learning, and production-oriented AI systems.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="/Syed_Ashar_Raza_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between gap-4 border border-white/20 bg-white px-4 py-3 text-[10px] tracking-[0.15em] text-black transition-colors duration-300 hover:border-red-400 hover:bg-red-400"
                  >
                    VIEW RESUME
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/syed-ashar-raza"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between gap-4 border border-white/[0.12] px-4 py-3 text-[10px] tracking-[0.15em] text-white/75 transition-colors duration-300 hover:border-white/40 hover:text-white"
                  >
                    LINKEDIN
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <p className="mt-6 text-[9px] leading-5 tracking-[0.1em] text-white/40">
                  CODE, SYSTEMS, AND ENGINEERING EVIDENCE.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
{/* SOURCE */}
      <section
        id="source"
        className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionLabel number="12">SOURCE</SectionLabel>
              <span className="text-[9px] tracking-[0.2em] text-white/45">
                OPEN CODE / TECHNICAL EVIDENCE
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-8xl xl:text-9xl">
                The code is
                <br />
                <span className="text-white/45">the evidence.</span>
              </h2>

              <div className="max-w-lg border-l border-red-500/80 py-2 pl-5 sm:pl-7">
                <p className="text-sm leading-7 text-white/70 sm:text-base">
                  My GitHub contains the systems, experiments,
                  documentation, and engineering work behind this
                  portfolio.
                </p>
                <a
                  href="https://github.com/syed-ashar-raza"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-[10px] tracking-[0.16em] text-white/80 transition-colors hover:text-red-400"
                >
                  EXPLORE GITHUB
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px border border-white/[0.1] bg-white/[0.1] sm:mt-20 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.04}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full min-h-64 flex-col overflow-hidden bg-[#080808] p-6 transition-colors duration-300 hover:bg-[#101010] sm:min-h-72 sm:p-8 lg:p-10"
                >
                  <div className="absolute left-0 top-0 h-px w-0 bg-red-400 transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] tracking-[0.18em] text-white/65">
                      {project.category}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center border border-white/[0.12] text-base text-white/60 transition-all duration-300 group-hover:border-red-400/60 group-hover:text-red-400">
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.045em] text-white transition-colors duration-300 group-hover:text-red-300 sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-9">
                    <span className="text-[9px] tracking-[0.16em] text-white/55 transition-colors group-hover:text-white/85">
                      VIEW SOURCE
                    </span>
                    <span className="h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-red-400" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[9px] tracking-[0.16em] text-white/40">
            <span>SELECTED ENGINEERING PROJECTS</span>
            <span>BUILD / TEST / DOCUMENT / VERIFY</span>
          </div>
        </div>
      </section>
{/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden border-b border-white/[0.08] bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-red-500/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionLabel number="13">CONTACT</SectionLabel>
              <span className="text-[9px] tracking-[0.2em] text-white/45">
                OPEN TO CONVERSATION
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-14 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:mt-20 lg:text-9xl">
              Let&apos;s build
              <br />
              <span className="text-white/45">something</span>{" "}
              <span className="text-red-400">intelligent.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/[0.12] pt-6 sm:flex-row sm:items-end sm:gap-10">
              <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Open to conversations around AI engineering,
                machine learning, LLM systems, AI infrastructure,
                automation, and production-oriented software.
              </p>
              <span className="shrink-0 text-[9px] tracking-[0.16em] text-white/45">
                EMAIL / CONNECT / COLLABORATE
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:mt-16 md:grid-cols-3">
            <Reveal>
              <a
                href="mailto:syedasharraza512725@gmail.com"
                className="group relative flex h-full min-h-44 flex-col justify-between overflow-hidden border border-white/[0.12] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-red-400/50 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-px w-0 bg-red-400 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-white/50">
                    01 / EMAIL
                  </span>
                  <span aria-hidden="true" className="text-lg text-white/55 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400">
                    ↗
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-medium tracking-[-0.04em] text-white">
                    Start a conversation.
                  </h3>
                  <p className="mt-3 break-words text-sm leading-6 text-white/60 transition-colors group-hover:text-white/85">
                    syedasharraza512725@gmail.com
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href="https://www.linkedin.com/in/syed-ashar-raza"
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full min-h-44 flex-col justify-between overflow-hidden border border-white/[0.12] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-red-400/50 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-px w-0 bg-red-400 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-white/50">
                    02 / LINKEDIN
                  </span>
                  <span aria-hidden="true" className="text-lg text-white/55 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400">
                    ↗
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-medium tracking-[-0.04em] text-white">
                    Professional network.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60 transition-colors group-hover:text-white/85">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="https://github.com/syed-ashar-raza"
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full min-h-44 flex-col justify-between overflow-hidden border border-white/[0.12] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-red-400/50 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-px w-0 bg-red-400 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-white/50">
                    03 / GITHUB
                  </span>
                  <span aria-hidden="true" className="text-lg text-white/55 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400">
                    ↗
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-medium tracking-[-0.04em] text-white">
                    Explore the code.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60 transition-colors group-hover:text-white/85">
                    syed-ashar-raza
                  </p>
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
              <span className="text-white/65">
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

                <div className="mt-2 text-[9px] tracking-[0.2em] text-white/65">
                  AI ENGINEER
                </div>
              </div>

              <div className="text-[9px] tracking-[0.18em] text-white/65">
                LLMs / RAG / AGENTS / ML / MLOps / AUTOMATION
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 text-[8px] tracking-[0.18em] text-white/75 sm:flex-row">
          <div>
            SYED ASHAR RAZA / AI ENGINEER
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/80"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/syed-ashar-raza"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/80"
            >
              LINKEDIN
            </a>

            <a
              href="/Syed_Ashar_Raza_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/80"
            >
              RESUME
            </a>

            <a
              href="mailto:syedasharraza512725@gmail.com"
              className="transition-colors hover:text-white/80"
            >
              EMAIL
            </a>
          </div>

          <div>
            © 2026 SYED ASHAR RAZA · BUILT WITH NEXT.JS
          </div>
        </div>
      </footer>
    </main>
  );
}
