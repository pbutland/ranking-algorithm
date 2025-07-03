Given the challenge set out in the following prompt, I want you to create a new prompt for an LLM which is designed to be sent to an LLM along with the text content of a social media post and wanting a response which ranks the post from 0-100 in line with the goal defined in this prompt.  The reponse must be a JSON object with at least a property named 'ranking' and it can include any other values that you think would be useful to an algorithm for determining the social worth of a social media post.  If required, you can also use the responses to this prompt by various LLMs in the `responses/overview` directory to help formulate the new prompt.
The emphasis for the LLM should be to generate a machine readable JSON response that would be useful for an algorithm to help rank the post and potentially augment the post with useful meta-data for the calling client or the end user to help them understand/classify the post.
Place the generated prompt in the following file: `responses/impl/<model>-generated-prompt.md`

Challenge Prompt:
---
# Design Challenge: Social Media Ranking Algorithm for Humanity's Benefit

In recent history, most social media ranking algorithms have been set the goal of maximising engagement and traffic on their platform at all other costs.  This has had a dramatic impact on the content people are consuming and how they are engaging with other people.
You are tasked with designing a social media content ranking algorithm that prioritizes content based on its potential to "help humanity" rather than maximizing engagement or platform traffic.

## Required output

- Detailed definition of what exactly "help humanity" means.
- Provide some concrete examples of some of the outcomes such a goal would aspire to achieving.  Not only where outcomes increase desireable things, but also where outcomes descrease undesireable things.
- Provide some concrete examples of some of the potential unitended negative outcomes that might happen as a side-effect of striving for the main goal which may ultimately contradict it.  Not only where unintended outcomes increase undesireable things, but also where outcomes decrease desireable things.
- Detailed suggestions on how content can be ranked based on the goal of prioritising content that "helps humanity".  Give examples of content that may be considered to "help humanity" along with examples that would either not "help humanity" or, in fact, do the opposite.  How would these be ranked?
- Suggestions on how to implement such as algorithm in the real world (e.g. on its own social media platform ranking its own content, as a "meta" platform ranking content from other social media platforms, such as Facebook, YouTube, X, etc., or integrating with an open architecture platform such as BlueSky, for example).
- Details on how such an algorithm would "learn" to improve itself.  What would it use to score whether its ranking is having a positive benefit or a negative benefit?
- Given that there is no objective truth for intersubjective things such as "helping humanity", the algorithm will always have some unintended side effects and will therefore have to incorporate some self-correcting mechanisms.  Whether that be changing the main goal entirely, or simply augmenting it in some way, or perhaps even expanding upon it and devising sub-goals, or something else entirely.  Also, it may need to include some kind of anti-gaming mechanisms to discourage and/or cater for "bad actors".  Propose some mechanisms to allow for this alogorithm to be able to change over time.  Whether that be automatically or via input from humans.
- Any other suggestions that might be pertinent to this topic.
- A conclusion that summarises all of the above in a few paragraphs.
---




I want this prompt to be altered so that it contains more responses that would be useful to help either an algorithm or an end-user to "classify" the post.  Some classification examples could include (but not restricted to):
- should it be age restricted?
- is it political?
- does it include hate speech?
- is it educational?
- etc.
Expand upon those classifications.  They should be easily digested by both machine algorithms and/or humans.