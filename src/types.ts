export enum SkillExperience {
	FOUR_YEARS = "4+ years",
	THREE_YEARS = "3+ years",
	TWO_YEARS = "2+ years",
	ONE_YEAR = "1+ year",
	SIX_MONTHS = "6+ months",
	THREE_MONTHS = "3+ months",
	RECENTLY_LEARNED = "Recently Learned",
}

interface SkillBase {
	title: string;
	icon?: string;
	imagePath?: string;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface SkillLevelOptions {
	level: SkillLevel;
}

export interface Skill extends SkillBase, SkillLevelOptions {
	content?: string;
	experience: SkillExperience;
}

export interface SkillSection extends SkillBase {
	skills: Skill[];
}

export interface ProjectLink {
	url: string;
	text: string;
}

export interface Project {
	name: string;
	stack: string[];
	imageURL: string;
	link: ProjectLink;
	description: string[];
	sourceCodeURL: string;
}

export enum SettingsTransitions {
	ON = "ON",
	OFF = "OFF",
	SYSTEM = "SYSTEM",
}
