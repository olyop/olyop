import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, VFC } from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"

const bem =
	createBEM("BigButton")

const BigButton: VFC<BigButtonPropTypes> = ({
	to,
	text,
	title,
	leftIcon,
	rightIcon,
	hideBorder = false,
}) => (
	<NavLink to={to}>
		<Button
			transparent
			text={text}
			title={title}
			icon={leftIcon}
			rightIcon={rightIcon}
			className={bem("", hideBorder || "Border")}
		/>
	</NavLink>
)

export interface BigButtonPropTypes {
	to: string,
	text: string,
	title: string,
	leftIcon?: string,
	rightIcon?: string,
	hideBorder?: boolean,
}

export default BigButton