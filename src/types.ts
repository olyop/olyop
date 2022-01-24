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

	// temporary
	initialExpand?: boolean,
}

export interface SkillLevel {
	level: 1 | 2 | 3 | 4 | 5,
}

export interface Skill extends SkillBase, SkillLevel {
	title: string,
	icon?: string,
	content: string,
	imagePath?: string,
	experience: SkillExperience,
}

export interface SkillSection extends SkillBase {
	skills: Skill[],
}