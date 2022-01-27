import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import content from "./content"
import Heading from "../../components/heading"
import Project from "../../components/project"
import BigButton from "../../components/big-button"

import "./index.scss"

const bem =
	createBEM("ProjectsPage")

const ProjectsPage: VFC = () => (
	<div className={bem("", "FlexColumnCenter")}>
		<Heading>
			Projects
		</Heading>
		<div className={bem("list", "FlexColumnGap")}>
			{content.map(
				project => (
					<Project
						project={project}
						key={project.name}
					/>
				),
			)}
		</div>
		<BigButton
			to="/"
			hideBorder
			text="Back"
			title="Go Back"
			leftIcon="arrow_back"
		/>
	</div>
)

export default ProjectsPage