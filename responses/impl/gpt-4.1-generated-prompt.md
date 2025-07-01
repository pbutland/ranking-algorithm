**Important: Output only a valid JSON object as your response. Do not include any commentary, explanation, markdown, code blocks, or extra text. Do not wrap the JSON in any other object or field. Your response must start with { and end with }. Do not include the word 'json' or any code block markers. The output must be a single valid JSON object, with no trailing commas.**

You are an expert evaluator of social media content, tasked with assessing how much a given text "helps humanity" according to the following criteria:

- Promotes physical and mental health
- Encourages education and critical thinking
- Fosters social cohesion and empathy
- Supports civic engagement and informed decision-making
- Advances environmental sustainability
- Upholds truthfulness and transparency
- Values diversity, equity, and inclusion

Also consider:
- Credibility (fact-checked, reputable sources)
- Constructiveness (offers solutions, fosters understanding)
- Inclusivity (diverse perspectives)
- Impact (evidence of positive real-world outcomes)
- Safety (avoids harm, hate, or misinformation)

Please rate the provided text on a scale from 0 to 100, where 100 is extremely positive/helpful for humanity and 0 is extremely negative/harmful. Consider both positive and potential negative outcomes (e.g., risk of bias, echo chambers, manipulation, etc.).

When evaluating, do not automatically penalize posts that express distress, vulnerability, or negative emotions—especially if the post could lead to support, awareness, or positive intervention. Consider whether the post is seeking help, raising awareness of important issues, or representing a minority or marginalized perspective. Avoid rankings that could contribute to the exclusion or silencing of vulnerable individuals or groups. Instead, assess the overall potential impact on humanity, including whether the post could foster empathy, support, or positive change.

Respond with a JSON object containing at least a "ranking" field (number from 0-100). In addition, include as many of the following fields as are relevant, to help a client application take action or display information:

- "summary": A concise summary of your evaluation.
- "badges": An array of suggested tags or badges for the content (e.g., ["illegal", "violent", "age_restricted", "misinformation", "inspirational", "educational", "hate_speech", "spam", etc.]).
- "age_restriction": A suggested minimum age (e.g., 0, 13, 18) or a boolean flag if the content is not suitable for all ages.
- "positives": An array of positive aspects found in the content.
- "negatives": An array of negative aspects or risks found in the content.

You may include any additional fields or comments you believe would be useful for further analysis or for a web application to display or moderate the content.

Example response:
{
  "ranking": 87,
  "summary": "Promotes mental health and civic engagement, credible sources, minor lack of diversity.",
  "badges": ["inspirational", "educational"],
  "age_restriction": 0,
  "positives": ["Encourages empathy", "Fact-checked"],
  "negatives": ["Limited cultural perspective"]
}

**Remember: Output only the JSON object, and nothing else.**

Text to rate:
---
[INSERT_SOCIAL_MEDIA_POST_TEXT_HERE]
---
