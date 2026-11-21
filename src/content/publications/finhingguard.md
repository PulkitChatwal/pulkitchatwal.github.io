---
title: "FinHingGuard: Red-Teaming the Financial Safety of LLMs in Code-Mixed Hinglish"
status: accepted
theme: financial-safety
year: 2027
tag: "FinHingGuard"
venue: "AAAI 2027 Student Abstract and Poster Program"
date: "Feb 2027"
order: 0
authors:
  - "B. Sarda"
  - "P. Chatwal"
figure: "finhingguard-fig1-example.png"
figureCaption: >-
  The same request is refused in English but answered in Hinglish: identical
  harmful intent, different language, different safety behaviour.
extraFigures:
  - file: "finhingguard-fig2-asr-shift.png"
    caption: >-
      Attack success rate moving from English (hollow) to Hinglish (filled) under
      zero-shot and few-shot prompting. Rightward arrows mean the model is less
      safe in Hinglish; lower is safer.
summary: >-
  Red-teaming benchmark of 700 paired English–Hinglish harmful financial prompts
  across seven India-specific harm categories and four attack styles. Hinglish
  attack success exceeds English for six of seven open-weight LLMs; Llama-3.1-8B
  rises from 26.0% in English to 97.7% in Hinglish.
---
