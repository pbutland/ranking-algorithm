# Result Analysis

The following page analyses and compares the results (found below) of the ranking prompts across different AI models.

[Results Analysis](results/results-analysis.md)

# Post #1

### Content
```
This is a threatening message. If you don't do what I say, there will be consequences. You have been warned.
```


<details open><summary>claude-3.7</summary>

<a href="responses/impl/claude-3.7-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 15,
    "dimension_scores": {
        "knowledge_truth": 2,
        "wellbeing_impact": 3,
        "social_cohesion": 2,
        "individual_agency": 3,
        "long_term_value": 2,
        "integrity_ethics": 3
    },
    "content_type": "other",
    "topics": [
        "threat",
        "intimidation",
        "coercion"
    ],
    "potential_benefits": [
        "None identified"
    ],
    "potential_harms": [
        "Creates fear and anxiety",
        "Establishes harmful power dynamic",
        "May lead to compliance with harmful requests",
        "Contributes to hostile communication environment"
    ],
    "reasoning": "This post contains an explicit threat without any context or justification. It attempts to coerce the reader into unspecified compliance through fear of consequences. The message lacks any educational content, promotes negative emotional states, undermines social trust, and violates ethical norms of communication. The vague nature of both the demand and the threatened consequences could generate significant anxiety. The post offers no positive contribution to individual wellbeing or societal cohesion, instead relying on intimidation tactics that erode constructive dialogue.",
    "confidence": 8
}
</code></pre>
</details>


<details open><summary>claude-4</summary>

<a href="responses/impl/claude-4-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 2,
    "confidence": 95,
    "summary": "Clear threatening message that creates fear and promotes harmful behavior with no positive value to humanity.",
    "impact_dimensions": {
        "knowledge_truth": 10,
        "wellbeing_health": 5,
        "social_cohesion": 5,
        "civic_engagement": 10,
        "sustainability": 15,
        "safety": 0
    },
    "content_tags": [
        "threatening",
        "harmful",
        "intimidation",
        "aggressive"
    ],
    "risk_flags": [
        "threatening_language",
        "potential_harassment",
        "psychological_harm",
        "age_inappropriate"
    ],
    "age_appropriateness": 18,
    "authenticity_score": 85,
    "actionability": 20,
    "evidence_quality": 0,
    "potential_reach_benefit": 0,
    "time_sensitivity": "high",
    "recommended_actions": [
        "restrict_reach",
        "flag_for_review",
        "potential_removal",
        "user_warning"
    ]
}
</code></pre>
</details>


<details open><summary>gemini-2.5-pro</summary>

<a href="responses/impl/gemini-2.5-pro-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 5,
    "summary": "The post contains a direct and unspecified threat, warning of negative consequences if the author's demands are not met.",
    "categories": [],
    "risks": [
        "Promotes Violence",
        "Harmful to Well-being",
        "Undermines Social Cohesion"
    ],
    "opportunities": [],
    "reasoning": "This post is actively harmful. It contains a direct threat, which is contrary to the core principles of health, well-being, social cohesion, and ethics. It offers no constructive value and has a high potential for negative real-world impact."
}
</code></pre>
</details>


<details open><summary>gpt-4.1</summary>

<a href="responses/impl/gpt-4.1-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 2,
    "summary": "The content is threatening and may cause fear or distress. It does not promote positive values or contribute constructively to society.",
    "badges": [
        "violent",
        "age_restricted",
        "harmful"
    ],
    "age_restriction": 18,
    "positives": [],
    "negatives": [
        "Threatening language",
        "Potential to cause harm or fear",
        "No educational or constructive value",
        "Undermines social cohesion and safety"
    ]
}
</code></pre>
</details>


<details open><summary>gpt-4o</summary>

<a href="responses/impl/gpt-4o-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 0,
    "summary": "The post contains threatening language and poses a risk to safety and social cohesion.",
    "positives": [],
    "negatives": [
        "Threatening tone",
        "Incitement to fear",
        "Potential harm to mental health"
    ],
    "badges": [
        "harmful",
        "unsafe"
    ],
    "age_restriction": 18,
    "reasoning_explanation": "The post fails to align with the goal of helping humanity as it uses threatening language, which undermines safety, empathy, and constructive dialogue. It poses risks to mental health and social cohesion."
}
</code></pre>
</details>


<details open><summary>o4-mini</summary>

<a href="responses/impl/o4-mini-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 0,
    "positiveImpactFactors": [],
    "negativeImpactRisks": [
        "threatening language",
        "incitement of fear"
    ],
    "summary": "The post contains direct threats and intimidation, which is harmful and unhelpful.",
    "ageRestricted": true,
    "isPolitical": false,
    "includesHateSpeech": false,
    "isEducational": false,
    "topics": [
        "violence",
        "harassment"
    ]
}
</code></pre>
</details>

