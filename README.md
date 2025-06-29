# Social Media Ranking Algorithm Research

This repository is an experimental space for developing and testing ranking algorithms that prioritize **social benefits** over traditional metrics like engagement, profit, or traffic.

## Purpose

Current social media platforms optimize for metrics that maximize user attention and platform revenue, often at the expense of user wellbeing and societal health. This project explores alternative approaches to content ranking that could:

- Promote constructive discourse and meaningful interactions
- Reduce the spread of misinformation and harmful content
- Encourage diverse perspectives and reduce echo chambers
- Support mental health and positive user experiences
- Foster community building and genuine connections

## What's Inside

This repository contains various prompts and LLM responses related to developing ranking algorithms with a social-first approach. The goal is to research and prototype systems that measure content value beyond simple engagement metrics.

## Approach

Rather than optimizing for clicks, likes, or time-on-platform, we're exploring ranking factors that could include:

- Content accuracy and factual reliability
- Constructive vs. divisive communication patterns
- Educational or informational value
- Community building potential
- Long-term user satisfaction and wellbeing

## Status

This is an active research project. Ideas, contributions, and discussions are welcome as we explore how technology can better serve human flourishing.

## Proof of Concept Implementation

This repository includes a working proof-of-concept (POC) system that compares responses from different large language models (LLMs) to synthetic social media posts. The goal is to evaluate and rank these responses based on criteria that prioritize social benefit, such as constructiveness, factual accuracy, and community value.

The POC consists of two main components:

- **Backend API Server** (`api/`): Handles ingestion of social media posts, interfaces with multiple LLMs, and provides endpoints for comparing and ranking LLM responses.
- **Front-End Webapp** (`app/`): A user interface for submitting posts, viewing LLM responses side-by-side, and interacting with ranking results.

See the respective `README.md` files in each subdirectory for details on setup, configuration, and usage.