export enum SkillExperience {
	ONE_YEAR = "1+ year",
	TWO_YEARS = "2+ years",
	THREE_YEARS = "3+ years",
	SIX_MONTHS = "6+ months",
	RECENTLY_LEARNED = "Recently Learnt",
}

interface SkillBase {
	title: string,
	icon?: string,
	content: string,
	imagePath?: string,
}

export interface Skill extends SkillBase {
	title: string,
	icon?: string,
	content: string,
	imagePath?: string,
	level: 1 | 2 | 3 | 4 | 5,
	experience?: SkillExperience,
}

export interface SkillSection extends SkillBase {
	skills: Skill[],
}