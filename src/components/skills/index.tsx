import { Metadata } from "@oly_op/react-metadata"
import { createElement, Fragment, VFC } from "react"

import Skill from "../skill"
import Heading from "../heading"

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

const Skills: VFC = () => (
	<Metadata title="Skills">
		<div className="FlexColumnGap">
			<Heading>
				Skills
			</Heading>
			<Skill
				children={typeScriptText}
				icon="/typescript-logo.png"
				title="JavaScript/TypeScript"
			/>
		</div>
	</Metadata>
)

export default Skills