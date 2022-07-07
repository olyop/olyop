import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, Fragment, useState, FC } from "react"

import Level from "../level"
import { Skill as SkillType } from "../../types"

import "./index.scss"

const bem =
	createBEM("Skill")

const Skill: FC<SkillPropTypes> = ({
	skill: {
		title,
		level,
		content,
		imagePath,
		experience,
	},
}) => {
	const [ isExpanded, setIsExpanded ] = useState(false)

	const handleToggleExpand =
		() => setIsExpanded(prevState => !prevState)

	return (
		<div
			className={bem(
				"",
				isExpanded ? "Border Rounded" : undefined,
				"FlexColumnCenterGapHalf",
			)}
			style={isExpanded ? { gridColumn: "1 / -1" } : undefined}
		>
			<Button
				transparent
				text={title}
				rightIcon="expand_more"
				className={bem("button")}
				onClick={handleToggleExpand}
				imageClassName={bem("button-image")}
				rightIconClassName={bem("button-icon")}
				style={{ borderRadius: isExpanded ? 0 : undefined }}
				image={imagePath ? { description: "", src: imagePath } : undefined}
				iconStyle={{ transform: isExpanded ? "rotate(180deg)" : undefined }}
			/>
			{isExpanded && (
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
						{content && (
							<p className="BodyTwo">
								{content}
							</p>
						)}
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