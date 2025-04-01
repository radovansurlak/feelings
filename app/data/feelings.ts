export const feelingsCategories: FeelingCategory[] = [
	// Positive - High Energy
	{
		category: "Joyful",
		feelings: [
			{
				name: "Happy",
				description: "Feeling or showing pleasure or contentment.",
			},
			{
				name: "Joyful",
				description:
					"Feeling, expressing, or causing great pleasure and happiness.",
			},
			{
				name: "Content",
				description: "In a state of peaceful satisfaction.",
			},
			{
				name: "Pleased",
				description:
					"Feeling or showing pleasure and satisfaction, especially at an event or a situation.",
			}, // Note: Added 'Pleased' as it fits well, though not explicitly in the original list unless covered by Happy/Content. Assuming it's implicitly covered or a useful addition.
			{
				name: "Playful",
				description: "Fond of games and amusement; lighthearted.",
			},
			{
				name: "Cheeky",
				description: "Playfully mischievous or amusing.",
			},
			{
				name: "Free",
				description: "Feeling liberated and unconstrained.",
			},
		],
	},
	{
		category: "Engaged", // Renamed from Inspired to be broader
		feelings: [
			{
				name: "Inspired",
				description:
					"Feeling mentally stimulated to do or feel something, especially creative.",
			},
			{
				name: "Hopeful",
				description:
					"Feeling or inspiring optimism about a future event.",
			},
			{
				name: "Optimistic",
				description: "Hopeful and confident about the future.",
			},
			{
				name: "Interested",
				description:
					"Showing curiosity or concern about something or someone.",
			},
			{ name: "Inquisitive", description: "Curious or inquiring." },
			{
				name: "Curious",
				description: "Eager to know or learn something.",
			},
			{
				name: "Excited",
				description: "Feeling very enthusiastic and eager.",
			},
			{
				name: "Energetic",
				description: "Showing or involving great activity or vitality.",
			},
			{
				name: "Eager",
				description: "Strongly wanting to do or have something.",
			},
		],
	},
	{
		category: "Proud / Confident",
		feelings: [
			{
				name: "Powerful",
				description: "Having great power or strength.",
			},
			{
				name: "Creative",
				description:
					"Relating to or involving the imagination or original ideas.",
			},
			{
				name: "Courageous",
				description: "Not deterred by danger or pain; brave.",
			},
			{
				name: "Accepted",
				description: "Regarded as normal, valid, or acceptable.",
			},
			{
				name: "Valued",
				description:
					"Considered to be important or beneficial; cherished.",
			},
			{
				name: "Respected",
				description:
					"Deeply admired for abilities, qualities, or achievements.",
			},
			{
				name: "Proud",
				description:
					"Feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated.",
			},
			{
				name: "Confident",
				description: "Feeling or showing certainty about something.",
			},
			{
				name: "Successful",
				description:
					"Having achieved desired aims or attained prosperity.",
			},
		],
	},
	// Positive - Low Energy
	{
		category: "Peaceful",
		feelings: [
			{
				name: "Trusting",
				description:
					"Inclined to believe in the reliability, truth, ability, or strength of someone or something.",
			},
			{
				name: "Intimate",
				description: "Feeling closely acquainted; familiar, close.",
			}, // Note: 'Intimate' could also fit Affectionate.
			{
				name: "Sensitive",
				description:
					"Quick to detect or respond to slight changes, signals, or influences; easily affected emotionally.",
			}, // Can be positive or negative context.
			{
				name: "Peaceful",
				description: "Free from disturbance; tranquil.",
			},
			{
				name: "Thankful",
				description: "Pleased and relieved; expressing gratitude.",
			},
			{
				name: "Loving",
				description: "Feeling or showing deep affection or care.",
			},
		],
	},
	// Negative - Fear
	{
		category: "Fearful",
		feelings: [
			{
				name: "Fearful",
				description: "Feeling afraid; showing fear or anxiety.",
			},
			{ name: "Scared", description: "Fearful; frightened." },
			{ name: "Frightened", description: "Afraid or anxious." },
			{
				name: "Threatened",
				description:
					"Feeling endangered or vulnerable due to potential hostility or harm.",
			},
			{
				name: "Insecure",
				description:
					"Uncertain or anxious about oneself; not confident.",
			},
			{
				name: "Weak",
				description:
					"Lacking physical strength and energy; easily broken or damaged.",
			}, // Often linked to fear/vulnerability
		],
	},
	{
		category: "Anxious / Overwhelmed",
		feelings: [
			{
				name: "Anxious",
				description:
					"Experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome.",
			},
			{
				name: "Overwhelmed",
				description:
					"Feeling buried or drowned beneath a huge mass of something, especially emotions or work.",
			},
			{
				name: "Worried",
				description:
					"Feeling anxious or troubled about actual or potential problems.",
			},
			{
				name: "Nervous",
				description:
					"Easily agitated or alarmed; tending to be anxious.",
			},
			{
				name: "Stressed",
				description: "Feeling worried or unable to relax.",
			},
			{
				name: "Out of control",
				description:
					"Feeling unable to manage events or one's own behavior.",
			},
			{
				name: "Busy",
				description:
					"Feeling occupied with activity; having a great deal to do.",
			}, // Often leads to stress
			{
				name: "Rushed",
				description: "Feeling forced to act with undue haste.",
			},
			{
				name: "Pressured",
				description:
					"Feeling constrained or forced by urgency or demands.",
			},
		],
	},
	// Negative - Vulnerability / Inadequacy
	{
		category: "Vulnerable / Inadequate",
		feelings: [
			{
				name: "Helpless",
				description: "Unable to defend oneself or to act without help.",
			},
			{
				name: "Inadequate",
				description:
					"Lacking the quality or quantity required; insufficient for a purpose.",
			},
			{
				name: "Inferior",
				description: "Feeling lower in rank, status, or quality.",
			},
			{
				name: "Worthless",
				description:
					"Having no real value or use; feeling without value.",
			},
			{
				name: "Insignificant",
				description:
					"Feeling too small or unimportant to be worth consideration.",
			},
			{
				name: "Powerless",
				description: "Without ability, influence, or power.",
			},
			{
				name: "Vulnerable",
				description:
					"Feeling susceptible to physical or emotional attack or harm.",
			},
			{
				name: "Fragile",
				description: "Feeling easily broken or damaged; delicate.",
			},
			{
				name: "Exposed",
				description: "Feeling unprotected or vulnerable.",
			},
			{
				name: "Victimised",
				description:
					"Feeling singled out for cruel or unjust treatment.",
			}, // Spelled 'Victimized' in US English
		],
	},
	// Negative - Rejection / Loneliness
	{
		category: "Rejected / Lonely",
		feelings: [
			{
				name: "Rejected",
				description:
					"Feeling dismissed as inadequate, inappropriate, or not to one's taste.",
			},
			{
				name: "Excluded",
				description:
					"Feeling denied access to or barred from a place, group, or privilege.",
			},
			{
				name: "Lonely",
				description: "Sad because one has no friends or company.",
			},
			{
				name: "Isolated",
				description:
					"Feeling far away from other places, buildings, or people; remote.",
			},
			{
				name: "Abandoned",
				description: "Feeling deserted or left behind.",
			},
			{
				name: "Distant",
				description: "Feeling reserved or uncommunicative.",
			},
			{
				name: "Withdrawn",
				description: "Not wanting to communicate with other people.",
			},
		],
	},
	// Negative - Anger
	{
		category: "Angry",
		feelings: [
			{
				name: "Angry",
				description:
					"Feeling or showing strong annoyance, displeasure, or hostility.",
			},
			{
				name: "Resentful",
				description:
					"Feeling or expressing bitterness or indignation at having been treated unfairly.",
			},
			{
				name: "Bitter",
				description:
					"Feeling anger, hurt, or resentment because of bad experiences or unjust treatment.",
			},
			{
				name: "Indignant",
				description:
					"Feeling or showing anger or annoyance at what is perceived as unfair treatment.",
			},
			{
				name: "Violated",
				description:
					"Feeling that one's rights, privacy, or sense of self has been transgressed.",
			},
			{ name: "Mad", description: "Very angry." },
			{ name: "Furious", description: "Extremely angry." },
			{
				name: "Jealous",
				description:
					"Feeling or showing envy of someone or their achievements and advantages, or protective/anxious about one's own.",
			},
			{
				name: "Aggressive",
				description: "Ready or likely to attack or confront.",
			},
			{
				name: "Provoked",
				description: "Feeling stirred to anger or annoyance.",
			},
			{
				name: "Hostile",
				description:
					"Showing or feeling opposition or dislike; unfriendly.",
			},
			{
				name: "Frustrated",
				description:
					"Feeling or expressing distress and annoyance, especially because of inability to change or achieve something.",
			},
			{
				name: "Infuriated",
				description: "Feeling extremely angry and impatient.",
			},
			{ name: "Annoyed", description: "Slightly angry; irritated." },
		],
	},
	{
		category: "Hurt / Disrespected", // Feelings often caused *by* others' actions
		feelings: [
			{
				name: "Let down",
				description:
					"Feeling disappointed by someone's failure to fulfill an expectation or promise.",
			},
			{
				name: "Betrayed",
				description: "Feeling harmed by someone's disloyalty.",
			},
			{
				name: "Humiliated",
				description: "Feeling ashamed or foolish, especially publicly.",
			},
			{
				name: "Disrespected",
				description: "Feeling a lack of respect or courtesy.",
			},
			{
				name: "Ridiculed",
				description:
					"Feeling subjected to dismissive language or behavior.",
			},
			{
				name: "Persecuted",
				description:
					"Feeling subjected to hostility and ill-treatment, especially because of race or political or religious beliefs.",
			},
		],
	},
	// Negative - Disgust
	{
		category: "Disgusted / Critical",
		feelings: [
			{
				name: "Critical",
				description:
					"Expressing adverse or disapproving comments or judgments.",
			},
			{
				name: "Sceptical",
				description:
					"Not easily convinced; having doubts or reservations.",
			}, // Spelled 'Skeptical' in US English
			{
				name: "Dismissive",
				description:
					"Feeling or showing that something is unworthy of consideration.",
			},
			{
				name: "Disgusted",
				description:
					"Feeling profound disapproval accompanied by revulsion.",
			},
			{
				name: "Disapproving",
				description: "Expressing an unfavorable opinion.",
			},
			{
				name: "Judgmental",
				description: "Displaying an overly critical point of view.",
			},
			{
				name: "Condemned",
				description: "Feeling strongly disapproved of.",
			},
			{
				name: "Uncomfortable",
				description:
					"Experiencing slight physical or mental discomfort.",
			},
			{ name: "Appalled", description: "Greatly dismayed or horrified." },
			{ name: "Revolted", description: "Feeling disgust." },
			{ name: "Awful", description: "Feeling very bad or unpleasant." }, // General negative, fits here
			{
				name: "Nauseated",
				description:
					"Feeling as if about to vomit; feeling sick or disgusted.",
			},
			{
				name: "Detestable",
				description: "Feeling intense dislike for something.",
			},
			{
				name: "Repelled",
				description: "Feeling driven back or away; disgusted.",
			},
			{
				name: "Horrified",
				description: "Filled with horror; extremely shocked.",
			}, // Can overlap with Fear/Surprise
		],
	},
	// Negative - Sadness / Grief
	{
		category: "Sad / Grieving",
		feelings: [
			{ name: "Sad", description: "Feeling or showing sorrow; unhappy." },
			{
				name: "Hurt",
				description: "Feeling emotional pain or distress.",
			},
			{
				name: "Disappointed",
				description:
					"Sad or displeased because someone or something has failed to fulfill one's hopes or expectations.",
			},
			{
				name: "Depressed",
				description: "Feeling severe despondency and dejection.",
			},
			{
				name: "Empty",
				description: "Feeling a lack of purpose or meaning; hollow.",
			},
			{
				name: "Guilty",
				description:
					"Feeling responsible or regretful for a perceived offense, real or imaginary.",
			},
			{
				name: "Remorseful",
				description:
					"Feeling deep regret or guilt for a wrong committed.",
			},
			{
				name: "Ashamed",
				description:
					"Embarrassed or guilty because of one's actions, characteristics, or associations.",
			},
			{
				name: "Despair",
				description: "The complete loss or absence of hope.",
			},
			{
				name: "Grief",
				description:
					"Deep sorrow, especially that caused by someone's death.",
			},
			{
				name: "Embarrassed",
				description: "Feeling awkward, self-conscious, or ashamed.",
			},
		],
	},
	// Negative - Low Energy / Disengaged
	{
		category: "Tired / Bored",
		feelings: [
			{ name: "Tired", description: "In need of sleep or rest; weary." },
			{
				name: "Unfocused",
				description: "Lacking a clear aim or concentration.",
			},
			{ name: "Sleepy", description: "Needing or ready for sleep." },
			{
				name: "Bored",
				description:
					"Feeling weary because one is unoccupied or lacks interest in one's current activity.",
			},
			{
				name: "Apathetic",
				description:
					"Showing or feeling no interest, enthusiasm, or concern.",
			},
			{
				name: "Indifferent",
				description:
					"Having no particular interest or sympathy; unconcerned.",
			},
			{
				name: "Numb",
				description: "Deprived of the power of sensation or feeling.",
			},
		],
	},
	// Surprise / Confusion
	{
		category: "Surprised / Confused",
		feelings: [
			{
				name: "Surprised",
				description: "Feeling mild astonishment or shock.",
			},
			{
				name: "Amazed",
				description: "Feeling great surprise or wonder.",
			},
			{
				name: "Awe",
				description:
					"A feeling of reverential respect mixed with fear or wonder.",
			},
			{
				name: "Astonished",
				description: "Greatly surprised or impressed; amazed.",
			},
			{
				name: "Confused",
				description: "Unable to think clearly; bewildered.",
			},
			{
				name: "Perplexed",
				description: "Completely baffled; very puzzled.",
			},
			{
				name: "Disillusioned",
				description:
					"Disappointed in someone or something that one discovers to be less good than one had believed.",
			},
			{ name: "Startled", description: "Feeling sudden shock or alarm." },
			{
				name: "Dismayed",
				description: "Feeling consternation and distress.",
			},
			{ name: "Shocked", description: "Feeling surprised and upset." },
		],
	},
	// Other / Ambiguous
	{
		category: "Other / Uncertain", // Catch-all for less specific or context-dependent terms
		feelings: [
			{
				name: "Hesitant",
				description:
					"Tentative, unsure, or slow in acting or speaking.",
			},
			// { name: "Bad", description: "Feeling unwell, unhappy, or unfavorable." }, // 'Bad' is very general, potentially omit or place carefully.
			// Note: 'Aroused' could be listed under 'Engaged' or a separate 'Sensual' category but wasn't clearly positive/negative without context. Leaving out for now based on common feeling wheels.
		],
	},
];

// Interface definition (assuming TypeScript)
interface Feeling {
	name: string;
	description: string;
}

interface FeelingCategory {
	category: string;
	feelings: Feeling[];
}
