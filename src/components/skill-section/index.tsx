import { createBEM } from "@oly_op/bem"
import Image from "@oly_op/react-image"
import Button from "@oly_op/react-button"
import { createElement, CSSProperties, useEffect, useState, VFC } from "react"

import Skill from "../skill"
import { SkillSection as SkillSectionType } from "../../types"

import "./index.scss"

const bem =
	createBEM("SkillSection")

const expandStyle: CSSProperties = {
	height: "unset",
	visibility: "visible",
	transform: "scaleY(1)",
}

const closedStyle: CSSProperties = {
	height: 0,
	visibility: "hidden",
	transform: "scaleY(0)",
}

const SkillSection: VFC<SkillSectionPropTypes> = ({
	skill: {
		icon,
		title,
		skills,
		imagePath,
		initialExpand = false,
	},
}) => {
	const [ isExpanded, setIsExpanded ] = useState(initialExpand)

	const handleExpandOpen =
		() => {
			if (!isExpanded) setIsExpanded(true)
		}

	const handleExpandClose =
		() => setIsExpanded(false)

	useEffect(() => () => setIsExpanded(false), [])

	return (
		<div
			onClick={handleExpandOpen}
			className={bem("", isExpanded ? "FlexColumn" : "Hover", "Padding Border Rounded")}
			style={isExpanded ? { borderColor: "var(--border-color)" } : { cursor: "pointer" }}
		>
			<Button
				transparent
				icon="expand_more"
				className={bem("expand")}
				iconClassName={bem("expand-icon")}
				onClick={isExpanded ? handleExpandClose : undefined}
				iconStyle={{ transform: isExpanded ? "rotate(180deg)" : undefined }}
			/>
			<div className="FlexRowGapHalfCenter">
				{imagePath ? (
					<Image
						title={title}
						url={imagePath}
						className={bem("image")}
					/>
				) : (
					<Button
						transparent
						icon={icon}
						title={title}
						className={bem("icon")}
						iconClassName={bem("icon-icon")}
					/>
				)}
				<h3 className={bem("title", "HeadingFive")}>
					{title}
				</h3>
			</div>
			<div
				className={bem("content")}
				style={isExpanded ? expandStyle : closedStyle}
			>
				{skills.map(
					skill => (
						<Skill
							skill={skill}
							key={skill.title}
						/>
					),
				)}
			</div>
		</div>
	)
}

interface SkillSectionPropTypes {
	skill: SkillSectionType,
}

export default SkillSection