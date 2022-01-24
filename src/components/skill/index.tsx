import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, Fragment, useEffect, useState, VFC } from "react"

import { Skill as SkillType } from "../../types"
import Level from "../level"

import "./index.scss"

const bem =
	createBEM("Skill")

const Skill: VFC<SkillPropTypes> = ({
	skill: {
		title,
		level,
		content,
		imagePath,
		experience,
		initialExpand = false,
	},
}) => {
	const [ expand, setExpand ] = useState(initialExpand)

	const handleExpand =
		() => setExpand(prevState => !prevState)

	useEffect(() => () => setExpand(false), [])

	return (
		<div
			className={bem(
				"",
				expand ? "Border Rounded" : undefined,
				"FlexColumnCenterGapHalf",
			)}
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
				style={{ borderRadius: expand ? 0 : undefined }}
				iconStyle={{ transform: expand ? "rotate(180deg)" : undefined }}
			/>
			{expand && (
				<Fragment>
					<div className={bem("details", "FlexRow")}>
						<Level
							level={level}
						/>
						<div className="FlexColumnGapQuart">
							<p className="BodyTwoBold">
								Experience:
							</p>
							<p className="BodyTwo">
								{experience}
							</p>
						</div>
					</div>
					<div className={bem("content", "PaddingBottom")}>
						<p className="BodyTwo">
							{content}
						</p>
					</div>
				</Fragment>
			)}
		</div>
	)
}

interface SkillPropTypes {
	skill: SkillType,
}

export default Skill