import { createBEM } from "@oly_op/bem/build"
import { createElement, VFC } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../home"
import CanDo from "../can-do"
import Skills from "../skills"

import "./index.scss"

const bem =
	createBEM("Pages")

const Pages: VFC = () => (
	<div className={bem("")}>
		<Routes>
			<Route
				path=""
				element={<Home/>}
			/>
			<Route
				element={<Skills/>}
				path="skills"
			/>
			<Route
				element={<CanDo/>}
				path="what-i-can-do-for-you"
			/>
		</Routes>
	</div>
)

export default Pages