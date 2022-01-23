import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, useEffect, useState, VFC } from "react"

import { Skill as SkillType } from "../../types"

import "./index.scss"

const bem =
	createBEM("Skill")

const Skill: VFC<SkillPropTypes> = ({
	skill: {
		title,
		content,
		imagePath,
	},
}) => {
	const [ expand, setExpand ] = useState(false)

	const handleExpand =
		() => setExpand(prevState => !prevState)

	useEffect(() => () => {
		setExpand(false)
	}, [])

	return (
		<div
			className={bem("", "FlexColumnCenterGapHalf")}
			style={expand ? { gridColumn: "1 / -1" } : undefined}
		>
			<Button
				transparent
				text={title}
				image={imagePath}
				onClick={handleExpand}
				rightIcon="expand_more"
				className={bem("button")}
				imageClassName={bem("button-image")}
				rightIconClassName={bem("button-icon")}
				iconStyle={{ transform: expand ? "rotate(180deg)" : undefined }}
			/>
			{expand && content && (
				<div className={bem("content", "PaddingBottom")}>
					<p className="BodyTwo">
						{content}
					</p>
				</div>
			)}
		</div>
	)
}

interface SkillPropTypes {
	skill: SkillType,
}

export default Skill