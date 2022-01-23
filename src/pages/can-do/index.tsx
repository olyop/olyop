import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import Heading from "../../components/heading"
import BigButton from "../../components/big-button"

import "./index.scss"

const bem =
	createBEM("CanDo")

const CanDoPage: VFC = () => (
	<div className={bem("")}>
		<Heading>
			What I can do for you?
		</Heading>
		<div>
			<p className="BodyOne">
				WIP
			</p>
		</div>
		<div className={bem("buttons", "FlexColumnGapHalf")}>
			<BigButton
				to="/technical-skills"
				rightIcon="arrow_right_alt"
				text="See areas of expertise"
				title="I don't like bragging..."
			/>
			<BigButton
				to="/"
				hideBorder
				text="Back"
				title="Go Back"
				leftIcon="arrow_back"
			/>
		</div>
	</div>
)

export default CanDoPage