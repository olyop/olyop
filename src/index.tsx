import ReactDOM from "react-dom"
import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"
import { BrowserRouter } from "react-router-dom"
import { MetadataProvider } from "@oly_op/react-metadata"

import Pages from "./components/pages"
import Header from "./components/header"
import Footer from "./components/footer"

const bem = createBEM("Index")

const Index: VFC = () => (
	<div className={bem("", "FullWidthAndHeight")}>
		<Header/>
		<div className={bem("inner", "FlexRowCenter FullWidthAndHeight BorderLeft BorderRight")}>
			<Pages/>
		</div>
		<Footer/>
	</div>
)

ReactDOM.render(
	<MetadataProvider appTitle="olyop">
		<BrowserRouter>
			<Index/>
		</BrowserRouter>
	</MetadataProvider>,
	document.getElementById("Root"),
)