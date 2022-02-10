import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, VFC } from "react"

import "./index.scss"

const bem =
	createBEM("Footer")

const Footer: VFC = () => (
	<div className="FlexColumnCenterGap">
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/olyop"
		>
			<Button
				transparent
				text="GitHub"
				className="Border Rounded"
				image={{
					src: "/github.png",
					description: "GitHub",
					crossOrigin: "anonymous",
				}}
			/>
		</a>
		<div className="FlexRowCenterGapHalf">
			<a
				target="_blank"
				rel="noreferrer"
				children="website source code"
				className={bem("", "BodyTwo")}
				href="https://github.com/olyop/olyop"
			/>
		</div>
	</div>
)

export default Footer