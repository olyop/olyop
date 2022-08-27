import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { BEMInput, createBEM } from "@oly_op/bem"
import { createElement, FC, PropsWithChildren } from "react"

import "./index.scss"

const bem = createBEM("Heading")

const Heading: FC<HeadingPropTypes> = ({ className, children }) => (
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

export interface HeadingPropTypes extends PropsWithChildren {
	className?: BEMInput,
}

export default Heading