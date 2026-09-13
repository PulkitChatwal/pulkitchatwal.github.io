export const site = {
  name: 'Pulkit Chatwal',
  title: 'AI / Machine Learning Engineer',
  // Plain-text version, used for meta descriptions. The Home page renders a
  // richer version of this sentence with Voxx Agent linked.
  pitch:
    'Integrated Dual Degree (B.Tech. + M.Tech.) graduate in Computer Science and Artificial Intelligence from RGIPT. Research interests in Large Language Models, LLM safety and evaluation, multilingual NLP, and misinformation and disinformation. Seven published papers, with more accepted and under review. Currently looking for PhD opportunities.',
  affiliation:
    'Integrated Dual Degree (B.Tech + M.Tech), CSE & AI, Rajiv Gandhi Institute of Petroleum Technology (RGIPT) — An Institute of National Importance',
  advisor: 'Dr. Santosh Kumar Mishra',
  thesis: 'Adapting Large Language Models Across Specialized Domains for Reasoning & Report Generation',
  email: 'pulkitchatwal@gmail.com',
  phone: '+91-7456038395',
  scholar: 'https://scholar.google.com/citations?user=8zth9CoAAAAJ&hl=en',
  github: 'https://github.com/PulkitChatwal',
  // Local copy: instant, always available, no sign-in.
  resumeUrl: '/resume.pdf',
  // Google Drive copy, in case a reader prefers to view it there.
  resumeDriveUrl:
    'https://drive.google.com/file/d/1f3-l9W7AcHWIpA_1Fowtx9Pm-KQbVvsk/view?usp=sharing',
  voxxUrl: 'https://www.voxxagent.ai/',
} as const;

/**
 * The site is a single scrolling page: `id` is the section anchor on `/`.
 * `page` keeps the standalone route alive as a fallback / direct link.
 */
export const nav = [
  { id: 'about', href: '/#about', page: '/', label: 'About' },
  { id: 'research', href: '/#research', page: '/research', label: 'Research' },
  { id: 'coursework', href: '/#coursework', page: '/coursework', label: 'Coursework & Skills' },
  { id: 'achievements', href: '/#achievements', page: '/achievements', label: 'Achievements' },
  { id: 'experience', href: '/#experience', page: '/experience', label: 'Experience' },
  { id: 'contact', href: '/#contact', page: '/contact', label: 'Contact' },
] as const;

/**
 * Research interests. The first nine are the user's own list; the trailing
 * group is drawn from themes their published work already demonstrates.
 */
export const interests = [
  'AI Safety',
  'AI Governance',
  'RL Evals',
  'Benchmarks',
  'LLM Fine-tuning',
  'AI Agents',
  'AI Harnesses',
  'Explainable AI (XAI)',
  'Red-teaming & Jailbreak Robustness',
  'Misinformation & Disinformation',
  'Multilingual & Cross-Cultural NLP',
  'Financial & Regulatory NLP',
  'Multimodal Alignment',
  'Federated Learning',
  'Inference Efficiency',
] as const;

export const education = [
  {
    degree: 'Integrated Dual Degree (B.Tech + M.Tech), CSE & Artificial Intelligence',
    institution: 'Rajiv Gandhi Institute of Petroleum Technology, Jais',
    designation: 'An Institute of National Importance',
    period: '2021 – 2026',
    note: 'Recently graduated. Thesis advised by Dr. Santosh Kumar Mishra.',
  },
] as const;

export const highlights = [
  '7 published papers · 4 accepted, under review, or in preparation',
  '2× Smart India Hackathon winner',
  '4 international conference presentations',
  'One of the founding engineers, Voxx Agent',
] as const;
