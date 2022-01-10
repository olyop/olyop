import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import "./index.scss"

const bem =
	createBEM("Footer")

const Footer: VFC = () => (
	<div className={bem("", "FlexRowCenter")}>
		<a
			children="GitHub"
			data-size="large"
			href="https://github.com/olyop"
			className="github-button BodyOne"
			aria-label="Follow @olyop on GitHub"
		/>
	</div>
)

export default Footer