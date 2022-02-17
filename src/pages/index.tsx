import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./home"
import SkillsPage from "./skills"
import ProjectsPage from "./projects"
import SettingsPage from "./settings"

import "./index.scss"

const bem =
	createBEM("Pages")

const Pages: VFC = () => (
	<div className={bem("")}>
		<div className={bem("inner", "FullWidthAndHeight")}>
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
				<Route
					path="settings"
					element={<SettingsPage/>}
				/>
			</Routes>
		</div>
	</div>
)

export default Pages