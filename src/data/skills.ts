/**
 * Research competencies, each tied to the publications that demonstrate it.
 * `evidence` entries are publication `tag` values from src/content/publications/.
 */
export const competencies = [
  {
    area: 'LLM fine-tuning & adaptation',
    methods: 'LoRA · QLoRA · DPO · Instruct Tuning · RLHF · Quantization (AWQ/GPTQ)',
    detail:
      'Parameter-efficient adaptation of open models to specialized domains and low-resource languages.',
    evidence: ['Cultura-Arabica', 'QRAFT'],
  },
  {
    area: 'RAG & retrieval',
    methods: 'Hybrid RAG · Graph RAG · Retrieval-augmented fine-tuning',
    detail:
      'Grounding model outputs in retrieved evidence for extraction over long financial documents.',
    evidence: ['QRAFT'],
  },
  {
    area: 'Evaluation methodology',
    methods: 'LLM-as-judge · Benchmark design · Adversarial red-teaming',
    detail:
      'Building benchmarks and metrics — including the PCR and SER safety measures — and validating lightweight judge models.',
    evidence: ['FinRed-MT', 'FinRed', 'NuggetJudge'],
  },
  {
    area: 'Prompting & multi-agent systems',
    methods: 'Zero-shot · Few-shot · Chain-of-thought · Meta prompting · Agent orchestration',
    detail:
      'Structured prompting pipelines and adversarial multi-agent frameworks for financial reasoning.',
    evidence: ['CausalFin', 'SAS'],
  },
  {
    area: 'Federated & multimodal learning',
    methods: 'Federated training · Cross-modal attention · Multi-task learning',
    detail:
      'Privacy-preserving training across clients, fusing speech and text encoders for affect recognition.',
    evidence: ['FedAffect'],
  },
  {
    area: 'Model serving & inference efficiency',
    methods: 'vLLM · TGI · llama.cpp · Triton · SGLang · AirLLM',
    detail:
      'Paged KV-cache eviction and attention optimization for higher-throughput inference serving.',
    evidence: [],
  },
] as const;

/** Core CS coursework from the Integrated M.Tech (CSE & AI) at RGIPT. */
export const coursework = [
  {
    group: 'Algorithms & Foundations',
    courses: ['Data Structures & Algorithms', 'Discrete Mathematics'],
  },
  {
    group: 'Systems',
    courses: ['Operating Systems', 'Computer Networks', 'Compiler Design'],
  },
  {
    group: 'Software Design',
    courses: ['Object-Oriented Programming', 'Software Engineering'],
  },
] as const;

export const stack = [
  {
    group: 'Agent Frameworks',
    tags: ['LangGraph', 'LangChain', 'AutoGen', 'CrewAI'],
  },
  {
    group: 'Speech & Voice',
    tags: ['STT', 'TTS', 'Voice Agents'],
  },
  {
    group: 'ML/DL Libraries',
    tags: ['PyTorch', 'Transformers', 'Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas'],
  },
  {
    group: 'Programming & APIs',
    tags: ['Python', 'Git', 'REST APIs', 'OAuth', 'Webhooks'],
  },
  {
    group: 'Cloud & DevOps',
    tags: ['AWS', 'Azure', 'Docker'],
  },
  {
    group: 'Databases & Automation',
    tags: ['Vector DBs', 'PostgreSQL', 'Supabase', 'SQL', 'N8N', 'Zapier', 'Make'],
  },
] as const;
