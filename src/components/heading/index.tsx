import { BEMInput, createBEM } from "@oly_op/bem"
import { createElement, ReactNode, VFC } from "react"

import "./index.scss"

const bem =
	createBEM("Heading")

const Heading: VFC<HeadingPropTypes> =
	({ className, children }) => (
		<h3 className={bem(className, "", "HeadingFive")}>
			{children}
		</h3>
	)

export interface HeadingPropTypes {
	children: ReactNode,
	className?: BEMInput,
}

export default Heading