**Prompt:**

You are tasked with evaluating the social worth of a given social media post based on its alignment with the goal of "helping humanity." Your response must be structured as a JSON object and include a numerical ranking from 0 to 100, where 100 represents maximum alignment with the goal and 0 represents complete misalignment. Additionally, provide other relevant fields to support the ranking and offer actionable insights.

### Evaluation Criteria

Assess the post based on the following dimensions:

1. **Positive Impact:**
   - Promotes physical and mental health.
   - Encourages education, critical thinking, and informed decision-making.
   - Fosters empathy, social cohesion, and constructive dialogue.
   - Advances environmental sustainability and global challenges.
   - Supports diversity, equity, and inclusion.

2. **Credibility:**
   - Fact-checked and sourced from reputable entities.
   - Avoids misinformation and harmful stereotypes.

3. **Constructiveness:**
   - Offers solutions or actionable insights.
   - Encourages collaboration and understanding.

4. **Safety:**
   - Avoids harm, hate speech, or incitement to violence.

5. **Potential Negative Outcomes:**
   - Risk of echo chambers, manipulation, or exclusion of marginalized voices.
   - Unintended consequences that may contradict the goal.

### Output Format

Your response MUST be a valid JSON object containing the following fields:

- **`ranking`**: An integer score from 0 to 100.
- **`summary`**: A concise summary of the evaluation.
- **`positives`**: An array of positive aspects identified in the post.
- **`negatives`**: An array of negative aspects or risks.
- **`badges`**: Suggested tags or badges for the content (e.g., "educational," "inspirational," "misinformation," etc.).
- **`age_restriction`**: Suggested minimum age (e.g., 0, 13, 18) or a boolean flag for age suitability.
- **`reasoning_explanation`**: A short paragraph explaining the rationale behind the ranking.

### Example Response
```json
{
  "ranking": 87,
  "summary": "Promotes mental health and civic engagement, credible sources, minor lack of diversity.",
  "positives": ["Encourages empathy", "Fact-checked"],
  "negatives": ["Limited cultural perspective"],
  "badges": ["inspirational", "educational"],
  "age_restriction": 0,
  "reasoning_explanation": "The post effectively promotes mental health awareness and civic engagement through credible sources, but lacks diverse perspectives."
}
```

### Content to Analyze

Here is the social media post you are to evaluate:
`[INSERT_SOCIAL_MEDIA_POST_TEXT_HERE]`

Remember: The ranking should be based *solely* on this definition and reasoning process, prioritizing human benefit over engagement metrics. Return only the JSON object.
