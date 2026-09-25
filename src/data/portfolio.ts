/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit everything here.
 * ─────────────────────────────────────────────────────────────
 *  This is the single source of truth for the projects shown on
 *  the site. No database required — edit, save, redeploy.
 *
 *  To add a project: copy a block below, change the values.
 *  Order on the page = order in this array.
 *
 *  thumb: which visual shows in the card image area.
 *    "notification-broker" -> animated broker diagram
 *    "omniroute"           -> animated gateway diagram
 *    "meta-clash"          -> rotating screenshot carousel
 *    undefined             -> default icon
 */

export type ProjectThumb = "notification-broker" | "omniroute" | "meta-clash";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  bullets: string[] | null;
  image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
  thumb?: ProjectThumb;
};

export const projects: Project[] = [
  {
    id: "notification-broker",
    title: "High-Throughput Notification Broker",
    description:
      "A decoupled 3-tier microservice notification engine in Go, built to survive worker crashes and network drops without losing a single message.",
    tech_stack: ["Go", "gRPC", "Redis", "AWS", "Prometheus", "Jaeger"],
    bullets: [
      "Sustained 9,200+ requests/sec (552k in 60s) with 13.8ms average latency during intensive stress testing.",
      "Engineered a zero-loss worker pool with 200 concurrent goroutines using Redis BLMOVE for atomic queue draining.",
      "Implemented exponential backoff, jitter, and a Dead Letter Queue (DLQ) archiver that drains to AWS S3.",
      "Stress-tested resilience via intentional TCP socket exhaustion to verify 100% message delivery.",
    ],
    image_url: null,
    live_url: null,
    github_url: "https://github.com/nikhilsaxena04/notification-service",
    featured: true,
    thumb: "notification-broker",
  },
  {
    id: "omniroute",
    title: "OmniRoute – Multi-Provider LLM Gateway",
    description:
      "A resilient AI gateway that dynamically load-balances traffic across OpenAI, Anthropic, and Gemini to decouple clients from single-provider outages.",
    tech_stack: ["Go", "Python", "pgvector", "Prometheus", "Langfuse", "Docker"],
    bullets: [
      "Architected a multi-provider LLM gateway in Go, exposing a unified OpenAI-compatible API with dynamic routing, graceful model fallback, and real-time token cost tracking.",
      "Implemented a Semantic Cache using OpenAI Embeddings and pgvector for cosine similarity lookups, slashing P95 latency by ~80% and reducing API spend.",
      "Built zero-dependency resilience primitives for AI workloads: a sliding-window circuit breaker (Closed → Open → HalfOpen) and a mutex-guarded token bucket rate limiter.",
      "Engineered an automated LLM evaluation engine executing concurrent fan-out runs to measure Time To First Token (TTFT), cost per 1K tokens, and response quality.",
    ],
    image_url: null,
    live_url: null,
    github_url: "https://github.com/nikhilsaxena04/omniroute",
    featured: true,
    thumb: "omniroute",
  },
  {
    id: "meta-clash",
    title: "Meta Clash",
    description:
      "A server-authoritative real-time multiplayer game back-end managing state lifecycles and deterministic combat.",
    tech_stack: ["Go", "Next.js", "PostgreSQL", "WebSockets", "Docker"],
    bullets: [
      "Designed a hexagonal architecture with a 3-state finite state machine (FSM) for 4 concurrent players.",
      "Built a WebSocket hub using goroutines, channels, and sync.RWMutex for thread-safe state broadcasting.",
      "Implemented a 54s ping/pong heartbeat to ensure connection stability and detect drops.",
    ],
    image_url: null,
    live_url: "https://meta-clash-orcin.vercel.app/",
    github_url: "https://github.com/nikhilsaxena04",
    featured: false,
    thumb: "meta-clash",
  },
];

/** Screenshots cycled by the Meta Clash card (files live in /public). */
export const metaClashImages = [
  "/metaclash-1.jpg",
  "/metaclash-2.jpg",
  "/metaclash-3.jpg",
  "/metaclash-4.jpg",
];

/** Contact + social links used across the page. */
export const contact = {
  email: "myemailnikhilsaxena@gmail.com",
  github: "https://github.com/nikhilsaxena04",
  linkedin: "https://linkedin.com/in/nikhil-saxena-codes",
  resume: "/resume.pdf",
};
