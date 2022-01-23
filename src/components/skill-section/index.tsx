import { createBEM } from "@oly_op/bem"
import Image from "@oly_op/react-image"
import Button from "@oly_op/react-button"
import { createElement, CSSProperties, useEffect, useState, VFC } from "react"

import Skill from "../skill"
import { SkillSection as SkillSectionType } from "../../types"

import "./index.scss"

const bem =
	createBEM("Skills")

const expandStyle: CSSProperties = {
	height: "unset",
	visibility: "visible",
	transform: "scaleY(1)",
}

const SkillSection: VFC<SkillSectionPropTypes> = ({
	skill: {
		icon,
		title,
		skills,
		imagePath,
	},
}) => {
	const [ expand, setExpand ] = useState(false)

	const handleExpandOpen =
		() => {
			if (!expand) setExpand(true)
		}

	const handleExpandClose =
		() => setExpand(false)

	useEffect(() => () => {
		setExpand(false)
	}, [])

	return (
		<div
			onClick={handleExpandOpen}
			className={bem("", expand ? "FlexColumn" : "Hover", "Padding Border Rounded")}
			style={expand ? { borderColor: "var(--border-color)" } : { cursor: "pointer" }}
		>
			<Button
				transparent
				icon="expand_more"
				className={bem("expand")}
				iconClassName={bem("expand-icon")}
				onClick={expand ? handleExpandClose : undefined}
				iconStyle={{ transform: expand ? "rotate(180deg)" : undefined }}
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
			{expand && (
				<div
					className={bem("content")}
					style={expand ? expandStyle : undefined}
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
			)}
		</div>
	)
}

interface SkillSectionPropTypes {
	skill: SkillSectionType,
}

export default SkillSection