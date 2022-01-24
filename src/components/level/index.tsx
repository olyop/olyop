import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import { SkillLevel } from "../../types"

import "./index.scss"

const bem =
	createBEM("Level")

const Level: VFC<SkillLevel> = ({ level }) => (
	<div className="FlexColumnGapQuart">
		<p className="BodyTwoBold">
			Level:
		</p>
		<div className={bem("")}>
			{Array(level).fill(0).map(
				() => <div className={bem("icon-filled", "icon")}/>,
			)}
			{level < 5 && (
				Array(5 - level).fill(0).map(
					() => <div className={bem("icon")}/>,
				)
			)}
		</div>
	</div>
)

export default Level