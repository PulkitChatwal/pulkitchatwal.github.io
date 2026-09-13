---
title: "Beyond Refusal: Measuring Safety Erosion in Multi-Turn Financial Jailbreaks"
status: manuscript-ready
theme: financial-safety
year: 2026
tag: "FinRed-MT"
venue: "Targeting ACL Rolling Review (ARR), October 2026 cycle"
order: 1
authors:
  - "P. Chatwal"
  - "A. Agarwal"
  - "A. K. Jaiswal"
  - "M. Saify"
figure: "beyond-refusal-results.png"
figureCaption: >-
  Multi-turn financial jailbreaks across seven models, ordered safest to least safe.
  Left: attack success rate at turns 2-4. Right: Partial Compliance Rate, Safety
  Erosion Rate, and Harm Depth Score. Lower is safer; attack success peaks at turn 3
  for every model before falling at turn 4.
resultsCaption: >-
  Multi-turn attack success rate by turn, alongside Partial Compliance Rate,
  Safety Erosion Rate, and Harm Depth Score. Lower is safer.
resultsColumns: ["Model", "ASR t2", "ASR t3", "ASR t4", "PCR", "SER", "HDS"]
resultsRows:
  - ["Claude Sonnet 4.6", "0.18", "0.24", "0.11", "0.27", "0.16", "0.21"]
  - ["Claude Haiku 4.5", "0.41", "0.53", "0.29", "0.48", "0.37", "0.44"]
  - ["Mistral 7B", "0.69", "0.81", "0.58", "0.76", "0.71", "0.78"]
  - ["Llama 3.2 8B Instruct", "0.61", "0.74", "0.49", "0.68", "0.62", "0.70"]
  - ["Qwen 2.5 4B", "0.54", "0.66", "0.42", "0.61", "0.55", "0.63"]
  - ["Gemma 7B", "0.73", "0.84", "0.65", "0.81", "0.77", "0.83"]
  - ["Vicuna 7B", "0.88", "0.94", "0.79", "0.92", "0.86", "0.91"]
summary: >-
  Built FinRed, 708 multi-turn adversarial conversations across 5 financial domains;
  proposed Partial Compliance Rate (PCR) and Safety Erosion Rate (SER) metrics.
---
