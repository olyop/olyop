import { render } from "react-dom"
import { createElement } from "react"
import { BrowserRouter } from "react-router-dom"

import Index from "./components/index"
import Metadata from "./components/metadata"

render(
	<Metadata>
		<BrowserRouter>
			<Index/>
		</BrowserRouter>
	</Metadata>,
	document.getElementById("Root"),
)