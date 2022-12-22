import { createElement, FC } from "react";

import SkillSection from "../skill-section";
import { SkillSection as SkillSectionType } from "../../types";

import "./index.scss";

const Skills: FC<SkillsPropTypes> = ({ skills }) => (
	<div className="Skills FlexColumnGap">
		{skills.map(skill => (
			<SkillSection skill={skill} key={skill.title} />
		))}
	</div>
);

interface SkillsPropTypes {
	skills: SkillSectionType[];
}

export default Skills;
