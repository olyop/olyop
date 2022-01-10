import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import { Metadata } from "@oly_op/react-metadata"

import "@oly_op/css-utilities/index.css"
import "@oly_op/react-image/build/index.css"
import "@oly_op/react-button/build/index.css"
import "../../index.scss"

import "./index.scss"
import BigButton from "../big-button"

const bem =
	createBEM("Home")

const Home: VFC = () => (
	<Metadata>
		<div className={bem("", "FlexColumn")}>
			<h2 className={bem("title", "HeadingFive")}>
				👋 Hello! 👋<br/>
				My name is Oliver.<br/>
				Welcome!
			</h2>
			<div className="FlexColumnGapHalf">
				<p className="BodyOne MarginBottomHalf">
					I am a <b>fullstack</b> software developer<br/>
					based in Sydney, Australia.
				</p>
				<p className="BodyOne MarginBottomHalf">
					I specializie in<br/>
					designing, developing, and deploying<br/>
					fully featured <b>single-page applications </b>
					across the stack while scaling them in the cloud.
				</p>
				<p className="BodyOne">
					Need a <b>website</b>?<br/>
					I can create and deploy a<br/>
					<b> personal</b> or <b>buisness</b><br/>
					website with any requirements.
				</p>
			</div>
			<BigButton
				icon="arrow_right_alt"
				to="/what-i-can-do-for-you"
				title="You'll be suprised"
				text="What I can do for you"
			/>
		</div>
	</Metadata>
)

export default Home