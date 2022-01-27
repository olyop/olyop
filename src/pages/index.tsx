import { createBEM } from "@oly_op/bem/build"
import { createElement, VFC } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./home"
import SkillsPage from "./skills"
import ProjectsPage from "./projects"

import "./index.scss"

const bem =
	createBEM("Pages")

const Pages: VFC = () => (
	<div className={bem("")}>
		<div className={bem("inner")}>
			<Routes>
				<Route
					path=""
					element={<HomePage/>}
				/>
				<Route
					path="technical-skills"
					element={<SkillsPage/>}
				/>
				<Route
					path="projects"
					element={<ProjectsPage/>}
				/>
			</Routes>
		</div>
	</div>
)

export default Pages