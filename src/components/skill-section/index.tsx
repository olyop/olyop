import { createBEM } from "@oly_op/bem";
import Button from "@oly_op/react-button";
import { createElement, CSSProperties, useState, FC } from "react";

import Skill from "../skill";
import { SkillSection as SkillSectionType } from "../../types";

import "./index.scss";

const bem = createBEM("SkillSection");

const expandStyle: CSSProperties = {
	height: "unset",
	visibility: "visible",
	transform: "scaleY(1)",
};

const closedStyle: CSSProperties = {
	height: 0,
	visibility: "hidden",
	transform: "scaleY(0)",
};

const SkillSection: FC<SkillSectionPropTypes> = ({ skill: { icon, title, skills, imagePath } }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleExpandOpen = () => {
		if (!isExpanded) setIsExpanded(true);
	};

	const handleExpandClose = () => setIsExpanded(false);

	return (
		<button
			type="button"
			onClick={handleExpandOpen}
			className={bem("", isExpanded ? "FlexColumn" : "Hover", "Padding Border Rounded")}
			style={isExpanded ? { borderColor: "var(--border-color)" } : { cursor: "pointer" }}
		>
			<Button
				isHTMLButton={false}
				transparent
				icon="expand_more"
				className={bem("expand")}
				iconClassName={bem("expand-icon")}
				onClick={isExpanded ? handleExpandClose : undefined}
				iconStyle={{ transform: isExpanded ? "rotate(180deg)" : undefined }}
			/>
			<div className="FlexRowGapHalfCenter">
				{imagePath ? (
					<img alt={title} title={title} src={imagePath} className={bem("image")} />
				) : (
					<Button
						isHTMLButton={false}
						transparent
						icon={icon}
						title={title}
						className={bem("icon")}
						iconClassName={bem("icon-icon")}
					/>
				)}
				<h3 className={bem("title", "HeadingFive")}>{title}</h3>
			</div>
			<div className={bem("content")} style={isExpanded ? expandStyle : closedStyle}>
				{skills.map(skill => (
					<Skill skill={skill} key={skill.title} />
				))}
			</div>
		</button>
	);
};

interface SkillSectionPropTypes {
	skill: SkillSectionType;
}

export default SkillSection;
