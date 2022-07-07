import { createElement, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import Index from "./components/index"
import Metadata from "./components/metadata"

const root =
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createRoot(document.getElementById("Root")!)

root.render(
	<StrictMode>
		<Metadata>
			<BrowserRouter>
				<Index/>
			</BrowserRouter>
		</Metadata>
	</StrictMode>,
)