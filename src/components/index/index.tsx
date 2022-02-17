import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { createElement, VFC } from "react"

import Header from "../header"
import Footer from "../footer"
import Pages from "../../pages"

import "./index.scss"

const bem = createBEM("Index")

const Index: VFC = () => (
	<div className={bem("", "FullWidthAndHeight")}>
		<NavLink to="/settings" className={bem("settings")}>
			<Button
				transparent
				icon="settings"
			/>
		</NavLink>
		<div className={bem("inner", "FlexColumnCenter BorderLeft BorderRight")}>
			<Header/>
			<Pages/>
			<Footer/>
		</div>
	</div>
)

export default Index