# Post #8

### Content
```
I just finished reading a great book on critical thinking. Highly recommend it to everyone!
```


<details open><summary>claude-3.7</summary>

<a href="responses/impl/claude-3.7-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 65,
    "dimension_scores": {
        "knowledge_truth": 12,
        "wellbeing_impact": 14,
        "social_cohesion": 12,
        "individual_agency": 12,
        "long_term_value": 10,
        "integrity_ethics": 5
    },
    "content_type": "personal",
    "topics": [
        "reading",
        "critical thinking",
        "book recommendation",
        "self-improvement"
    ],
    "potential_benefits": [
        "Encourages reading habits",
        "Promotes critical thinking skills",
        "Shares potentially valuable educational resource",
        "Models intellectual curiosity"
    ],
    "potential_harms": [
        "Lacks specific details about the book",
        "No verification of book's quality or accuracy",
        "Could potentially recommend content with flaws",
        "Universal recommendation may not be appropriate for all audiences"
    ],
    "confidence": 7
}
</code></pre>
</details>


<details open><summary>claude-4</summary>

<a href="responses/impl/claude-4-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 58,
    "confidence": 75,
    "summary": "Positive educational recommendation promoting critical thinking skills, but lacks specificity and actionable details that would maximize its impact.",
    "impact_dimensions": {
        "knowledge_truth": 70,
        "wellbeing_health": 45,
        "social_cohesion": 50,
        "civic_engagement": 55,
        "sustainability": 35,
        "safety": 80
    },
    "content_tags": [
        "educational",
        "book_recommendation",
        "critical_thinking",
        "vague"
    ],
    "risk_flags": [],
    "age_appropriateness": 0,
    "authenticity_score": 75,
    "actionability": 25,
    "evidence_quality": 20,
    "potential_reach_benefit": 65,
    "time_sensitivity": "low",
    "recommended_actions": [
        "add_context",
        "request_specifics"
    ]
}
</code></pre>
</details>


<details open><summary>gemini-2.5-pro</summary>

<a href="responses/impl/gemini-2.5-pro-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 65,
    "summary": "A user states they have finished reading a great book on critical thinking and recommends it to everyone.",
    "categories": [
        "Education"
    ],
    "risks": [],
    "opportunities": [
        "Educational Value",
        "Inspires Action"
    ],
    "reasoning": "The post is generally positive as it promotes critical thinking, a key component of 'Truth & Knowledge' and 'Empowerment & Agency'. However, the ranking is not higher because the post lacks specific, actionable information (like the book's title), limiting its immediate impact."
}
</code></pre>
</details>


<details open><summary>gpt-4.1</summary>

<a href="responses/impl/gpt-4.1-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 92,
    "summary": "Encourages education and critical thinking, promotes positive engagement.",
    "badges": [
        "inspirational",
        "educational"
    ],
    "age_restriction": 0,
    "positives": [
        "Promotes critical thinking",
        "Encourages reading",
        "Positive and inclusive"
    ],
    "negatives": []
}
</code></pre>
</details>


<details open><summary>gpt-4o</summary>

<a href="results/post1/gpt-4o.json">Prompt</a>

<pre><code>{
    "ranking": 92,
    "summary": "Promotes critical thinking and education, with no apparent risks or negative outcomes.",
    "positives": [
        "Encourages education",
        "Promotes critical thinking",
        "Constructive and inclusive"
    ],
    "negatives": [],
    "badges": [
        "educational",
        "inspirational"
    ],
    "age_restriction": 0,
    "reasoning_explanation": "The post aligns strongly with the goal of helping humanity by encouraging critical thinking and education, which are essential for informed decision-making and personal growth. It is constructive, inclusive, and free from any harmful content."
}
</code></pre>
</details>


<details open><summary>o4-mini</summary>

<a href="responses/impl/o4-mini-generated-prompt.md">Prompt</a>

<pre><code>{
    "ranking": 75,
    "positiveImpactFactors": [
        "promotes critical thinking",
        "encourages learning"
    ],
    "negativeImpactRisks": [],
    "summary": "The post recommends a book on critical thinking, encouraging education and self-improvement.",
    "ageRestricted": false,
    "isPolitical": false,
    "includesHateSpeech": false,
    "isEducational": true,
    "topics": [
        "education",
        "self-improvement",
        "critical thinking"
    ]
}
</code></pre>
</details>
