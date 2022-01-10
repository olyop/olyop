import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, VFC } from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"

const bem =
	createBEM("BigButton")

const BigButton: VFC<BigButtonPropTypes> =
	({ to, text, icon, title }) => (
		<NavLink to={to}>
			<Button
				transparent
				text={text}
				title={title}
				rightIcon={icon}
				className={bem("", "Border")}
			/>
		</NavLink>
	)

export interface BigButtonPropTypes {
	to: string,
	text: string,
	icon: string,
	title: string,
}

export default BigButton