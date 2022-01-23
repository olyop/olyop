import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import { Metadata } from "@oly_op/react-metadata"

import BigButton from "../../components/big-button"

import "./index.scss"

const bem =
	createBEM("Home")

const HomePage: VFC = () => (
	<Metadata>
		<div className={bem("", "FlexColumn")}>
			<h2 className={bem("title", "HeadingFive")}>
				👋 Hello! 👋<br/>
				My name is Oliver.<br/>
				Welcome!
			</h2>
			<div className="FlexColumnGapHalf">
				<p className="BodyOne">
					I am a <b>fullstack</b> software developer<br/>
					based in Sydney, Australia.
				</p>
				<p className="BodyOne">
					I specialise in<br/>
					designing, developing, and deploying<br/>
					fully featured <b>single-page applications </b>
					across the stack while scaling them in the cloud.
				</p>
				<p className="BodyOne">
					Need a <b>website</b>?<br/>
					I can create and deploy a<br/>
					<b> personal</b> or <b>business</b><br/>
					website with any requirements.
				</p>
			</div>
			<BigButton
				title="You'll be suprised"
				rightIcon="arrow_right_alt"
				to="/what-i-can-do-for-you"
				text="What I can do for you"
			/>
		</div>
	</Metadata>
)

export default HomePage