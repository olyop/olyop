import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import GitHubButton from "react-github-btn"

import "./index.scss"

const bem =
	createBEM("Footer")

const Footer: VFC = () => (
	<div className={bem("")}>
		<div className={bem("inner", "FlexRowCenter")}>
			<GitHubButton
				data-size="large"
				children="GitHub"
				href="https://github.com/olyop"
			/>
		</div>
	</div>
)

export default Footer