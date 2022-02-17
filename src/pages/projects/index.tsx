import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import content from "./content"
import Heading from "../../components/heading"
import Project from "../../components/project"

import "./index.scss"

const bem =
	createBEM("ProjectsPage")

const ProjectsPage: VFC = () => (
	<div className={bem("")}>
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
	</div>
)

export default ProjectsPage