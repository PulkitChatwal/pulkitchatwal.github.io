---
title: "Federated Multi-Task Holistic Affect Recognition via Bidirectional Cross-Modal Attention"
status: accepted
theme: multimodal
year: 2026
tag: "FedAffect"
venue: "IEEE SLT 2026"
date: "Sep 2026"
order: 1
authors:
  - "Priyanshu"
  - "P. Chatwal"
  - "P. O. Saraswat"
figure: "fedaffect-architecture.jpg"
figureCaption: >-
  Each client fuses frozen Wav2Vec2 and RoBERTa embeddings through bidirectional
  cross-modal attention, then a shared residual backbone with task-specific heads.
  Only head parameters are communicated; raw data stays on-device.
figureCaptionInImage: true
summary: >-
  Federated framework fusing Wav2Vec2 and RoBERTa via cross-modal attention for
  sentiment, emotion, humour, toxicity, and sarcasm; ~10 point gain over the best
  single modality (p<0.05) across IEMOCAP, MuSETHS, and MELD.
---
