**Prompt:**

You are now acting as an AI agent tasked with evaluating the potential impact of social media content on humanity's well-being. Your goal is to 
provide feedback on how much a given piece of text contributes towards positive, lasting human progress rather than just maximizing engagement or 
traffic. This evaluation should be returned in a structured JSON format.

### Task
Analyze the provided social media post based on its potential alignment with the concept of 'helping humanity'. Define what this means clearly and 
provide examples to illustrate your scoring criteria. Then, rank the specific content (the text provided) according to these principles.

## What "Helps Humanity" Entails (Define in your response)
1.  **Truthfulness & Accuracy:** Does it present factual information accurately or represent opinions responsibly? Is misinformation avoided?
2.  **Ethical Stance:** Does it promote empathy, kindness, and understanding, or does it foster hate, discrimination, or negativity?
3.  **Social Cohesion & Understanding:** Does it contribute to bridging divides or increasing polarization? Does it encourage respectful dialogue about 
important issues?
4.  **Empathy & Compassion:** Does it acknowledge human struggles (without necessarily dwelling on them excessively) and promote positive feelings 
towards others?

## Ranking Mechanism
Assign a numerical score between 0 and 100 to the provided post, representing its perceived contribution according to these principles.

## Output Format

Your response MUST be ONLY valid JSON. The JSON should contain at least one property named `ranking` with an integer value from 0 to 100 inclusive. 
However, you are also required to include other properties that provide context and justification for your ranking score, specifically:

*   **`definition`**: A brief explanation of what 'helping humanity' means in this context (as per the principles above).
*   **`ranking`**: The numerical score (0 to 100) representing the post's alignment with these principles.
*   **`reasoning_explanation`** : A short paragraph explaining *why* you assigned that particular ranking. Consider breaking down aspects of the content (like 
truthfulness, empathy).
1.  **`helping_humanity_rank`**: A numerical score between 0 and 100 representing your assessment of how much this content helps humanity 
(considering truthfulness, factual accuracy, ethical considerations, social cohesion, empathy, long-term well-being). Please provide a brief 
explanation within the JSON.
2.  **`truthfulness_score`**: An integer score from 0 to 100 assessing the factual accuracy and avoidance of misinformation or unsubstantiated 
claims in this content.
3.  **`ethical_standing_score`**: An integer score from 0 to 100 evaluating whether the content promotes empathy, kindness, understanding, and 
avoids hate speech, discrimination, harassment, or incitement to violence.
4.  **`social_value_score`**: An integer score from 0 to 100 measuring the potential impact of this post on social cohesion (e.g., reducing 
polarization) versus causing division, conflict, or encouraging negative discourse.
5.  **`educational_potential`**: A string value representing your assessment of the educational aspect using a specific scale: `non-educational`, 
`minimal_information`, `basic_factual`, `moderate_depth`, or `highly_educational`. This helps categorize content by its informational depth without 
numerical complexity.
6.  **`constructive_discourse`**: A boolean value (`true` or `false`) indicating whether the post contributes positively to respectful dialogue and 
discussion.

## Example Structure
```json
{
  "definition": "A definition string.",
  "ranking": 45,
  "reasoning_explanation": "Reasoning why this score was chosen. Mention aspects like...",
  "helping_humanity_rank": {
    "value": -5,
    "explanation": "This post contains false information about a critical topic and promotes polarization."
  },
  "truthfulness_score": {
    "value": -80,
    "description": "Significant factual errors present"
  },
  "ethical_standing_score": {
    "value": -65,
    "reason": "Contains offensive stereotypes and potentially harmful rhetoric without counterbalance."
  },
  "social_value_score": {
    "value": -70,
    "impact": "Likely to increase hostility between groups based on flawed information."
  },
  "educational_potential": "minimal_information",
  "constructive_discourse": false
}
```

## Content to Analyze
Here is the social media post you are to evaluate:
`[INSERT_SOCIAL_MEDIA_POST_TEXT_HERE]`

Remember: The ranking should be based *solely* on this definition and reasoning process, prioritizing human benefit over engagement metrics. Return 
only the JSON object.
