import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import { Metadata } from "@oly_op/react-metadata"

import content from "./content"

import Skills from "../../components/skills"
import Heading from "../../components/heading"
import BigButton from "../../components/big-button"

import "./index.scss"

const bem =
	createBEM("SkillsPage")

const SkillsPage: VFC = () => (
	<Metadata title="Skills">
		<div className={bem("", "FlexColumnCenter")}>
			<Heading>
				Technical Skills
			</Heading>
			<p className="BodyOne">
				I am experienced in the following<br/> programming technologies
			</p>
			<Skills
				skills={content}
			/>
			<BigButton
				to="/"
				hideBorder
				text="Back"
				title="Go Back"
				leftIcon="arrow_back"
			/>
		</div>
	</Metadata>
)

export default SkillsPage