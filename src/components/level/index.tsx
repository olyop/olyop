/* eslint-disable react/no-array-index-key */
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
				(_, index) => (
					<div
						key={index}
						className={bem("icon-filled", "icon")}
					/>
				),
			)}
			{level < 5 && (
				Array(5 - level).fill(0).map(
					(_, index) => (
						<div
							key={level + index}
							className={bem("icon")}
						/>
					),
				)
			)}
		</div>
	</div>
)

export default Level