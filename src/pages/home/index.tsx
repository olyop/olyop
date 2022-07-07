import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { createElement, FC } from "react"
import { Metadata } from "@oly_op/react-metadata"

import "./index.scss"

const bem =
	createBEM("Home")

const HomePage: FC = () => (
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
			<div className="FlexColumnCenterGap">
				<NavLink to="/technical-skills">
					<Button
						transparent
						text="Technical Skills"
						rightIcon="arrow_right_alt"
						title="See technical Skills"
						className={bem("button", "Border")}
					/>
				</NavLink>
				<NavLink to="/projects">
					<Button
						transparent
						text="Projects"
						icon="assignment"
						title="See projects"
						className={bem("button", "Border")}
					/>
				</NavLink>
			</div>
		</div>
	</Metadata>
)

export default HomePage