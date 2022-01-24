import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, VFC } from "react"

import "./index.scss"

const bem =
	createBEM("Footer")

const Footer: VFC = () => (
	<div className={bem("", "FlexColumnCenterGap")}>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/olyop"
		>
			<Button
				transparent
				text="GitHub"
				image="/github.png"
				className="Border Rounded"
			/>
		</a>
		<div className="FlexRowCenterGapHalf">
			<a
				target="_blank"
				rel="noreferrer"
				className="BodyTwo"
				children="website source code"
				href="https://github.com/olyop/olyop"
			/>
		</div>
	</div>
)

export default Footer