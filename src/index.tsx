import ReactDOM from "react-dom"
import { createElement, VFC } from "react"

import Header from "./components/header"
import Content from "./components/content"

const Index: VFC = () => (
	<div className="Index FullWidthAndHeight">
		<Header/>
		<div className="FlexRowCenter FullWidthAndHeight BorderLeft BorderRight">
			<Content/>
		</div>
	</div>
)

ReactDOM.render(
	<Index/>,
	document.getElementById("Root"),
)