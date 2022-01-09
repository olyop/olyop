import Image from "@oly_op/react-image"
import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, ReactNode, useState, VFC } from "react"

import "@oly_op/css-utilities/index.css"
import "@oly_op/react-image/build/index.css"
import "@oly_op/react-button/build/index.css"
import "../../index.scss"

import "./index.scss"

const bem =
	createBEM("Skill")

const Skill: VFC<SkillPropTypes> =
	({ icon, title, children }) => {
		const [ hover, setHover ] =
			useState(false)
		const [ expand, setExpand ] =
			useState(false)

		const handleOnEnter =
			() => setHover(true)

		const handleOnLeave =
			() => setHover(false)

		const handleExpandOpen =
			() => {
				if (!expand) setExpand(true)
			}

		const handleExpandClose =
			() => setExpand(false)

		return (
			<div
				onClick={handleExpandOpen}
				onMouseEnter={handleOnEnter}
				onMouseLeave={handleOnLeave}
				title={expand ? undefined : "Expand"}
				className={bem("", expand || "Hover", "Padding MarginBottom Border Rounded")}
				style={expand ? { borderColor: "var(--border-color)" } : { cursor: "pointer" }}
			>
				{expand || (
					<Button
						transparent
						icon="expand_more"
						className={bem("expand")}
						style={{ opacity: hover ? 1 : 0 }}
					/>
				)}
				<div className="FlexRowGapHalfCenter">
					<Image
						url={icon}
						title={title}
						className={bem("icon", "Rounded")}
					/>
					<h4 className={bem("title", "HeadingSix")}>
						{title}
					</h4>
				</div>
				<div
					className={bem("content", "BodyOne")}
					style={expand ? {
						height: "100%",
						display: "block",
						visibility: "visible",
					} : undefined}
				>
					<p className="BodyOne MarginTopHalf">
						{children}
					</p>
					<Button
						transparent
						text="Collapse"
						icon="expand_less"
						onClick={handleExpandClose}
						className={bem("collapse", "MarginTopThreeQuart")}
					/>
				</div>
			</div>
		)
	}

export interface SkillPropTypes {
	icon: string,
	title: string,
	children: ReactNode,
}

export default Skill