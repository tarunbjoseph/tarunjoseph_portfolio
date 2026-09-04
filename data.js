/**
 * TARUN JOSEPH - EXECUTIVE PORTFOLIO DATA STORE
 * Single source of truth with official institutional assets and interactive simulator data.
 */

var PORTFOLIO_DATA = {
  personal: {
    name: "Tarun Joseph",
    title: "AI Solutions Architect & Technical Consultant",
    tagline: "Bridging the divide between high-level business strategy and enterprise AI deployment. Currently accelerating industry AI translation at the Vector Institute while pursuing graduate engineering at the University of Toronto, backed by 4 years of large-scale ML systems ownership at Tata Consultancy Services.",
    location: "Toronto, Ontario, Canada",
    statusBadge: "Open to AI Solutions Architecture, TPM & Applied AI Roles",
    email: "tarunb.joseph@mail.utoronto.ca",
    altEmail: "tarunbjoseph@gmail.com",
    phone: "+1 (437) 237-5615",
    linkedin: "https://www.linkedin.com/in/tarunjoseph25/",
    github: "https://github.com/tarunbjoseph",
    huggingface: "https://huggingface.co/TarunJoseph101",
    photo: "assets/images/tarun_executive.jpg",
    resumes: {
      industry: "assets/resumes/Tarun_Joseph_Resume_Prof_New.pdf",
      academic: "assets/resumes/Tarun_Joseph_Resume_Aug26.pdf",
      dossier: "assets/resumes/Tarun_Joseph_Resume.pdf"
    }
  },

  // Institutional Provenance with Official Logos
  institutions: [
    {
      name: "Vector Institute",
      logo: "assets/logos/vector_institute.png",
      role: "Applied AI (Design & Delivery)",
      focus: "Translating frontier AI research into enterprise solutions for premier corporate sponsors."
    },
    {
      name: "University of Toronto",
      logo: "assets/logos/university_of_toronto.svg",
      role: "Graduate Teaching Assistant & MEng Candidate",
      focus: "Advising senior AI capstones with industry clients; top academic standing (A+/A)."
    },
    {
      name: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      role: "Machine Learning Engineer & Data Engineer",
      focus: "Architected and delivered production RAG and agentic systems serving 600,000+ users."
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
      leadTitle: "Building Resilient, High-Throughput AI Systems",
      leadDesc: "Hands-on engineering mastery spanning generative AI pipelines, retrieval-augmented generation (RAG), autonomous agent loops (Llama 3), computer vision transformers, and robust data warehousing.",
      metrics: [
        { value: "30+ FPS", label: "Real-Time Inference Speed", detail: "Low-latency ASL vision transformer & landmark tracking" },
        { value: "92%+", label: "Forensic Benchmark Accuracy", detail: "Global Vision Transformer deepfake challenge platform" },
        { value: "< 50ms", label: "Inference & Retrieval Latency", detail: "Optimized hybrid vector search & embedding caching" },
        { value: "Top 1%", label: "National Engineering Cadre", detail: "Selected for TCS Digital elite engineering cadre" }
      ],
      coreStrengths: [
        {
          title: "Generative AI & Agentic Systems",
          desc: "Llama 3, GPT-4, LangChain, LangGraph, prompt orchestration, recursive chunking, and self-correcting agent loops."
        },
        {
          title: "Computer Vision & Transformers",
          desc: "MediaPipe 3D landmark extraction, Vision Transformers (ViT), PyTorch model optimization, and gesture translation."
        },
        {
          title: "Enterprise Data Pipelines",
          desc: "PostgreSQL, PL/SQL, Informatica, ETL resilience, unified schema design, and production monitoring."
        },
        {
          title: "Cloud & MLOps Infrastructure",
          desc: "AWS Certified AI Practitioner & Azure Certified Data Scientist. REST API deployment, Docker, and CI/CD."
        }
      ]
    }
  },

  // Case Studies
  projects: [
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
      role: "Applied AI (Design & Delivery)",
      organization: "Vector Institute",
      logo: "assets/logos/vector_institute.png",
      location: "Toronto, Canada",
      period: "May 2026 - Present",
      type: "Frontier Research & Industry Translation",
      strategicPoints: [
        "Acting as the vital technical translator between frontier AI research scientists and corporate industry sponsors, scoping practical implementations for real-world enterprise constraints.",
        "Overseeing model delivery workflows, ensuring data governance, ethical compliance, and business alignment across multidisciplinary partner teams."
      ]
    },
    {
      role: "Graduate Teaching Assistant & Capstone Advisor",
      organization: "University of Toronto",
      logo: "assets/logos/university_of_toronto.svg",
      location: "Toronto, Canada",
      period: "September 2025 - Present",
      type: "Academic Leadership & Mentorship",
      strategicPoints: [
        "Advising 45+ senior engineering students across 10 teams executing industry-sponsored AI Capstone deliverables (MIE429).",
        "Elected Departmental Steward for CUPE 3902 Unit 1, safeguarding academic integrity and collaborative standards.",
        "Serving as VP of Professional Development for the MIE Graduate Student Association (AMIGAS), curating industry networking forums."
      ]
    },
    {
      role: "Machine Learning Engineer",
      organization: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      location: "Enterprise Delivery",
      period: "January 2023 - May 2025",
      type: "Enterprise AI Solutions",
      strategicPoints: [
        "Architected and deployed enterprise GenAI solutions (RAG assistants, Llama 3 agents) used daily by over 600,000 associates globally.",
        "Led cross-functional hackathons and quarterly coding assessments for 10,000+ associates per quarter, directly driving professional promotions.",
        "Conducted deep-skilling bootcamps on Generative AI and Python as a certified Subject Matter Expert (SME), increasing platform learning hours by 13% in FY24."
      ]
    },
    {
      role: "Data Engineer & Data Analyst",
      organization: "Tata Consultancy Services",
      logo: "assets/logos/tcs_logo.svg",
      location: "Talent Development",
      period: "January 2022 - December 2022",
      type: "Data Architecture & Business Analytics",
      strategicPoints: [
        "Engineered robust PL/SQL database pipelines and ETL workflows using Informatica and pgAdmin, minimizing downtime for mission-critical employee portals.",
        "Designed automated Tableau reporting and Python pipelines that eliminated 50% of manual reporting overhead for senior leadership.",
        "Awarded the corporate 'On the Spot' Innovation Award for delivering data-backed enrollment recommendations to executive directors."
      ]
    },
    {
      role: "Lead Technical Trainer & Community Mentor",
      organization: "SURE NGO (TATA ProEngage) & Make A Difference",
      logo: null,
      location: "Social Impact",
      period: "2019 - 2025",
      type: "Technical Enablement",
      strategicPoints: [
        "Led 6-month technical bootcamps for final-year CS students from rural backgrounds, mentoring them through industry-ready project builds.",
        "Provided academic support and fundamental tutoring to 10+ underprivileged children in shelter homes over two years."
      ]
    }
  ],

  // Academic Credentials with Official Logo
  education: [
    {
      degree: "Master of Engineering (MEng) — Data Analytics & AI",
      institution: "University of Toronto",
      logo: "assets/logos/university_of_toronto.svg",
      location: "Toronto, Canada",
      period: "2025 - Present",
      status: "Graduate Standing: A / A+",
      courses: [
        { name: "Data Science Methods & Statistical Learning", grade: "A+" },
        { name: "Deep Learning Architectures", grade: "A" },
        { name: "Foundations of Data Analytics & Machine Learning", grade: "A" },
        { name: "Applications of Natural Language Processing", grade: "Upcoming" }
      ]
    },
    {
      degree: "Bachelor of Technology (BTech) — Industrial Engineering",
      institution: "College of Engineering Trivandrum (CET)",
      logo: "assets/logos/cet_logo.jpg",
      location: "India",
      period: "2017 - 2021",
      status: "Graduated with 8.0/10 CGPA",
      courses: [
        { name: "Operations Research & Simulation", grade: "Distinction" },
        { name: "Statistical Data Analysis with R & Python", grade: "Distinction" }
      ]
    }
  ],

  // Verified Industry Credentials with Official Logos
  certifications: [
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
    tagline: "Trained on Tarun's systems architecture philosophy, enterprise deliverables, and research background.",
    huggingfaceSpaceUrl: "https://huggingface.co/TarunJoseph101",
    samplePrompts: [
      {
        q: "What is Tarun's approach to AI solutions architecture?",
        a: "Tarun treats AI not as an isolated model, but as a holistic business system. He begins with problem-scoping and stakeholder alignment, selects architectures based on operational constraints (e.g., Llama 3 for local privacy vs. cloud APIs for speed), establishes guardrails, and actively drives user adoption."
      },
      {
        q: "How did Tarun deliver value at Tata Consultancy Services?",
        a: "At TCS, Tarun led the deployment of an enterprise RAG assistant serving 600,000+ associates (saving 30% in technical inquiry time) and engineered an autonomous Llama 3 agent for ticket triage that reclaimed 5+ hours per week per developer."
      },
      {
        q: "What is his current focus at the Vector Institute and U of T?",
        a: "At Vector Institute, he serves in the Design & Delivery team as a technical translator between research scientists and corporate sponsors. At U of T, he maintains top graduate grades (A+/A) and leads the Real-Time ASL Fingerspelling Translator project."
      },
      {
        q: "Does Tarun have non-technical and leadership experience?",
        a: "Yes. He is VP of Professional Development for the AMIGAS Graduate Association at U of T, a CUPE 3902 Departmental Steward, and has trained over 10,000 corporate associates and rural students across 5+ years of volunteer and professional teaching."
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
