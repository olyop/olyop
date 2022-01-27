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
		list,
		title,
		level,
		content,
		imagePath,
		experience,
		initialExpand = false,
	},
}) => {
	const [ isExpanded, setIsExpanded ] = useState(initialExpand)

	const handleToggleExpand =
		() => setIsExpanded(prevState => !prevState)

	useEffect(() => () => setIsExpanded(false), [])

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
				image={imagePath}
				rightIcon="expand_more"
				className={bem("button")}
				onClick={handleToggleExpand}
				imageClassName={bem("button-image")}
				rightIconClassName={bem("button-icon")}
				style={{ borderRadius: isExpanded ? 0 : undefined }}
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
						{list && (
							<ul>
								{list.map(
									item => (
										<li key={item} className="BodyTwo">
											{item}
										</li>
									),
								)}
							</ul>
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