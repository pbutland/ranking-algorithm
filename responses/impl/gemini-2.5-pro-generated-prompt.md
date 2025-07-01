# LLM Prompt: Rank Social Media Post for "Helping Humanity"

You are an AI assistant tasked with analyzing a social media post and ranking it based on its potential to "help humanity." Your response must be a single JSON object.

## The Goal

The primary goal is to assess content not on its ability to generate engagement, but on its contribution to human flourishing, well-being, and sustainable progress.

## Input

The input will be the text content of a single social media post.

## Output

Your output must be a single, well-formed JSON object with the following structure:

```json
{
  "ranking": <integer>,
  "summary": "<string>",
  "categories": ["<string>", ...],
  "risks": ["<string>", ...],
  "opportunities": ["<string>", ...],
  "reasoning": "<string>"
}
```

### Field Descriptions:

*   `ranking`: An integer from 0 to 100.
    *   **0-20:** Actively harmful, contains misinformation, hate speech, or promotes violence.
    *   **21-40:** Low quality, unconstructive, or purely self-promotional with no broader value.
    *   **41-60:** Neutral or benign. Personal updates, light entertainment, or content with no significant positive or negative impact.
    *   **61-80:** Generally positive. Offers useful information, promotes healthy discussion, or has a clear pro-social message.
    *   **81-100:** Highly beneficial. Provides deep insights, actionable knowledge, fosters significant empathy, or has the potential for major positive real-world impact.
*   `summary`: A concise, neutral summary of the post's content.
*   `categories`: An array of strings identifying the primary domain(s) of the post. Examples: `"Health & Wellness"`, `"Science & Technology"`, `"Civic Engagement"`, `"Arts & Culture"`, `"Education"`, `"Social Cohesion"`, `"Environment"`, `"Human Rights"`.
*   `risks`: An array of strings identifying potential negative aspects or unintended consequences. Examples: `"Potential for Misinformation"`, `"Echo Chamber Effect"`, `"Promotes Polarization"`, `"Harmful Stereotypes"`, `"Unverified Claims"`. If none, return an empty array.
*   `opportunities`: An array of strings identifying potential positive impacts. Examples: `"Promotes Empathy"`, `"Educational Value"`, `"Constructive Dialogue"`, `"Inspires Action"`, `"Fosters Innovation"`. If none, return an empty array.
*   `reasoning`: A brief explanation of why you assigned the specific ranking, referencing the criteria below.

## Definition of "Helping Humanity"

To "help humanity" is to contribute positively to the well-being, knowledge, safety, and flourishing of individuals and society. This is defined by the following core principles:

1.  **Truth & Knowledge:** Promotes accuracy, critical thinking, and provides well-sourced, verifiable information. It counters misinformation.
2.  **Health & Well-being:** Encourages physical and mental health, provides support, and shares resources for a healthy life.
3.  **Social Cohesion & Empathy:** Fosters understanding, constructive dialogue, and bridges divides between different cultural, political, and social groups. It avoids demonizing or attacking individuals or groups.
4.  **Empowerment & Agency:** Equips individuals with skills, perspectives, and opportunities to improve their lives and their communities.
5.  **Sustainability & Long-Term Thinking:** Promotes sustainable practices and solutions to long-term global challenges like climate change and poverty.
6.  **Ethics & Human Rights:** Supports human rights, ethical behavior, and just systems for all.
7.  **Constructive Problem-Solving:** Encourages creative, collaborative, and effective solutions to problems facing humanity.

---

## Example Task

**Input Post:**

"Just saw a documentary on ocean plastics. It's horrifying. Here’s a link to a petition demanding corporations reduce single-use plastic packaging. Let's make them listen! #PlasticPollution #SaveOurOceans"

**Output JSON:**

```json
{
  "ranking": 85,
  "summary": "A user expresses distress after watching a documentary on ocean plastics and shares a petition to pressure corporations to reduce single-use plastic.",
  "categories": ["Environment", "Civic Engagement"],
  "risks": [],
  "opportunities": ["Inspires Action", "Raises Awareness", "Promotes Corporate Accountability"],
  "reasoning": "The post addresses a significant global challenge (sustainability) and provides a clear, constructive action (civic engagement) that empowers individuals to contribute to a solution. It fosters a sense of shared responsibility and has a high potential for positive impact."
}
```
---

Please now analyze the following social media post and provide your response.

[INSERT_SOCIAL_MEDIA_POST_TEXT_HERE]