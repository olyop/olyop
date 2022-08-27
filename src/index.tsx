import { createElement, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import Index from "./components/index"
import Metadata from "./components/metadata"

const container =
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById("Root")!

const root =
	createRoot(container)

root.render(
	<StrictMode>
		<Metadata>
			<BrowserRouter>
				<Index/>
			</BrowserRouter>
		</Metadata>
	</StrictMode>,
)