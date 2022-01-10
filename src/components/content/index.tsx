import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, Fragment, VFC } from "react"

import Skill from "../skill"
import Heading from "../heading"

import "./index.scss"

const typeScriptText = (
	<Fragment>
		Extensive knowledge and experience programming in this language (5+ years).
		Profficent both in the <b>Browser</b> and <b>Node</b>.
		Comprehensive experience with the ecosystem of
		<b>libraries</b> and <b>frameworks</b>.
		I use <b>TypeScript</b> everywhere and take full advantage
		of added type saftey.
	</Fragment>
)

const bem =
	createBEM("Content")

const Content: VFC = () => (
	<div className={bem("")}>
		<div className={bem("intro", "FlexColumn")}>
			<h2 className={bem("intro-title", "HeadingFive")}>
				👋 Hello! 👋
				<br/>
				My name is Oliver.
			</h2>
			<div className="FlexColumnGapHalf">
				<p className="BodyOne MarginBottomHalf">
					I am a <b>fullstack</b> software developer
					based in Sydney, Australia.
				</p>
				<p className="BodyOne MarginBottomHalf">
					I specializie in designing and developing,
					fully featured <b>single-page applications </b>
					including deploying and scaling them
					across all layers of the stack.
				</p>
				<p className="BodyOne">
					I am also well versed in building and deploying
					websites and can work with any buisness and their requirements.
				</p>
			</div>
			<Button
				rightIcon="arrow_right_alt"
				text="What I can do for you"
				textClassName={bem("intro-can-text")}
				className={bem("intro-can", "Elevated")}
			/>
		</div>
		<Heading>
			Skills
		</Heading>
		<Skill
			children={typeScriptText}
			icon="/typescript-logo.png"
			title="JavaScript/TypeScript"
		/>
		<div className="FlexRow MarginTopDouble">
			<a
				children="GitHub"
				data-size="large"
				href="https://github.com/olyop"
				className="github-button BodyOne"
				aria-label="Follow @olyop on GitHub"
			/>
		</div>
	</div>
)

export default Content