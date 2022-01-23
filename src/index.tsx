import ReactDOM from "react-dom"
import { createElement } from "react"
import { BrowserRouter } from "react-router-dom"
import { MetadataProvider, ParseTitleFunction } from "@oly_op/react-metadata"

import Index from "./components/index"

const parseTitle: ParseTitleFunction =
	({ appTitle, pageTitle }) =>
		`${appTitle}: ${pageTitle}`

ReactDOM.render(
	<MetadataProvider appTitle="olyop" parseTitle={parseTitle}>
		<BrowserRouter>
			<Index/>
		</BrowserRouter>
	</MetadataProvider>,
	document.getElementById("Root"),
)