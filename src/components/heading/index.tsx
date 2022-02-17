import { BEMInput, createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button/build"
import { createElement, ReactNode, VFC } from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"

const bem =
	createBEM("Heading")

const Heading: VFC<HeadingPropTypes> =
	({ className, children }) => (
		<div className={bem("", "MarginBottom FlexRowGapHalfCenter")}>
			<NavLink to="/">
				<Button
					transparent
					icon="arrow_back"
					className={bem("back")}
				/>
			</NavLink>
			<h2 className={bem(className, "text", "HeadingFive")}>
				{children}
			</h2>
		</div>
	)

export interface HeadingPropTypes {
	children: ReactNode,
	className?: BEMInput,
}

export default Heading