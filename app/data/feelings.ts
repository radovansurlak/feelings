type FeelingCategory = {
	category: string;
	feelings: { name: string; description: string }[];
};

export const feelingsCategories: FeelingCategory[] = [
	{
		category: "Affectionate",
		feelings: [
			{
				name: "Compassionate",
				description:
					"Feeling or showing sympathy and concern for others.",
			},
			{
				name: "Friendly",
				description: "Being kind and pleasant to others.",
			},
			{
				name: "Loving",
				description:
					"Feeling or showing deep affection and care for someone.",
			},
			{
				name: "Open-hearted",
				description: "Being candid and sincere in expression.",
			},
			{
				name: "Sympathetic",
				description:
					"Showing understanding and sharing in another's feelings.",
			},
			{
				name: "Tender",
				description: "Showing gentleness and concern or sympathy.",
			},
			{
				name: "Touched",
				description: "Emotionally affected by something.",
			},
			{
				name: "Warm",
				description: "Displaying affection, kindness, and cordiality.",
			},
		],
	},
	{
		category: "Inspired",
		feelings: [
			{
				name: "Amazed",
				description: "Feeling great surprise or wonder."
			},
			{
				name: "Awed",
				description: "Having a feeling of reverential respect mixed with fear or wonder."
			},
			{
				name: "Wonder",
				description: "A feeling of amazement and admiration, caused by something beautiful, remarkable, or unfamiliar."
			},
		],
	},
	{
		category: "Engaged",
		feelings: [
			{
				name: "Absorbed",
				description: "Deeply interested or involved; engrossed."
			},
			{
				name: "Alert",
				description: "Quick to notice any unusual and potentially dangerous or difficult circumstances."
			},
			{
				name: "Curious",
				description: "Eager to know or learn something."
			},
			{
				name: "Engrossed",
				description: "Having all one's attention or interest absorbed by someone or something."
			},
			{
				name: "Enchanted",
				description: "Filled with delight; charmed."
			},
			{
				name: "Entranced",
				description: "Filled with wonder and delight, holding their entire attention."
			},
			{
				name: "Fascinated",
				description: "Strongly attracted and interested."
			},
			{
				name: "Interested",
				description: "Showing curiosity or concern about something or someone."
			},
			{
				name: "Intrigued",
				description: "Aroused the curiosity or interest of; fascinated."
			},
			{
				name: "Involved",
				description: "Engaged in or connected with a situation or activity."
			},
			{
				name: "Spellbound",
				description: "Holding someone's complete attention as though by magic."
			},
			{
				name: "Stimulated",
				description: "Raised levels of physiological or nervous activity in the body or any biological system."
			},
		],
	},
	{
		category: "Excited",
		feelings: [
			{
				name: "Alive",
				description: "Full of energy and enthusiasm."
			},
			{
				name: "Amazed",
				description: "Extremely surprised or impressed."
			},
			{
				name: "Animated",
				description: "Full of life and enthusiasm."
			},
			{
				name: "Ardent",
				description: "Showing a strong and barely controllable emotion."
			},
			{
				name: "Aroused",
				description: "Feeling or showing excitement or interest."
			},
			{
				name: "Astonished",
				description: "Extremely surprised or shocked."
			},
			{
				name: "Dazzled",
				description: "Extremely impressed or surprised."
			},
			{
				name: "Eager",
				description: "Feeling or showing enthusiasm and interest."
			},
			{
				name: "Energetic",
				description: "Having or showing a lot of energy and enthusiasm."
			},
			{
				name: "Enthusiastic",
				description: "Feeling or showing intense excitement and interest."
			},
			{
				name: "Giddy",
				description: "Feeling or showing a silly or playful excitement."
			},
			{
				name: "Invigorated",
				description: "Feeling refreshed and full of energy."
			},
			{
				name: "Lively",
				description: "Full of energy and enthusiasm."
			},
			{
				name: "Passionate",
				description: "Showing a strong and barely controllable emotion."
			},
			{
				name: "Surprised",
				description: "Extremely surprised or shocked."
			},
			{
				name: "Vibrant",
				description: "Full of energy and enthusiasm."
			},
		],
	},
	{
		category: "Hopeful",
		feelings: [
			{
				name: "Expectant",
				description: "Having a feeling of expectation or anticipation."
			},
			{
				name: "Encouraged",
				description: "Having a feeling of optimism or confidence."
			},
			{
				name: "Optimistic",
				description: "Having a positive outlook on life."
			},
		],
	},
	{
		category: "Confident",
		feelings: [
			{
				name: "Empowered",
				description: "Feeling confident and in control."
			},
			{
				name: "Open",
				description: "Having a feeling of trust or openness."
			},
			{
				name: "Proud",
				description: "Feeling a sense of accomplishment or pride."
			},
			{
				name: "Safe",
				description: "Feeling protected or secure."
			},
			{
				name: "Secure",
				description: "Feeling confident or free from fear."
			},
		],
	},
	{
		category: "Refreshed",
		feelings: [
			{
				name: "Awake",
				description: "Feeling alert and awake."
			},
			{
				name: "Enlivened",
				description: "Feeling refreshed and full of energy."
			},
			{
				name: "Rejuvenated",
				description: "Feeling restored to a more youthful or vigorous state."
			},
			{
				name: "Renewed",
				description: "Feeling restored to a more youthful or vigorous state."
			},
			{
				name: "Rested",
				description: "Feeling refreshed and full of energy."
			},
			{
				name: "Restored",
				description: "Feeling restored to a more youthful or vigorous state."
			},
			{
				name: "Revived",
				description: "Feeling refreshed and full of energy."
			},
		],
	},
	{
		category: "Peaceful",
		feelings: [
			{
				name: "Calm",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Clear headed",
				description: "Feeling mentally clear and focused."
			},
			{
				name: "Comfortable",
				description: "Feeling physically or emotionally at ease."
			},
			{
				name: "Centered",
				description: "Feeling mentally or emotionally stable."
			},
			{
				name: "Content",
				description: "Feeling satisfied or pleased."
			},
			{
				name: "Equanimous",
				description: "Feeling mentally or emotionally stable."
			},
			{
				name: "Fulfilled",
				description: "Feeling satisfied or pleased."
			},
			{
				name: "Mellow",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Quiet",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Relaxed",
				description: "Feeling physically or emotionally at ease."
			},
			{
				name: "Relieved",
				description: "Feeling happy or reassured that something unpleasant has not happened or has ended."
			},
			{
				name: "Satisfied",
				description: "Feeling pleased or content."
			},
			{
				name: "Serene",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Still",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Tranquil",
				description: "Feeling or showing a lack of disturbance or turmoil."
			},
			{
				name: "Trusting",
				description: "Feeling confident or secure."
			},
		],
	},
	{
		category: "Joyful",
		feelings: [
			{
				name: "Amazed",
				description: "Extremely surprised or impressed."
			},
			{
				name: "Amused",
				description: "Feeling entertained or amused."
			},
			{
				name: "Delighted",
				description: "Feeling a great deal of pleasure or enjoyment."
			},
			{
				name: "Glad",
				description: "Feeling happy or pleased."
			},
			{
				name: "Happy",
				description: "Feeling happy or pleased."
			},
			{
				name: "Jubilant",
				description: "Feeling or showing great joy or triumph."
			},
			{
				name: "Pleased",
				description: "Feeling happy or pleased."
			},
		],
	},
	{
		category: "Exhilarated",
		feelings: [
			{
				name: "Empowered",
				description: "Feeling confident and in control."
			},
			{
				name: "Blissful",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Delighted",
				description: "Feeling a great deal of pleasure or enjoyment."
			},
			{
				name: "Ecstatic",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Elated",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Enthralled",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Exuberant",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Radiant",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Rapturous",
				description: "Feeling extremely happy or joyful."
			},
			{
				name: "Thrilled",
				description: "Feeling extremely happy or joyful."
			},
		],
	},
	{
		category: "Grateful",
		feelings: [
			{
				name: "Appreciative",
				description: "Feeling thankful for something or someone."
			},
			{
				name: "Moved",
				description: "Feeling strongly emotionally affected by something."
			},
			{
				name: "Thankful",
				description: "Feeling appreciative for something or someone."
			},
			{
				name: "Touched",
				description: "Feeling emotionally affected by something."
			},
		],
	},
	{
		category: "Afraid",
		feelings: [
			{
				name: "Foreboding",
				description: "Having a feeling of fear and worry about the future."
			},
			{
				name: "Frightened",
				description: "Feeling scared or terrified."
			},
			{
				name: "Mistrustful",
				description: "Feeling suspicious or wary of someone or something."
			},
			{
				name: "Panicked",
				description: "Feeling extremely anxious or frightened."
			},
			{
				name: "Petrified",
				description: "Feeling extremely scared or terrified."
			},
			{
				name: "Scared",
				description: "Feeling frightened or fearful."
			},
			{
				name: "Suspicious",
				description: "Feeling suspicious or wary of someone or something."
			},
			{
				name: "Terrified",
				description: "Feeling extremely scared or terrified."
			},
			{
				name: "Wary",
				description: "Feeling cautious or suspicious."
			},
			{
				name: "Worried",
				description: "Feeling anxious or concerned about something."
			},
		],
	},
	{
		category: "Confused",
		feelings: [
			{
				name: "Ambivalent",
				description: "Having mixed feelings about something."
			},
			{
				name: "Baffled",
				description: "Feeling confused or perplexed."
			},
			{
				name: "Bewildered",
				description: "Feeling confused or lost."
			},
			{
				name: "Dazed",
				description: "Feeling confused or disoriented."
			},
			{
				name: "Hesitant",
				description: "Feeling uncertain or indecisive."
			},
			{
				name: "Lost",
				description: "Feeling confused or uncertain about what to do."
			},
			{
				name: "Mystified",
				description: "Feeling confused or puzzled by something."
			},
			{
				name: "Perplexed",
				description: "Feeling confused or puzzled by something."
			},
			{
				name: "Puzzled",
				description: "Feeling confused or puzzled by something."
			},
			{
				name: "Torn",
				description: "Feeling conflicted or uncertain about something."
			},
		],
	},
	{
		category: "Disconnected",
		feelings: [
			{
				name: "Alienated",
				description: "Feeling disconnected or isolated from others."
			},
			{
				name: "Aloof",
				description: "Feeling distant or detached from others."
			},
			{
				name: "Apathetic",
				description: "Feeling uninterested or indifferent to something."
			},
			{
				name: "Bored",
				description: "Feeling uninterested or uninspired by something."
			},
			{
				name: "Detached",
				description: "Feeling disconnected or separate from something or someone."
			},
			{
				name: "Distant",
				description: "Feeling disconnected or separate from something or someone."
			},
			{
				name: "Distracted",
				description: "Feeling disconnected or separate from something or someone."
			},
			{
				name: "Indifferent",
				description: "Feeling uninterested or uncaring about something."
			},
			{
				name: "Numb",
				description: "Feeling disconnected or separate from something or someone."
			},
			{
				name: "Uninterested",
				description: "Feeling uninterested or uninspired by something."
			},
			{
				name: "Withdrawn",
				description: "Feeling disconnected or separate from something or someone."
			},
		],
	},
	{
		category: "Sad",
		feelings: [
			{
				name: "Depressed",
				description: "Feeling sad, hopeless, or disheartened."
			},
			{
				name: "Despair",
				description: "Feeling hopeless or helpless."
			},
			{
				name: "Despondent",
				description: "Feeling sad, hopeless, or disheartened."
			},
			{
				name: "Disappointed",
				description: "Feeling sad or unhappy because of something that has happened."
			},
			{
				name: "Discouraged",
				description: "Feeling sad or unhappy because of something that has happened."
			},
			{
				name: "Disheartened",
				description: "Feeling sad or unhappy because of something that has happened."
			},
			{
				name: "Gloomy",
				description: "Feeling sad or unhappy about the future."
			},
			{
				name: "Heavy hearted",
				description: "Feeling sad or unhappy about something."
			},
			{
				name: "Hopeless",
				description: "Feeling sad or unhappy about the future."
			},
			{
				name: "Melancholy",
				description: "Feeling sad or unhappy about something."
			},
			{
				name: "Unhappy",
				description: "Feeling sad or unhappy about something."
			},
			{
				name: "Wretched",
				description: "Feeling sad or unhappy about something."
			},
		],
	},
	{
		category: "Annoyed",
		feelings: [
			{
				name: "Aggravated",
				description: "Feeling annoyed or frustrated by something."
			},
			{
				name: "Dismayed",
				description: "Feeling unhappy or disappointed about something."
			},
			{
				name: "Disgruntled",
				description: "Feeling unhappy or dissatisfied with something."
			},
			{
				name: "Displeased",
				description: "Feeling unhappy or dissatisfied with something."
			},
			{
				name: "Exasperated",
				description: "Feeling extremely frustrated or annoyed."
			},
			{
				name: "Frustrated",
				description:
					"Feeling annoyed or disappointed when unable to do or achieve something.",
			},
			{
				name: "Impatient",
				description: "Feeling annoyed or irritated when waiting for something.",
			},
			{
				name: "Irritated",
				description: "Feeling annoyed or bothered by something.",
			},
		],
	},
	{
		category: "Angry",
		feelings: [
			{
				name: "Enraged",
				description: "Feeling extremely angry or furious."
			},
			{
				name: "Furious",
				description: "Feeling extremely angry or enraged."
			},
			{
				name: "Incensed",
				description: "Feeling extremely angry or outraged."
			},
			{
				name: "Irate",
				description: "Feeling extremely angry or enraged."
			},
			{
				name: "Outraged",
				description: "Feeling extremely angry or shocked about something."
			},
			{
				name: "Resentful",
				description: "Feeling bitter or indignant about something."
			},
		],
	},
];
