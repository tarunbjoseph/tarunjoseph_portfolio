/**
 * TARUN JOSEPH - EXECUTIVE PORTFOLIO DATA STORE
 * Single source of truth with official institutional assets and interactive simulator data.
 */

var PORTFOLIO_DATA = {
  personal: {
    name: "Tarun Joseph",
    title: "AI Engineer · Forward Deployed Engineering",
    tagline: "Building and deploying production-grade AI systems, multi-agent architectures, and fine-tuned language models. Spearheading multi-agent governance and causal reasoning platforms at the Vector Institute × SafeAlign AI, backed by graduate engineering at the University of Toronto (3.8/4 GPA) and large-scale ML systems ownership at Tata Consultancy Services.",
    location: "Toronto, Canada",
    statusBadge: "AI Engineer · Forward Deployed Engineering",
    email: "tarunb.joseph@mail.utoronto.ca",
    altEmail: "tarunbjoseph@gmail.com",
    phone: "+1 (437) 237-5615",
    linkedin: "https://www.linkedin.com/in/tarunjoseph25/",
    github: "https://github.com/tarunbjoseph",
    huggingface: "https://huggingface.co/TarunJoseph101",
    photo: "assets/images/tarun_executive.jpg",
    resumes: {
      latest: "assets/resumes/Tarun_Joseph_Resume_Fall26.pdf",
      cv: "assets/resumes/Tarun_Joseph_CV.pdf",
      industry: "assets/resumes/Tarun_Joseph_Resume_Fall26.pdf",
      academic: "assets/resumes/Tarun_Joseph_CV.pdf",
      dossier: "assets/resumes/Tarun_Joseph_Resume.pdf"
    }
  },

  // Institutional Provenance with Official Logos
  institutions: [
    {
      name: "Vector Institute × SafeAlign AI",
      logo: "assets/logos/vector_institute.png",
      role: "Machine Learning Associate & Program Delivery",
      focus: "Building security, governance & observability platforms for multi-agent systems, causal knowledge graphs, and SLM fine-tuning."
    },
    {
      name: "University of Toronto",
      logo: "assets/logos/university_of_toronto.svg",
      role: "Graduate Teaching Assistant & MEng Candidate",
      focus: "Teaching AI/ML Capstones (MIE429) & Big Data Analytics (MIE1628); 3.8/4 GPA with ELITE Emphasis."
    },
    {
      name: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      role: "Machine Learning Engineer",
      focus: "Deployed production RAG chatbots, support-ticket automation agents, and GenAI bootcamps across 600,000+ users."
    }
  ],

  // Interactive Systems Simulator with Real Parameters & Custom Queries
  simulatorScenarios: [
    {
      id: "rag",
      tabLabel: "Enterprise RAG Pipeline",
      systemName: "Multi-Tier Enterprise Coding & Knowledge Intelligence",
      client: "Tata Consultancy Services (600K+ Global Associates)",
      defaultLatency: 42,
      defaultTokensPerSec: 185,
      roi: "30% Escalation Reduction (600K+ Global Associates)",
      sampleQueries: [
        "How do we handle connection pool exhaustion in PostgreSQL under high concurrency?",
        "What are the mandatory compliance guidelines for storing user session tokens?",
        "Explain the enterprise caching strategy for microservice RPC endpoints."
      ],
      parameters: [
        { id: "similarityThreshold", label: "Cosine Similarity Threshold", min: 0.60, max: 0.95, step: 0.05, value: 0.80, unit: "" },
        { id: "topK", label: "Top-K Retrieved Chunks", min: 1, max: 10, step: 1, value: 4, unit: " chunks" },
        { id: "bm25Weight", label: "Hybrid Search BM25 Weight", min: 0.1, max: 0.9, step: 0.1, value: 0.3, unit: "" }
      ],
      stages: [
        {
          id: "ingest",
          name: "Corpus Chunking & Embedding",
          status: "Verified",
          latencyMs: "6.4 ms",
          tensorShape: "[batch, 512, 1536]",
          description: "Recursive semantic tokenization over 10,000+ enterprise repositories.",
          details: "Input text chunked into 512-token segments with 64-token overlap. Embedded into 1536-dimensional dense vectors using text-embedding-3."
        },
        {
          id: "hybrid",
          name: "Hybrid Vector + BM25 Search",
          status: "Optimized",
          latencyMs: "14.2 ms",
          tensorShape: "Top-K Chunks [k=4, sim≥0.80]",
          description: "Dual-index retrieval maximizing semantic recall and exact keyword precision.",
          details: "Runs parallel ANN HNSW index lookup alongside BM25 sparse inverted index, weighted via reciprocal rank fusion (RRF)."
        },
        {
          id: "guardrail",
          name: "Deterministic Policy Guardrails",
          status: "Strict",
          latencyMs: "3.1 ms",
          tensorShape: "Compliance Vector [Pass: 1.0]",
          description: "Pre-inference validation ensuring zero internal hallucination and PII masking.",
          details: "Contextual consistency check verified against enterprise compliance rubric. Hallucination probability: < 0.02%."
        },
        {
          id: "synthesis",
          name: "Streaming LLM Synthesis",
          status: "Live",
          latencyMs: "18.3 ms",
          tensorShape: "Token Stream @ ~185 tok/s",
          description: "Low-latency streaming response with dynamic source citations.",
          details: "Streams verified architectural guidance at ~185 tokens/second with direct source file line-number anchors."
        }
      ]
    },
    {
      id: "asl",
      tabLabel: "Real-Time ASL Vision Pipeline",
      systemName: "Deep Learning Fingerspelling & Gesture Translator",
      client: "University of Toronto (Assistive Tech Research)",
      defaultLatency: 38,
      defaultTokensPerSec: 32,
      roi: "Sub-45ms Latency at 30+ FPS (Real-Time Accessibility)",
      sampleQueries: [
        "Sign Gesture: T-A-R-U-N (Continuous Fingerspelling)",
        "Sign Gesture: H-E-L-L-O (Rapid Hand Transition)",
        "Sign Gesture: A-R-C-H-I-T-E-C-T (Complex Dynamic Sequence)"
      ],
      parameters: [
        { id: "fpsTarget", label: "Target Frame Rate", min: 24, max: 60, step: 6, value: 30, unit: " FPS" },
        { id: "confidenceThreshold", label: "Landmark Tracking Confidence", min: 0.70, max: 0.99, step: 0.05, value: 0.85, unit: "" },
        { id: "beamWidth", label: "Language Model Beam Width", min: 2, max: 8, step: 1, value: 4, unit: " beams" }
      ],
      stages: [
        {
          id: "video",
          name: "Webcam Ingestion & Preprocessing",
          status: "60 FPS",
          latencyMs: "4.2 ms",
          tensorShape: "[1, 3, 720, 1280] RGB",
          description: "Raw optical stream capture normalized across diverse ambient lighting conditions.",
          details: "Frame resolution standardized to 1280x720, converted to RGB tensor with adaptive histogram equalization."
        },
        {
          id: "landmarks",
          name: "3D Coordinate Extraction (MediaPipe)",
          status: "21 Points",
          latencyMs: "7.8 ms",
          tensorShape: "21 Keypoints × 3D [21, 3]",
          description: "Real-time extraction of 21 keypoints per hand in 3D Euclidean space.",
          details: "Tracks wrist, MCP, PIP, DIP, and tip coordinates (x, y, z) with sub-pixel precision at < 8ms inference."
        },
        {
          id: "sequence",
          name: "Spatial-Temporal Transformer",
          status: "Sub-45ms",
          latencyMs: "18.5 ms",
          tensorShape: "[1, 30, 63] Window Tensor",
          description: "Multi-head attention network modeling continuous spatial transitions over time.",
          details: "Sliding window of 30 frames analyzed with positional encoding, predicting character transition probabilities."
        },
        {
          id: "beam",
          name: "Language Model Beam Search",
          status: "Word Synthesis",
          latencyMs: "7.5 ms",
          tensorShape: "Beam Width = 4 Logits",
          description: "Vocabulary-constrained beam search producing grammatical words and audio speech.",
          details: "N-gram language model refines raw softmax logits into complete English words with audio speech synthesis."
        }
      ]
    },
    {
      id: "agent",
      tabLabel: "Llama 3 Autonomous Ticket Agent",
      systemName: "Multi-Step IT Diagnostic & Tool-Calling Loop",
      client: "Tata Consultancy Services (Innovation Lab)",
      defaultLatency: 4800,
      defaultTokensPerSec: 95,
      roi: "5+ Engineering Hours Saved / Developer / Week",
      sampleQueries: [
        "Alert: Database connection pool exhausted in auth-service container pod-3",
        "Bug: Memory leak detected in image ingestion microservice worker #4",
        "Incident: SSL certificate expired on staging internal gateway"
      ],
      parameters: [
        { id: "temperature", label: "Model Reasoning Temperature", min: 0.0, max: 0.7, step: 0.1, value: 0.1, unit: "" },
        { id: "maxToolCalls", label: "Max Autonomous Tool Iterations", min: 2, max: 8, step: 1, value: 4, unit: " calls" },
        { id: "confidenceCutoff", label: "Resolution Confidence Threshold", min: 0.75, max: 0.95, step: 0.05, value: 0.85, unit: "" }
      ],
      stages: [
        {
          id: "intake",
          name: "Incident Context & Log Parsing",
          status: "Event Hook",
          latencyMs: "120 ms",
          tensorShape: "JSON [Stack Trace, Pod ID]",
          description: "Ingests JIRA tickets, Slack alerts, and Kubernetes container stdout logs.",
          details: "Parses error stack traces, identifies affected service containers, and prioritizes urgency level."
        },
        {
          id: "reasoning",
          name: "Autonomous Tool Calling (Llama 3)",
          status: "Multi-Step",
          latencyMs: "2400 ms",
          tensorShape: "4 Tool Execution Dispatches",
          description: "Executes targeted diagnostic queries against telemetry APIs and codebases.",
          details: "Queries Datadog APM, inspects recent git commit diffs, and scans Confluence post-mortem runbooks."
        },
        {
          id: "diagnosis",
          name: "Root-Cause Synthesis",
          status: "Confidence: 94%",
          latencyMs: "1100 ms",
          tensorShape: "Confidence Logit: 0.94",
          description: "Isolates the root failure mechanism and evaluates potential side-effects.",
          details: "Identified unclosed connection pool in JWT validation handler. Formulates step-by-step remediation."
        },
        {
          id: "patch",
          name: "Automated Pull Request & Patch",
          status: "1-Click SRE",
          latencyMs: "1180 ms",
          tensorShape: "Git Diff Patch + Unit Tests",
          description: "Generates tested code fix with unit tests for lead engineer review.",
          details: "Synthesizes git patch with connection pooling context-manager fix. Reclaims 5+ hours/dev/week."
        }
      ]
    },
    {
      id: "churn",
      tabLabel: "Telecom Churn Engine",
      systemName: "Predictive Analytics & Prescriptive Retention",
      client: "Regional Telecommunications Operator (CET Research)",
      defaultLatency: 120,
      defaultTokensPerSec: 0,
      roi: "+35% Quarterly Revenue Gain via Retention",
      sampleQueries: [
        "Subscriber Segment: Heavy Mobile Data Users with 40% Consumption Drop in 30 Days",
        "Subscriber Segment: Prepaid Rural Customers with Recharging Lulls Post-Lockdown",
        "Subscriber Segment: Enterprise Multi-Line Accounts with Customer Service Escalations"
      ],
      parameters: [
        { id: "riskThreshold", label: "Churn Probability Threshold", min: 0.50, max: 0.90, step: 0.05, value: 0.65, unit: "" },
        { id: "subscribersScored", label: "Batch Scoring Volume", min: 10000, max: 500000, step: 50000, value: 100000, unit: " users" },
        { id: "retentionBudget", label: "Retention Tier Incentive Weight", min: 1, max: 5, step: 1, value: 3, unit: "x" }
      ],
      stages: [
        {
          id: "cdr",
          name: "Call Detail Record (CDR) Aggregation",
          status: "500K Records",
          latencyMs: "35 ms",
          tensorShape: "500K CDR Partitions",
          description: "Aggregates multi-dimensional voice, data, and SMS traffic metrics over pandemic periods.",
          details: "Calculates weekly usage slope, voice call frequency decay, and recharge intervals."
        },
        {
          id: "features",
          name: "Behavioral Feature Engineering",
          status: "34 Features",
          latencyMs: "42 ms",
          tensorShape: "[500K, 34] Feature Matrix",
          description: "Constructs behavioral velocity indicators identifying disengagement patterns.",
          details: "Features engineered: rolling 30-day delta in data gigabytes, complaint frequency, and competitor network latency."
        },
        {
          id: "xgboost",
          name: "Ensemble Risk Classification",
          status: "83% Precision",
          latencyMs: "28 ms",
          tensorShape: "ROC-AUC: 0.892, Precision: 83%",
          description: "XGBoost decision forest assigns individual churn risk probability scores.",
          details: "Model achieved 0.892 ROC-AUC. Accurately flags 83% of users at imminent risk of switching providers."
        },
        {
          id: "action",
          name: "Prescriptive Incentive Assignment",
          status: "+35% Revenue Gain",
          latencyMs: "15 ms",
          tensorShape: "3 Retention Tiers",
          description: "Maps predicted churners into high-ROI personalized retention programs.",
          details: "Directly informed 2 new commercial retention packages, resulting in verified 35% quarterly revenue gain."
        }
      ]
    }
  ],

  // Dual-Lens Perspectives
  perspectives: {
    strategic: {
      badge: "Strategic Delivery & Solutions Architecture",
      leadTitle: "Transforming Complex AI Capabilities into Enterprise Value",
      leadDesc: "Specialized in aligning business objectives with technical feasibility, managing cross-functional stakeholder ecosystems, defining production architectures, and driving adoption across 600,000+ users.",
      metrics: [
        { value: "4+ Yrs", label: "Systems Ownership", detail: "Scoping, architecting & shipping enterprise AI" },
        { value: "600K+", label: "Global Users Enabled", detail: "Scaled organizational adoption with measurable ROI" },
        { value: "30-50%", label: "Operational Efficiency", detail: "Automated high-friction workflows via agentic intelligence" },
        { value: "35%", label: "Revenue Expansion Driven", detail: "Prescriptive retention modeling adopted by telecom executives" }
      ],
      coreStrengths: [
        {
          title: "Technical Scoping & Feasibility",
          desc: "Deconstructing ambiguous business problems into structured, milestones-driven AI deliverables with clear risk mitigation."
        },
        {
          title: "Stakeholder & Client Translation",
          desc: "Acting as the technical bridge between executive decision-makers, product sponsors, and specialized research scientists."
        },
        {
          title: "Cross-Functional TPM Leadership",
          desc: "Orchestrating engineering sprints, managing data governance pipelines, and driving cross-team consensus from prototype to launch."
        },
        {
          title: "Adoption & Change Enablement",
          desc: "Conducting large-scale technical bootcamps (10,000+ associates) to ensure enterprise tooling is enthusiastically embraced."
        }
      ]
    },
    engineering: {
      badge: "Deep Learning & Production Engineering",
      leadTitle: "Building Resilient, High-Throughput AI Systems & Multi-Agent Architectures",
      leadDesc: "Hands-on engineering mastery spanning multi-agent orchestration, small language model (SLM) fine-tuning, retrieval-augmented generation (RAG), tool calling, and full-stack cloud deployment.",
      metrics: [
        { value: "3.8/4", label: "Graduate GPA (U of T)", detail: "ELITE Emphasis in Data Analytics & Machine Learning" },
        { value: "600K+", label: "Enterprise Scale", detail: "RAG & ticket agents deployed for global associates" },
        { value: "5+ hrs", label: "Weekly Dev Time Saved", detail: "Autonomous Llama 3 support agent PoC to MVP" },
        { value: "Top 1%", label: "National Engineering Cadre", detail: "Selected for TCS Digital elite engineering cadre" }
      ],
      coreStrengths: [
        {
          title: "LLMs, Agents & Tool Calling",
          desc: "Claude API / Claude Code, OpenAI APIs, LangChain, MCP (Model Context Protocol), multi-agent orchestration, tool calling, LLM evaluation & guardrails."
        },
        {
          title: "SLM Fine-Tuning & Knowledge Graphs",
          desc: "Fine-tuning small language models (SLM) on PyTorch and Hugging Face Transformers for multi-hop causal reasoning over compliance knowledge graphs."
        },
        {
          title: "Full-Stack Deployment & CI/CD",
          desc: "FastAPI, Streamlit, Gradio, Docker, GCP, AWS, Azure, CI/CD (Harness), PostgreSQL, and Git."
        },
        {
          title: "Computer Vision & Transformers",
          desc: "MediaPipe 3D landmark extraction, Vision Transformers (ViT), PyTorch model optimization, and gesture translation."
        }
      ]
    }
  },

  // Case Studies & Engineering Projects
  projects: [
    {
      id: "sentinel-multi-agent-defense",
      title: "Sentinel: Multi-Agent Prompt-Injection Defense Arena",
      subtitle: "Red-Team/Blue-Team System with Fine-Tuned SLM Guardian for Tool-Using Agents",
      category: "genai",
      tag: "UofT ECE1786 • Frontier AI Security",
      client: "University of Toronto (ECE1786)",
      year: "September 2026 – Present",
      impactMetric: "Attacker vs. Guardian Adversarial Evaluation Benchmark",
      strategicFocus: "Architecting a dynamic red-team/blue-team security arena for tool-using AI agents, evaluating autonomous attack vectors and automated containment strategies.",
      technicalFocus: "Building an adversarial simulation harness where an attacker agent injects indirect/direct prompt-injection payloads into tool-using target agents, while a Guardian harness detects, responds, and recovers. Fine-tuning an SLM classifier as the detection component, evaluated on attack success rate (ASR) and task utility against open-source benchmarks.",
      techStack: ["Python", "PyTorch", "Hugging Face", "SLM Fine-Tuning", "Multi-Agent Orchestration", "Tool Calling", "LLM Evaluation"],
      architectureSteps: [
        "Adversarial Payload Synthesis (Attacker Agent)",
        "Tool-Calling Target Execution Loop",
        "Fine-Tuned SLM Guardian Classification",
        "Autonomous Containment & Recovery Protocol"
      ],
      githubUrl: "https://github.com/tarunbjoseph"
    },
    {
      id: "support-ticket-agent",
      title: "Support Ticket Automation Agent",
      subtitle: "Autonomous IT Support Agent with Tool-Calling & Vector-Store Memory",
      category: "genai",
      tag: "Enterprise MVP",
      client: "Tata Consultancy Services (600,000 Employees)",
      year: "March 2025",
      impactMetric: "5+ Hours Saved / Developer / Week",
      strategicFocus: "Eliminated repetitive IT support ticket drag across 600,000 employees without human intervention, defining SLA metrics with service managers and proving high ROI with open-source LLMs.",
      technicalFocus: "Designed a proof-of-concept (PoC) and built an MVP for an autonomous IT support agent using Llama 3 with tool-calling capabilities, vector-store memory, and semantic routing. Iterated over 3 agile sprints on stakeholder feedback.",
      techStack: ["Llama 3", "Python", "Open-Source LLMs", "Vector Databases", "Semantic Routing", "Tool Calling", "REST APIs"],
      architectureSteps: [
        "Support Ticket Ingestion & Entity Parsing",
        "Vector-Store Context & Semantic Routing",
        "Autonomous Tool Calling & Action Execution",
        "Draft Resolution Synthesis & Closure"
      ],
      githubUrl: null
    },
    {
      id: "enterprise-rag-platform",
      title: "Enterprise Knowledge & Coding Intelligence Platform",
      subtitle: "Multi-Tier RAG Architecture Serving 600,000+ Global Associates",
      category: "genai",
      tag: "Enterprise Production",
      client: "Tata Consultancy Services (Global EdTech)",
      year: "2023 - 2025",
      impactMetric: "30% Reduction in Technical Escalations",
      strategicFocus: "Bridged internal engineering knowledge silos. Conducted executive requirement discovery across multiple business units, designed scalable compliance guardrails, and orchestrated multi-team rollout.",
      technicalFocus: "Hybrid semantic search combining dense vector embeddings and BM25 reranking over recursive tokenized codebases. Implemented source-grounded hallucination checks and high-concurrency Flask endpoints.",
      techStack: ["LangChain", "Vector Embeddings", "GPT-3.5", "Hybrid Search", "Python", "Azure", "Flask"],
      architectureSteps: [
        "Repository Ingestion & Cleaning",
        "Contextual Semantic Chunking",
        "Hybrid Vector Indexing + BM25 Reranking",
        "Deterministic Guardrail Verification",
        "High-Throughput Streaming API"
      ],
      githubUrl: null
    },
    {
      id: "asl-vision-translator",
      title: "Real-Time American Sign Language (ASL) Translator",
      subtitle: "High-FPS Deep Learning & Computer Vision System for Inclusive Communication",
      category: "vision",
      tag: "Applied AI Capstone Lead",
      client: "University of Toronto (Assistive Tech Research)",
      year: "2025 - 2026",
      impactMetric: "Sub-45ms End-to-End Latency at 30+ FPS",
      strategicFocus: "Productized an assistive communication interface for deaf and hard-of-hearing individuals. Led a 4-engineer development squad, gathered user feedback, and optimized for low-compute client devices.",
      technicalFocus: "Dual-stage spatial-temporal architecture. Leverages MediaPipe for real-time 3D landmark extraction (21 keypoints per hand) coupled with sequence Transformers and BiLSTM for continuous fingerspelling classification.",
      techStack: ["PyTorch", "MediaPipe", "Vision Transformers", "OpenCV", "BiLSTM", "Python"],
      architectureSteps: [
        "Webcam Video Capture",
        "3D Hand Landmark Extraction (21 Points)",
        "Spatial Coordinate Normalization",
        "Temporal Transformer Sequence Modeling",
        "Synthesized Audio / Text Display"
      ],
      githubUrl: "https://github.com/tarunbjoseph/MIE1517_ASL_Fingerspelling_Recognition"
    },
    {
      id: "agentic-ticket-automation",
      title: "Autonomous IT Diagnostics & Ticket Resolution Agent",
      subtitle: "Multi-Step Open-Source LLM Agent with Tool-Calling Capabilities",
      category: "genai",
      tag: "Systems Architecture MVP",
      client: "Tata Consultancy Services (Innovation Lab)",
      year: "2024",
      impactMetric: "5+ Engineering Hours Saved / Developer / Week",
      strategicFocus: "Eliminated repetitive Tier-1 support drag for senior engineering teams. Formulated the business case, defined SLA metrics with service managers, and demonstrated high ROI utilizing open-weight models.",
      technicalFocus: "Autonomous agentic loop powered by Llama 3 with dynamic tool calling (JIRA API, system log parsers, Confluence knowledge base). Features iterative self-evaluation and automated draft resolution synthesis.",
      techStack: ["Llama 3", "Autonomous Agents", "LangGraph", "Python", "REST APIs", "JIRA"],
      architectureSteps: [
        "Event Trigger & Ticket Ingestion",
        "Intent Disambiguation & Entity Parsing",
        "Autonomous Tool Calling (Logs, History, Docs)",
        "Root-Cause Synthesis & Solution Draft",
        "Human-in-the-Loop Approval Dispatch"
      ],
      githubUrl: null
    },
    {
      id: "deepfake-forensic-platform",
      title: "Deepfake Detection & Captioning with Vision Transformers",
      subtitle: "Forensic Evaluation Framework Engaging 5,000+ Engineers Worldwide",
      category: "vision",
      tag: "Global Hackathon Platform",
      client: "TCS Global Learning Festival",
      year: "2024",
      impactMetric: "92%+ Detection Accuracy Baseline",
      strategicFocus: "Spearheaded organizational awareness of synthetic media vulnerabilities. Designed the problem statement, created standardized evaluation criteria, and engaged over 5,000 participants across 15 countries.",
      technicalFocus: "Constructed dual-head Vision Transformer (ViT) and CNN baseline architectures capable of identifying facial boundary artifacts and generating contextual natural language descriptions of anomalies.",
      techStack: ["Vision Transformers", "CNNs", "PyTorch", "HuggingFace", "Python", "Scikit-Learn"],
      architectureSteps: [
        "Synthetic Image Tile Preprocessing",
        "Patch Projection & Positional Embedding",
        "Multi-Head Self-Attention Encoding",
        "Dual-Head Binary Classification & Captioning"
      ],
      githubUrl: "https://github.com/tarunbjoseph"
    },
    {
      id: "telecom-predictive-engine",
      title: "Pandemic Telecom Churn Prediction & Retention Engine",
      subtitle: "Prescriptive Modeling that Increased Quarterly Revenue by 35%",
      category: "systems",
      tag: "Strategic Analytics",
      client: "Regional Telecom Research (CET)",
      year: "2021",
      impactMetric: "+35% Verified Quarterly Revenue Expansion",
      strategicFocus: "Translated complex behavioral telecom data into actionable commercial packages for executive leadership during unprecedented pandemic disruptions, successfully preventing customer churn.",
      technicalFocus: "Feature engineering over large-scale Call Detail Records (CDR), mobility decay metrics, and recharge frequencies. Built ensemble predictive models (XGBoost) achieving 83% precision in identifying churn risk.",
      techStack: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "SQL", "Tableau"],
      architectureSteps: [
        "Large-scale CDR Ingestion",
        "Behavioral Feature Extraction",
        "Ensemble Churn Risk Scoring",
        "Prescriptive Retention Tier Mapping"
      ],
      githubUrl: "https://github.com/tarunbjoseph"
    }
  ],

  // Professional Experience with Official Logos
  experience: [
    {
      role: "Machine Learning Associate",
      organization: "Vector Institute × SafeAlign AI (Fastlane Applied Projects)",
      logo: "assets/logos/vector_institute.png",
      location: "Toronto, Canada",
      period: "August 2026 – Present",
      type: "Multi-Agent Security, Governance & Observability",
      strategicPoints: [
        "Own the governance and policy lane of SafeAlign's security and observability platform for multi-agent AI systems, translating regulatory and policy requirements (pilot: Canada's OSFI E-23, MITRE, EU AI, OWASP) into a knowledge graph that grounds agent-risk decisions.",
        "Fine-tuning a small language model (SLM) to reason over that knowledge graph through multi-hop causal traversal, producing traceable, policy-cited compliance decisions.",
        "Own deployment and client tuning for the lane across two paths: fully local, on-prem inference for strongly regulated clients, and a cloud variant for less-regulated clients."
      ]
    },
    {
      role: "AI Program Design & Delivery Intern",
      organization: "Vector Institute",
      logo: "assets/logos/vector_institute.png",
      location: "Toronto, Canada",
      period: "May 2026 – August 2026",
      type: "Agentic AI Enablement & Industry Translation",
      strategicPoints: [
        "Led end-to-end delivery of the Agentic AI Evaluation bootcamp, from onboarding through Showcase Day (9.0/10 participant rating), and resolved technical and operational blockers for 3+ industry teams.",
        "Automated the bootcamp lifecycle using the Slack API and Google Apps Script, covering 2 SOPs, team registration, and certificate generation for 13 teams, which saved 5+ hours of prep per bootcamp.",
        "Delivered 3 bootcamps, an applied AI cohort, an ICML 2026 speaker series, and a senior-leader AI ROI roundtable with a Director and 5+ PMs, securing 10+ team registrations and curating 4+ speakers."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      organization: "University of Toronto",
      logo: "assets/logos/university_of_toronto.svg",
      location: "Toronto, Canada",
      period: "September 2025 – Present",
      type: "Academic Leadership & Technical Instruction",
      strategicPoints: [
        "MIE429 AI/ML Capstone Design: mentored 45 students building AI prototypes and resolved technical blockers in meetings with industry clients.",
        "MIE1628 (Cloud-based Big Data Analytics): Ran tutorials for 100+ students on Data Analytics.",
        "Elected Departmental Steward for CUPE 3902 Unit 1 and VP of Professional Development for the MIE Graduate Student Association (AMIGAS)."
      ]
    },
    {
      role: "Machine Learning Engineer",
      organization: "Tata Consultancy Services (TCS)",
      logo: "assets/logos/tcs_logo.svg",
      location: "Enterprise AI Delivery",
      period: "January 2023 – May 2025",
      type: "Enterprise AI Solutions & Agentic Systems",
      strategicPoints: [
        "Deployed GPT-3.5- and Llama 3-powered RAG chatbots and AI agents on TCS's internal EdTech platform, serving 600,000 associates globally.",
        "Built a support-ticket automation agent from PoC to MVP using open-source LLMs, with vector-store memory, semantic routing, and API tool calls. Iterated over 3 sprints on stakeholder feedback, saving 5+ hours/week.",
        "Led GenAI bootcamps for 10,000+ associates, turning model capabilities into practical workflows for non-technical teams and driving a 13% increase in platform engagement."
      ]
    },
    {
      role: "Data Engineer & Data Analyst",
      organization: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      location: "Talent Development",
      period: "January 2022 – December 2022",
      type: "Data Architecture & Business Analytics",
      strategicPoints: [
        "Engineered robust PL/SQL database pipelines and ETL workflows using Informatica and pgAdmin, minimizing downtime for mission-critical employee portals.",
        "Designed automated Tableau reporting and Python pipelines that eliminated 50% of manual reporting overhead for senior leadership.",
        "Awarded the corporate 'On the Spot' Innovation Award for delivering data-backed enrollment recommendations to executive directors."
      ]
    },
    {
      role: "Lead Technical Trainer (TATA ProEngage Volunteer)",
      organization: "SURE Trust",
      logo: "assets/logos/sure_trust_logo.png",
      website: "https://www.suretrustforruralyouth.com/",
      location: "Social Impact & Rural Skilling",
      period: "2023 - 2025",
      type: "Technical Enablement & AI Training",
      strategicPoints: [
        "Mentored and led intensive 6-month technical training bootcamps for final-year Computer Science and Engineering students from rural, underprivileged backgrounds.",
        "Guided students through production-grade project development in Python, Machine Learning, and Cloud DevOps, accelerating their transition into professional engineering roles."
      ]
    },
    {
      role: "Academic Support Volunteer & Youth Mentor",
      organization: "Make A Difference (MAD)",
      logo: "assets/logos/make_a_difference_logo.png",
      website: "https://www.makeadiff.in/",
      location: "Social Impact & Youth Equity",
      period: "2019 - 2021",
      type: "Community Leadership & Mentorship",
      strategicPoints: [
        "Delivered personalized academic tutoring and mentorship to 10+ vulnerable children residing in shelter homes, building foundational STEM literacy and communication skills.",
        "Mobilized community engagement initiatives and conducted life-skills workshops fostering long-term educational equity and resilience."
      ]
    }
  ],

  // Academic Credentials with Official Logo
  education: [
    {
      degree: "Master of Engineering (MEng) — Industrial Engineering",
      institution: "University of Toronto, Canada",
      logo: "assets/logos/university_of_toronto.svg",
      location: "Toronto, Canada",
      period: "September 2025 – Present",
      status: "GPA: 3.8/4 • Emphasis: Data Analytics & Machine Learning, ELITE",
      courses: [
        { name: "Deep Learning", grade: "A" },
        { name: "Data Science & Statistics", grade: "A+" },
        { name: "Natural Language Processing", grade: "Completed" },
        { name: "HR Management", grade: "Completed" }
      ]
    },
    {
      degree: "Bachelor of Technology (B. Tech) — Industrial Engineering",
      institution: "College of Engineering Trivandrum, India",
      logo: "assets/logos/cet_logo.jpg",
      location: "India",
      period: "August 2017 – June 2021",
      status: "First Class with Distinction (8.0/10 CGPA)",
      courses: [
        { name: "Operations Research & Simulation", grade: "Distinction" },
        { name: "Statistical Data Analysis with R & Python", grade: "Distinction" }
      ]
    }
  ],

  // Verified Industry Credentials with Official Logos
  certifications: [
    {
      title: "Google: Generative AI Leader Certification",
      issuer: "Google",
      logo: "assets/logos/google_cert.svg",
      date: "2026",
      verifyUrl: null,
      badge: "Executive GenAI"
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      logo: "assets/logos/aws_certified.svg",
      date: "2024",
      verifyUrl: "https://www.credly.com",
      badge: "Cloud AI"
    },
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      logo: "assets/logos/azure_certified.svg",
      date: "2024",
      verifyUrl: "https://learn.microsoft.com",
      badge: "Enterprise ML"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      logo: "assets/logos/aws_certified.svg",
      date: "2023",
      verifyUrl: "https://www.credly.com",
      badge: "Cloud Architecture"
    },
    {
      title: "Generative AI and Large Language Models (Gold Certificate: 90%)",
      issuer: "IIM Bangalore (IIMB)",
      logo: "assets/logos/iimb_logo.svg",
      date: "2024",
      verifyUrl: null,
      badge: "Executive GenAI"
    },
    {
      title: "AI4ICPS Certificate in Advanced AI & ML",
      issuer: "IIT Kharagpur",
      logo: "assets/logos/iit_logo.svg",
      date: "2024",
      verifyUrl: null,
      badge: "Deep Learning"
    },
    {
      title: "TCS Digital Hi-Talent Engineering Cadre",
      issuer: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      date: "2022",
      verifyUrl: null,
      badge: "Top 1% Selection"
    }
  ],

  // Digital Twin AI Assistant metadata
  digitalTwin: {
    name: "Tarun.AI",
    subtitle: "Interactive Digital Twin",
    tagline: "Trained on Tarun's forward-deployed engineering philosophy, multi-agent architectures, and enterprise deliverables.",
    huggingfaceSpaceUrl: "https://huggingface.co/TarunJoseph101",
    samplePrompts: [
      {
        q: "What is Tarun's role at Vector Institute and SafeAlign AI?",
        a: "Tarun is a Machine Learning Associate for the Vector Institute × SafeAlign AI Fastlane project, where he owns the governance and policy lane for multi-agent AI systems. He translates regulatory standards (OSFI E-23, MITRE, EU AI, OWASP) into knowledge graphs and fine-tunes Small Language Models (SLMs) for multi-hop causal reasoning to deliver policy-cited compliance decisions."
      },
      {
        q: "Tell me about Tarun's project Sentinel.",
        a: "Sentinel is a Multi-Agent Prompt-Injection Defense Arena developed at UofT (ECE1786). It features a red-team/blue-team framework where an attacker agent injects adversarial payloads into tool-using target agents, while an SLM-based Guardian harness detects, contains, and recovers from prompt-injection exploits."
      },
      {
        q: "What are Tarun's core technical competencies?",
        a: "Tarun specializes in LLMs and agents (Claude API/Claude Code, OpenAI APIs, LangChain, MCP, tool calling, multi-agent orchestration, guardrails), SLM fine-tuning and knowledge graphs (PyTorch, Hugging Face Transformers), full-stack AI deployment (FastAPI, Streamlit/Gradio, Docker, GCP, AWS, Azure, Harness CI/CD), and enterprise ML systems."
      },
      {
        q: "How did Tarun deliver value at Tata Consultancy Services?",
        a: "At TCS, Tarun deployed GPT-3.5- and Llama 3-powered RAG chatbots and agents serving 600,000+ associates globally, built an autonomous support-ticket automation agent that saved 5+ hours/week per developer, and led GenAI bootcamps for 10,000+ associates driving a 13% increase in platform engagement."
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof global !== 'undefined') {
  global.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
