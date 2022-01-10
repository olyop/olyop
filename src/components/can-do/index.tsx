import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import Heading from "../heading"
import BigButton from "../big-button"

import "./index.scss"

const bem =
	createBEM("CanDo")

const CanDo: VFC = () => (
	<div className={bem("")}>
		<Heading>
			What I can do for you?
		</Heading>
		<div>
			<p className="BodyOne">
				WIP
			</p>
		</div>
		<BigButton
			to="/skills"
			icon="arrow_right_alt"
			text="See areas of expertise"
			title="I don't like bragging..."
		/>
	</div>
)

export default CanDo